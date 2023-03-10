import styles from "./page.module.css"
import ErrorWorld from "./World"
import Link from "next/link"
import Content from "@/app/components/Content"
import Line from "@/app/components/Line"

export default function NotFound() {
  return (
    <>
      <ErrorWorld />
      <Content>
        <div className={styles.centered}>
          <Line />
          <h1>404</h1>
          <p className="center">
            The page you're looking for has been moved or doesn't exist.
          </p>
          <Link href="/" className="mega-link">
            Go Home
          </Link>
        </div>
      </Content>
    </>
  )
}
