"use client"
import { useFrame } from "@react-three/fiber"
import React, { useRef } from "react"
import * as THREE from "three"

export default function HorizontalCamRig({
  children,
}: {
  children: React.ReactNode
}) {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        ((state.mouse.x * Math.PI) / 20) * 1,
        0.05
      )
    }
  })
  return <group ref={ref}>{children}</group>
}
