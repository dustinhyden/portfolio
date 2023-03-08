import { Inter } from "next/font/google"
import Image from "next/image"

import World from "./3dEffects/World"

import styles from "./page.module.css"
import projects, { config } from "./projects"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const totalProjectSize = projects.reduce(
    (total, current) => total + current.size,
    0
  )
  const totalSpaceBetween = projects.length
  const projectSizePixels = totalProjectSize * 133

  console.log(" here", totalProjectSize, totalSpaceBetween)
  return (
    <main>
      <div
        className={styles.content}
        style={{
          height: `calc(100vh + ${config.totalPixelHeight}px`,
        }}
      >
        <World></World>
      </div>
    </main>
  )
}
