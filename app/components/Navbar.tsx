"use client"
import Link from "next/link"
import styles from "./Navbar.module.css"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [expanded, setExpanded] = useState(false)

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
      <section className={styles.navbar}>
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
            <Link className={styles["menu-link"]} href="/">
              Home
            </Link>
            <Link className={styles["menu-link"]} href="/about">
              About
            </Link>
            <Link className={styles["menu-link"]} href="/projects">
              Projects
            </Link>
            <Link className={styles["menu-link"]} href="/contact">
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
      <div className={styles.blur}></div>
    </>
  )
}
