"use client"
import { useFrame } from "@react-three/fiber"
import React, { useEffect, useRef, useState } from "react"

import config from "../scrollConfig"
import useScrollPosition from "../hooks/useScrollPosition"
import useWindowDimensions from "../hooks/useWindowDimensions"
import data from "../data"
import Project from "./projects/Project"

export default function ScrollWorld(props: JSX.IntrinsicElements["group"]) {
  const { width } = useWindowDimensions()
  const group = useRef<THREE.Group>(null)
  const scrollPosition = useScrollPosition()

  const featuredItems = data.filter((item) => item.featured)

  useFrame((state, delta) => {
    if (group.current) {
      return group.current.position.set(
        config.offsetFromPlayer + (width >= 768 ? 6 : 0),
        config.floorPos,
        -scrollPosition * config.scrollSpeed
      )
    }
  })

  return (
    <group name="ScrollWorld" ref={group} {...props} dispose={null}>
      {featuredItems.map((project, i) => {
        if (project.featured) {
          return <Project key={i} index={i} />
        }
      })}
    </group>
  )
}
