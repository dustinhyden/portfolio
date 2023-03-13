"use client"
import { createContext, useContext, useEffect, useState } from "react"

const MouseContext = createContext(null)

export function useMouseContext() {
  return useContext(MouseContext)
}

export function MouseProvider({ children }) {
  const [mouse, setMouse] = useState(null)
  const [threeMouse, setThreeMouse] = useState(null)

  useEffect(() => {
    const updateMouseHovering = (e: MouseEvent) => {
      setMouse(e.target)
    }
    window.addEventListener("mouseover", updateMouseHovering)
    return () => {
      window.removeEventListener("mouseover", updateMouseHovering)
    }
  }, [])

  return (
    <MouseContext.Provider
      value={{ mouse, setMouse, threeMouse, setThreeMouse }}
    >
      {children}
    </MouseContext.Provider>
  )
}
