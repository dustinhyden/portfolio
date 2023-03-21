"use client"
import { useFrame } from "@react-three/fiber"
import React, { useRef } from "react"
import * as THREE from "three"

export default function Spin({
  children,
  position = [0, 0, 0],
}: {
  children: React.ReactNode
  position: [number, number, number]
}) {
  const ref = useRef<THREE.Group>(null)
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.325
    }
  })
  return (
    <group ref={ref} position={position}>
      {children}
    </group>
  )
}
