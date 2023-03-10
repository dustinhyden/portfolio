"use client"
import { useFrame } from "@react-three/fiber"
import React, { useEffect, useRef, useState } from "react"

import config from "../config"
import useScrollPosition from "../hooks/useScrollPosition"
import useWindowDimensions from "../hooks/useWindowDimensions"
import projectData from "../projectData"

export default function ScrollWorld(props: JSX.IntrinsicElements["group"]) {
  const { width } = useWindowDimensions()
  const group = useRef<THREE.Group>(null)
  const scrollPosition = useScrollPosition()

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
      {projectData.map((project, i) => {
        const offset = i * config.spacing
        return project.displayFile(offset)
      })}
    </group>
  )
}