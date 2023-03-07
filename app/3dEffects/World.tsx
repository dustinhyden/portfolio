"use client"
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Box from "./Box"
import { Model as Character } from "./assets/Character"

export default function World() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ambientLight />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[10, 15, 10]}
          castShadow
        />
        {/* <pointLight position={[10, 10, 10]} /> */}
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <Character />
        <Environment preset="city" />
        <ContactShadows
          position={[0, -0.8, 0]}
          opacity={0.25}
          scale={10}
          blur={1.5}
          far={0.8}
        />
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          // enableZoom={true}
          enablePan={true}
          // autoRotate={true}
        />
      </Canvas>
    </div>
  )
}
