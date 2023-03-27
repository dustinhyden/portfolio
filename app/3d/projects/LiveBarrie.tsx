"use client"
import { useMouseContext } from "@/app/contexts/MouseContext"
import { ProjectProps } from "@/app/data"
import { NINETY_DEGREES } from "@/app/utils/radians"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import React, { useRef, useState } from "react"

import * as THREE from "three"
import { GLTF } from "three-stdlib"
import Hover from "../Hover"
import ProjectOffsetWrapper from "./ProjectOffsetWrapper"

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
  }
  materials: {
    BuildingMaterial: THREE.MeshStandardMaterial
  }
}

export function LiveBarrie(props: ProjectProps) {
  const { nodes, materials } = useGLTF(
    "/livebarrie-transformed.glb"
  ) as GLTFResult
  const [hovered, hover] = useState(false)
  const scale = props.index == 0 ? 3.5 : 6.5
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (ref.current) {
      if (hovered) {
        if (ref.current.scale.y < scale * 1.1)
          ref.current.scale.y += delta * 8.25
      } else {
        if (ref.current.scale.y > scale) ref.current.scale.y -= delta * 8.25
      }
    }
  })

  return (
    <ProjectOffsetWrapper {...props}>
      <Hover index={props.index}>
        <mesh
          ref={ref}
          geometry={nodes.Cube.geometry}
          material={materials.BuildingMaterial}
          scale={[scale, scale, scale]}
          rotation={[0, NINETY_DEGREES, 0]}
          position={[props.index == 0 ? 0 : scale * 1.5, 0, 0]}
          onPointerOver={(event) => hover(true)}
          onPointerOut={(event) => hover(false)}
        ></mesh>
      </Hover>
    </ProjectOffsetWrapper>
  )
}

useGLTF.preload("/livebarrie-transformed.glb")
