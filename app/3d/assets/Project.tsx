"use client"
import { Suspense, useRef, useState } from "react"
import Hover from "../Hover"
import data, { ProjectProps } from "@/app/data"
import ProjectOffsetWrapper from "./ProjectOffsetWrapper"
import { useTexture, useVideoTexture } from "@react-three/drei"

// import { }
export default function Project(props: ProjectProps) {
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)

  // const featuredItems = data.filter((item) => item.featured)
  const project = props.featuredOnly
    ? data.filter((item) => item.featured)[props.index]
    : data[props.index]

  if (project?.featuredVideo == "" || project?.featuredVideo == null) {
    return null
  }
  return (
    <ProjectOffsetWrapper {...props}>
      <Hover index={props.centered ? 0 : props.index}>
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
              <VideoMaterial url={project.featuredVideo} />
            </Suspense>
          </mesh>
        </group>
      </Hover>
    </ProjectOffsetWrapper>
  )
}
function VideoMaterial({ url, ...props }) {
  let extension = url.substr(url.lastIndexOf(".") + 1)
  const texture = useVideoTexture(url, null)
  if (extension != "mp4") {
    return <FallbackMaterial url={url} />
  } else {
    return <meshBasicMaterial map={texture} toneMapped={false} />
  }
}
function FallbackMaterial({ url }) {
  const texture = useTexture(url) as THREE.Texture
  return <meshBasicMaterial map={texture} toneMapped={false} />
}
