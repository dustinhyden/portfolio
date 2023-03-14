"use client"
import { useAnimations, useGLTF } from "@react-three/drei"
import React, { useEffect, useRef, useState } from "react"
import { useScrollDirection } from "react-use-scroll-direction"
import * as THREE from "three"
import { GLTF } from "three-stdlib"
import Hover from "../Hover"

type GLTFResult = GLTF & {
  nodes: {
    Cylinder003: THREE.SkinnedMesh
    Dustin: THREE.SkinnedMesh
    Bone: THREE.Bone
  }
  materials: {
    Dustin_Mat: THREE.MeshStandardMaterial
  }
  animations: GLTFActions[]
}

type ActionName = "Clicked" | "Idle" | "Pull" | "Run"

interface GLTFActions extends THREE.AnimationClip {
  name: ActionName
}
interface CharacterProps {
  dontAnimateOnScroll?: boolean
}
export default function Character(
  props: JSX.IntrinsicElements["group"] & CharacterProps
) {
  const [activeAnim, setActiveAnim] = useState<ActionName>("Idle")
  const group = useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF(
    "/character-transformed.glb"
  ) as GLTFResult
  const { actions } = useAnimations(animations, group)

  const { scrollDirection } = useScrollDirection()

  // Fade between animations
  useEffect(() => {
    if (!actions[activeAnim]) return
    actions[activeAnim]?.reset().fadeIn(0.15).play()
    return () => {
      if (actions[activeAnim]) {
        actions[activeAnim]?.fadeOut(0.15)
      }
    }
  }, [actions, activeAnim])

  // When click animation ends, go back to idle
  useEffect(() => {
    if (!actions[activeAnim]) return
    if (activeAnim == "Clicked") {
      let switchOnFinish = setTimeout(() => setActiveAnim("Idle"), 450)
      return () => {
        clearTimeout(switchOnFinish)
      }
    }
  }, [actions, activeAnim])

  // Switch animations based on scroll
  useEffect(() => {
    if (!actions[activeAnim]) return
    if (props.dontAnimateOnScroll) return
    let minAnimationDuration = setTimeout(() => {}, 1000)
    if (scrollDirection == "UP") {
      if (activeAnim != "Pull") setActiveAnim("Pull")
      clearTimeout(minAnimationDuration)
    } else if (scrollDirection == "DOWN") {
      if (activeAnim != "Run") setActiveAnim("Run")
      clearTimeout(minAnimationDuration)
    } else {
      if (activeAnim != "Idle") {
        minAnimationDuration = setTimeout(
          () => setActiveAnim("Idle"),
          activeAnim === "Pull" ? 100 : 450
        )
      }
    }
    return () => {
      clearTimeout(minAnimationDuration)
    }
  }, [scrollDirection, actions, activeAnim, props.dontAnimateOnScroll])

  const handleClick = () => {
    setActiveAnim("Clicked")
    actions.Clicked?.setLoop(THREE.LoopOnce, 1)
  }

  return (
    <Hover>
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="Dustin_Rig">
            <primitive object={nodes.Bone} />
            <skinnedMesh
              name="Cylinder003"
              geometry={nodes.Cylinder003.geometry}
              material={materials.Dustin_Mat}
              skeleton={nodes.Cylinder003.skeleton}
              position={[-2, 0, 0]}
            />
            <skinnedMesh
              name="Dustin"
              geometry={nodes.Dustin.geometry}
              material={materials.Dustin_Mat}
              skeleton={nodes.Dustin.skeleton}
              onClick={handleClick}
            />
          </group>
        </group>
      </group>
    </Hover>
  )
}

useGLTF.preload("/character-transformed.glb")
