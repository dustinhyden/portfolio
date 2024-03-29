"use client"
import Link from "next/link"
import styles from "./Navbar.module.css"
import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [expanded, setExpanded] = useState(false)
  const pathname = usePathname()

  const handleClick = () => {
    setExpanded(!expanded)
  }

  useEffect(() => {
    function handleResize() {
      setExpanded(false)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <section
        className={`${styles.navbar} ${pathname === "/" ? styles.home : ""}`}
      >
        <div className={styles.logo}>
          <Link href="/">
            <Image
              alt="Hyden Logo"
              src="/hyden-logo.svg"
              width="86"
              height="30"
            />
          </Link>
        </div>
        <div
          className={`${styles["nav-container"]} ${
            expanded ? styles.expanded : null
          }`}
          onClick={handleClick}
        >
          <nav className={`${styles["menu-items"]}`}>
            <Link
              className={`${styles["menu-link"]} ${
                pathname === "/" ? styles.active : ""
              }`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`${styles["menu-link"]} ${
                pathname === "/about" ? styles.active : ""
              }`}
              href="/about"
            >
              About
            </Link>
            <Link
              className={`${styles["menu-link"]} ${
                pathname === "/projects" ? styles.active : ""
              }`}
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className={`${styles["menu-link"]} ${
                pathname === "/contact" ? styles.active : ""
              }`}
              href="/contact"
            >
              Contact
            </Link>
          </nav>
          <div className={styles["menu-icon"]} onClick={handleClick}>
            <div
              className={`${styles["menu-icon__bar"]} ${styles["bar--top"]}`}
            ></div>
            <div
              className={`${styles["menu-icon__bar"]} ${styles["bar--middle"]}`}
            ></div>
            <div
              className={`${styles["menu-icon__bar"]} ${styles["bar--bottom"]}`}
            ></div>
          </div>
        </div>
      </section>
      {/* <div className={styles.blur}></div> */}
    </>
  )
}
