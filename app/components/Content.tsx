import { HTMLAttributes } from "react"
import styles from "./Content.module.css"
export default function Content({
  children,
  alt,
}: {
  children: React.ReactNode
  alt?: boolean
}) {
  return (
    <section className={`${styles.content} ${alt ? styles.alternate : ""}`}>
      {children}
    </section>
  )
}
