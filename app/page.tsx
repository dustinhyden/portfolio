import { Inter } from "next/font/google"
import Image from "next/image"

import World from "./3dEffects/World"

import styles from "./page.module.css"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main>
      <div className={styles.content}>
        <World></World>
      </div>
    </main>
  )
}
