import Image from "next/image"

import World from "./3d/World"
import WorldOverlay from "./components/WorldOverlay"
import config from "./config"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main>
      <div
        style={{
          height: `calc(100vh + ${config.totalScrollHeight()}px`,
        }}
      >
        <World></World>
        <WorldOverlay />
      </div>
    </main>
  )
}
