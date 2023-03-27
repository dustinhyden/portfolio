"use client"
import scrollConfig from "@/app/scrollConfig"
import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import Hover from "../Hover"
import { useRouter } from "next/navigation"
import data, { ProjectProps } from "@/app/data"
import ProjectOffsetWrapper from "./ProjectOffsetWrapper"

// import { }
export default function Example(props: ProjectProps) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)

  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)

  return (
    <ProjectOffsetWrapper {...props}>
      <Hover index={props.index}>
        <mesh>
          <boxGeometry args={[10, 1, 10]} />
          <meshStandardMaterial color={hovered ? "#ed1f24" : "lightgray"} />
        </mesh>
      </Hover>
    </ProjectOffsetWrapper>
  )
}
