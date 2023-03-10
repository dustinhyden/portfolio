"use client"
import styles from "./WorldOverlay.module.css"
import config from "../config"
import data from "../data"
import { useEffect, useState } from "react"
import useScrollPosition from "../hooks/useScrollPosition"

export default function WorldOverlay() {
  const [currentProject, setCurrentProject] = useState(0)
  const [lastShown, setLastShown] = useState(0)
  const scrollPosition = useScrollPosition()
  const [isHidden, setIsHidden] = useState(true)

  const pixelsPerProject = config.pixelsPerProject()
  const item = data[lastShown]
  const showAt = pixelsPerProject * currentProject + pixelsPerProject * -0.3
  const hideAt = pixelsPerProject * currentProject + pixelsPerProject * 0.3

  useEffect(() => {
    if (scrollPosition >= hideAt) {
      if (!isHidden) setIsHidden(true)
      if (currentProject + 1 < data.length)
        setCurrentProject(currentProject + 1)
    }
    if (scrollPosition >= showAt && scrollPosition < hideAt) {
      setLastShown(currentProject)
      if (isHidden) setIsHidden(false)
    }
    if (scrollPosition < showAt) {
      if (!isHidden) setIsHidden(true)
      if (currentProject - 1 >= 0) setCurrentProject(currentProject - 1)
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
          </div>
        </section>
      </div>
    </section>
  )
}

// get all the projects data
// determine scroll position to decide what project to show
// useeffect to dynamically add or remove a class whenever our project changes
