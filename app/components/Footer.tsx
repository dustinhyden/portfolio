import Link from "next/link"
import styles from "./Footer.module.css"
export default function Footer() {
  const date = new Date()
  return (
    <footer className={styles.footer}>
      <p>© {date.getFullYear()} - Dustin Hyden</p>
      <Link href="/contact">Get in touch 👋</Link>
    </footer>
  )
}
