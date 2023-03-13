"use client"
import useMousePosition from "../hooks/useMousePosition"
import styles from "./Mouse.module.css"
import { useMouseContext } from "../contexts/MouseContext"

export default function Mouse() {
  const { x, y } = useMousePosition()
  const { mouse, threeMouse } = useMouseContext()
  const doEffect = threeMouse || mouse?.nodeName === "A" || mouse?.closest("a")

  return (
    <span
      className={`${styles.mouse} ${doEffect ? styles.hovering : ""}`}
      style={{ transform: `translate(${x}px, ${y}px)` }}
    ></span>
  )
}
