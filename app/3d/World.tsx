"use client"
import { Grid, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Model as Character } from "./assets/Character"
import ScrollWorld from "./ScrollWorld"
import HorizontalCamRig from "./HorizontalCamRig"
import OffsetWrapper from "./OffsetWrapper"

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
          far: 90,
        }}
        shadows
      >
        <HorizontalCamRig>
          <ambientLight intensity={0.7} />
          <spotLight
            intensity={0.5}
            angle={0.1}
            penumbra={1}
            position={[1, 10, 10]}
            castShadow
          />

          <OffsetWrapper>
            <Stage adjustCamera={false} preset="rembrandt" environment="city">
              <Character />
            </Stage>
          </OffsetWrapper>
          <ScrollWorld position={[0, -4, 0]} scale={[1, 1, 1]} />
          <Grid
            position={[0, -5, 0]}
            args={[100.5, 100.5]}
            cellSize={0}
            cellColor={"#eaeaea"}
            sectionSize={3}
            sectionThickness={1}
            sectionColor={"#F2F2F2"}
            infiniteGrid={true}
            fadeStrength={2}
            fadeDistance={105}
          />
        </HorizontalCamRig>
      </Canvas>
    </div>
  )
}
