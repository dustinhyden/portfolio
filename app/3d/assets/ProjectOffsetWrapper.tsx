"use client"
import scrollConfig from "@/app/scrollConfig"

export default function ProjectOffsetWrapper({ children, ...props }) {
  const offset = props.centered ? 0 : props.index * scrollConfig.spacing
  return (
    <group {...props} position={[0, -0.5, offset]} scale={1} dispose={null}>
      {children}
    </group>
  )
}
