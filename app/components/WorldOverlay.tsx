"use client"
import styles from "./WorldOverlay.module.css"
import config from "../scrollConfig"
import data from "../data"
import { useEffect, useState } from "react"
import useScrollPosition from "../hooks/useScrollPosition"
import Link from "next/link"
import JumboButton from "./JumboButton"

export default function WorldOverlay() {
  const [currentProject, setCurrentProject] = useState(0)
  const [lastShown, setLastShown] = useState(0)
  const scrollPosition = useScrollPosition()
  const [isHidden, setIsHidden] = useState(true)

  const item = data[lastShown]

  useEffect(() => {
    const pixelsPerProject = config.pixelsPerProject()
    const showAt =
      pixelsPerProject * currentProject +
      pixelsPerProject * -config.showHideDepth
    const hideAt =
      pixelsPerProject * currentProject +
      pixelsPerProject * config.showHideDepth

    if (scrollPosition >= hideAt) {
      setIsHidden((current) => (!current ? true : current))
      setCurrentProject((current) =>
        current + 1 < data.length ? current + 1 : current
      )
    }
    if (scrollPosition >= showAt && scrollPosition < hideAt) {
      setLastShown(currentProject)
      setIsHidden((current) => (current ? false : current))
    }
    if (scrollPosition < showAt) {
      setIsHidden((current) => (!current ? true : current))
      setCurrentProject((current) => (current - 1 >= 0 ? current - 1 : current))
    }
  }, [scrollPosition])

  return (
    <section className={styles.overlay}>
      <div
        className={`${styles["overlay-container"]} ${
          isHidden ? styles["hidden"] : ""
        }`}
      >
        {currentProject === 0 ? (
          <h1>{item.title}</h1>
        ) : (
          <h2 className="h1">{item.title}</h2>
        )}
        <section className={styles["lower-panels"]}>
          <div
            className={`${styles.topics} ${
              item.hideSubtitleOnMobile ? styles["hide-on-mobile"] : ""
            } `}
          >
            <p>{item.subtitle}</p>
          </div>

          <div className={styles["sidebar-container"]}>
            {item.sidebarWidget && item.sidebarWidget()}
            {item.content && (
              <Link href={item.href} className="mega-link no-padding">
                Explore the project
              </Link>
            )}
            {/* {item.content && (
              <JumboButton
                text="Explore the project"
                href={item.href}
                margins={false}
              />
            )} */}
          </div>
        </section>
      </div>
    </section>
  )
}
