import { HTMLAttributes } from "react"
import styles from "./Content.module.css"
export default function Content({
  maxWidth = "100%",
  children,
  alt,
}: {
  maxWidth?: string
  children: React.ReactNode
  alt?: boolean
}) {
  return (
    <section
      className={`${styles.content} ${alt ? styles.alternate : ""}`}
      style={{ maxWidth }}
    >
      {children}
    </section>
  )
}
