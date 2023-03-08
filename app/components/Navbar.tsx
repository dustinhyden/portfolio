"use client"
import Link from "next/link"
import styles from "./Navbar.module.css"
import Image from "next/image"
import { useState } from "react"

export default function Navbar() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/about">
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
          expanded ? styles.expanded : ""
        }`}
        onClick={(e) => setExpanded(!expanded)}
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
        <div
          className={styles["menu-icon"]}
          onClick={(e) => setExpanded(!expanded)}
        >
          <div className={`${styles["menu-icon__bar"]} bar--top`}></div>
          <div className={`${styles["menu-icon__bar"]} bar--middle`}></div>
          <div className={`${styles["menu-icon__bar"]} bar--bottom`}></div>
        </div>
      </div>
    </section>
  )
}
