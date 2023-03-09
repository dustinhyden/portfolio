"use client"
import { Center } from "@react-three/drei"
import useWindowDimensions from "../hooks/useWindowDimensions"

export default function OffsetWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const { width } = useWindowDimensions()
  return <Center position={[width < 768 ? -5 : 0, 0, 0]}>{children}</Center>
}
