import Image from "next/image"

import World from "./3d/World"
import Navbar from "./components/Navbar"
import WorldOverlay from "./components/WorldOverlay"
import config from "./config"
import styles from "./page.module.css"

export default function Home() {
  return (
    <div
      style={{
        height: `calc(100vh + ${config.totalScrollHeight()}px`,
      }}
    >
      {/* <Navbar /> */}
      <World />

      <WorldOverlay />
    </div>
  )
}
