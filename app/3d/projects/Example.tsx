"use client"
import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

export default function Example(props: any) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[10, 1, 10]} />
      <meshStandardMaterial color={hovered ? "#ed1f24" : "lightgray"} />
    </mesh>
  )
}
