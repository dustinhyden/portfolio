import { useFrame } from "@react-three/fiber"
import React, { useEffect, useRef, useState } from "react"
import useWindowDimensions from "../hooks/useWindowDimensions"

import Example from "./projects/Example"

import { config } from "../projects"

export default function Projects(props: JSX.IntrinsicElements["group"]) {
  const { width } = useWindowDimensions()
  const group = useRef()
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    console.log(position)
    setScrollPosition(position)
  }

  // set the initial scroll position of the projects + watch for scroll
  useEffect(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useFrame((state, delta) =>
    group.current.position.set(
      config.offsetFromPlayer + (width >= 768 ? 6 : 0),
      config.floorPos,
      scrollPosition * config.scrollSpeed
    )
  )

  return (
    <group name="Projects" ref={group} {...props} dispose={null}>
      {
        projects.map((project, i) => {
          const offset = (i + 1) * 30
          return project.displayFile(offset)
        })
      }
      <Example position={[0, 0, offset]} />
      <Example position={[0, 0, 30]} />
      <Example position={[0, 0, 60]} />
      <Example position={[0, 0, 90]} />
      <Example position={[0, 0, 120]} />
      <Example position={[0, 0, 150]} />
      <Example position={[0, 0, 180]} />
    </group>
  )
}
