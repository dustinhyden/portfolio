"use client"

import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import { useMouseContext } from "../contexts/MouseContext"

export default function Hover({ children, ...props }) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)
  // Hold state for hovered and clicked events
  const { threeMouse, setThreeMouse } = useMouseContext()

  return (
    <mesh
      {...props}
      ref={ref}
      // scale={clicked ? 1.5 : 1}
      // onClick={(event) => click(!clicked)}
      onPointerOver={(event) => setThreeMouse(true)}
      onPointerOut={(event) => setThreeMouse(false)}
    >
      {children}
    </mesh>
  )
}
