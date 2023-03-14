"use client"
import { PerspectiveCamera, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Character from "../../3d/assets/Character"
import Swivel from "../../3d/Swivel"
import styles from "./World.module.css"

export default function AboutWorld() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.fixed}>
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
          <Swivel position={[0, -8.5, 1.5]}>
            <Character dontAnimateOnScroll={true} />
          </Swivel>
          {/* <GizmoHelper
          alignment="bottom-right" // widget alignment within scene
          margin={[80, 80]} // widget margins (X, Y)
        >
          <GizmoViewport
            axisColors={["red", "green", "blue"]}
            labelColor="black"
          />
        </GizmoHelper> */}
        </Canvas>
      </div>
    </div>
  )
}
