import { useFrame } from "@react-three/fiber"
import React, { useEffect, useRef, useState } from "react"
import { useScrollDirection } from "react-use-scroll-direction"
import * as THREE from "three"
import useWindowDimensions from "../hooks/useWindowDimensions"

import Example from "./projects/Example"

const config = {
  offsetFromPlayer: 8, // how far off the screen should the projects be from the player track.
  screenOffset: 30, // how far away from the screen should the projects be
  floorPos: -4.5, // how much do we need to adjust the height to shrink the objects
  scrollSpeed: 0.025, // how quickly to scroll the projects
}

export default function Projects(props: JSX.IntrinsicElements["group"]) {
  const { height, width } = useWindowDimensions()
  const group = useRef()
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useFrame((state, delta) =>
    group.current.position.set(
      config.offsetFromPlayer + (width >= 768 ? 6 : 0),
      config.floorPos,
      config.screenOffset - scrollPosition * config.scrollSpeed
    )
  )

  return (
    <group name="Projects" ref={group} {...props} dispose={null}>
      <Example position={[0, 0, 0]} />
      <Example position={[0, 0, 30]} />
      <Example position={[0, 0, 60]} />
    </group>
  )
}
