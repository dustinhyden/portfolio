"use client"
import scrollConfig from "@/app/scrollConfig"
import { useGLTF } from "@react-three/drei"
import React, { useRef, useState } from "react"

import * as THREE from "three"
import { GLTF } from "three-stdlib"

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
}

export function BohemiaBuilding(props: any) {
  const { nodes, materials } = useGLTF("/bohemia-transformed.glb") as GLTFResult
  const [hovered, hover] = useState(false)
  const offset = props.index * scrollConfig.spacing

  return (
    <group
      {...props}
      position={[0, -0.5, offset]}
      scale={1}
      dispose={null}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <mesh
        rotation={[0, -1.56, 0]}
        geometry={nodes.Cube.geometry}
        material={materials.Material}
      />
    </group>
  )
}

useGLTF.preload("/bohemia-transformed.glb")
