"use client"
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Stage,
} from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Box from "./Box"
import { Model as Character } from "./assets/Character"

export default function World() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
      }}
    >
      <Canvas
        camera={{
          position: [-10.259, 13.583, 19.382],
          fov: 75,
        }}
      >
        <ambientLight intensity={0.7} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        <Stage adjustCamera={false} preset="rembrandt" environment="city">
          <Character position={[0, -1, 0]} scale={[1, 1, 1]} />
          <ContactShadows
            position={[0, -0.8, 0]}
            opacity={0.15}
            scale={10}
            blur={1.5}
            far={0.8}
          />
        </Stage>

        <Environment preset="city" />
      </Canvas>
    </div>
  )
}
