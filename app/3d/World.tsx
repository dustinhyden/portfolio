"use client"
import { Grid, Stage } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Character from "./assets/Character"
import ScrollWorld from "./ScrollWorld"
import HorizontalCamRig from "./HorizontalCamRig"
import WorldMediaWrapper from "./WorldMediaWrapper"

export default function HomeWorld() {
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
          position: [-17.259, 8.583, 14.382],
          fov: 75,
          far: 100,
        }}
        shadows={true}
      >
        <fog attach="fog" color="white" near={40} far={80} />
        <HorizontalCamRig>
          <hemisphereLight intensity={1} args={["white", 1]} />
          <WorldMediaWrapper>
            <Stage adjustCamera={false} preset="rembrandt" environment="city">
              <Character />
            </Stage>
          </WorldMediaWrapper>
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
            fadeStrength={1}
            fadeDistance={80}
          />
        </HorizontalCamRig>
      </Canvas>
    </div>
  )
}
