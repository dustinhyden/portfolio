"use client"
import { PerspectiveCamera, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Model as Character } from "../../../3d/assets/Character"
import Swivel from "../../../3d/Swivel"
import styles from "./World.module.css"

export default function ProjectWorld({ children }) {
  return (
    <div className={styles.wrapper}>
      <Canvas>
        <PerspectiveCamera position={[0, 0, 0]} far={50} fov={75} />
        <ambientLight intensity={0.7} />
        <spotLight
          intensity={0.5}
          angle={0.1}
          penumbra={1}
          position={[1, 10, 10]}
          castShadow
        />

        <Stage
          adjustCamera={false}
          preset="rembrandt"
          environment="city"
        ></Stage>
        <Swivel position={[0, -3.5, 1.5]}>{children}</Swivel>
      </Canvas>
    </div>
  )
}
