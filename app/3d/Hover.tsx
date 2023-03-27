"use client"
import { useRouter } from "next/navigation"
import { useRef } from "react"
import { useMouseContext } from "../contexts/MouseContext"
import data from "../data"

export default function Hover({ children, ...props }) {
  const ref = useRef<THREE.Mesh>(null!)
  const { threeMouse, setThreeMouse } = useMouseContext()
  const router = useRouter()

  const handleClick = (e) => {
    if (props.index) {
      const featuredItems = data.filter((item) => item.featured)
      router.push(featuredItems[props.index].href)
    }
    threeMouse != false ? setThreeMouse(false) : null
  }

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerOver={(event) =>
        threeMouse != true ? setThreeMouse(true) : null
      }
      onPointerOut={(event) =>
        threeMouse != false ? setThreeMouse(false) : null
      }
      onClick={handleClick}
    >
      {children}
    </mesh>
  )
}
