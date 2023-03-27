"use client"
import { ProjectProps } from "@/app/data"
import scrollConfig from "@/app/scrollConfig"
import { useGLTF } from "@react-three/drei"
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
    Material: THREE.MeshStandardMaterial
  }
}

export function BohemiaBuilding(props: ProjectProps) {
  const { nodes, materials } = useGLTF("/bohemia-transformed.glb") as GLTFResult

  return (
    <ProjectOffsetWrapper {...props}>
      <Hover index={props.index}>
        <mesh
          rotation={[0, -1.56, 0]}
          geometry={nodes.Cube.geometry}
          material={materials.Material}
        />
      </Hover>
    </ProjectOffsetWrapper>
  )
}

useGLTF.preload("/bohemia-transformed.glb")
