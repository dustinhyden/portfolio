import Link from "next/link"
import styles from "./JumboButton.module.css"
export default function JumboButton({
  text,
  href,
  margins = true,
}: {
  text: string
  href: string
  margins?: boolean
}) {
  return (
    <Link
      className={`${styles.button} ${margins ? styles.margins : ""}`}
      href={href}
    >
      <div>{text}</div>
    </Link>
  )
}
