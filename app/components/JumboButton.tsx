import Link from "next/link"
import styles from "./JumboButton.module.css"
export default function JumboButton({
  text,
  href,
}: {
  text: string
  href: string
}) {
  return (
    <Link className={styles.button} href={href}>
      {text}
    </Link>
  )
}
