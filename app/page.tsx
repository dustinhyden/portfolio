import { Inter } from "next/font/google"
import Image from "next/image"

import World from "./3dEffects/World"
import config from "./config"
import styles from "./page.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main>
      <div
        style={{
          height: `calc(100vh + ${config.totalScrollHeight()}px`,
        }}
      >
        <World></World>
      </div>
    </main>
  )
}
