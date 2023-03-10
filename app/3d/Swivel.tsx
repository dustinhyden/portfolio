"use client"
import { useFrame } from "@react-three/fiber"
import React, { useRef, useState } from "react"
import * as THREE from "three"

export default function Swivel({
  children,
  position = [0, 0, 0],
}: {
  children: React.ReactNode
  position: [number, number, number]
}) {
  const [direction, setDirection] = useState("right")
  const ref = useRef<THREE.Group>(null)
  useFrame((state, delta) => {
    if (ref.current) {
      if (ref.current.rotation.y > 0.7 && direction !== "left") {
        setDirection("left")
      }
      if (ref.current.rotation.y < -0.7 && direction !== "right") {
        setDirection("right")
      }
      if (direction === "right") {
        ref.current.rotation.y += delta * 0.325
      } else {
        ref.current.rotation.y -= delta * 0.325
      }
    }
  })
  return (
    <group ref={ref} position={position}>
      {children}
    </group>
  )
}
