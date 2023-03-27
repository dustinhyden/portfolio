"use client"
import { Suspense, useRef, useState } from "react"
import Hover from "../Hover"
import data, { ProjectProps } from "@/app/data"
import ProjectOffsetWrapper from "./ProjectOffsetWrapper"
import { useTexture, useVideoTexture } from "@react-three/drei"

// import { }
export default function Project(props: ProjectProps) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)

  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)

  const featuredItems = data.filter((item) => item.featured)
  const project = featuredItems[props.index]

  if (project.featuredVideo == "" || project.featuredVideo == null) {
    return null
  }
  return (
    <ProjectOffsetWrapper {...props}>
      <Hover index={props.index}>
        <group
          onPointerOver={(event) => hover(true)}
          onPointerOut={(event) => hover(false)}
          scale={1.2}
          position={[0, -2, 0]}
        >
          <mesh position={[0, 10, 0]}>
            <boxGeometry args={[0.5, 9, 16]} />
            <meshStandardMaterial color={hovered ? "#ed1f24" : "lightgray"} />
          </mesh>
          <mesh position={[-2, 10, 0]}>
            <boxGeometry args={[0, 9, 16]} />
            <Suspense fallback={<FallbackMaterial url={project.image.src} />}>
              <VideoMaterial url={"" + project.featuredVideo} />
            </Suspense>
          </mesh>
        </group>
      </Hover>
    </ProjectOffsetWrapper>
  )
}
function VideoMaterial({ url, ...props }) {
  let extension = url.substr(url.lastIndexOf(".") + 1)
  if (extension != "mp4") {
    return <FallbackMaterial url={url} />
  } else {
    const texture = useVideoTexture(url, null)
    return <meshBasicMaterial map={texture} toneMapped={false} />
  }
}
function FallbackMaterial({ url }) {
  const texture = useTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}
