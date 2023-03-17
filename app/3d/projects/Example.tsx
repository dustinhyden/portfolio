"use client"
import scrollConfig from "@/app/scrollConfig"
import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import Hover from "../Hover"
import { useRouter } from "next/navigation"
import data from "@/app/data"

// import { }
export default function Example(props: any) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)
  const router = useRouter()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  // const [clicked, click] = useState(false)

  const offset = props.index * scrollConfig.spacing

  const handleClick = (e) => {
    const featuredItems = data.filter((item) => item.featured)
    router.push(featuredItems[props.index].href)
  }

  return (
    <Hover>
      <mesh
        position={[0, 0, offset]}
        ref={ref}
        // scale={clicked ? 1.5 : 1}
        onClick={handleClick}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      >
        <boxGeometry args={[10, 1, 10]} />
        <meshStandardMaterial color={hovered ? "#ed1f24" : "lightgray"} />
      </mesh>
    </Hover>
  )
}
