"use client"
import styles from "./WorldOverlay.module.css"
import config from "../config"
import projectData from "../projectData"
import { useEffect, useState } from "react"
import useScrollPosition from "../hooks/useScrollPosition"

export default function WorldOverlay() {
  const [currentProject, setCurrentProject] = useState(0)
  const [lastShown, setLastShown] = useState(0)
  const scrollPosition = useScrollPosition()
  const [isHidden, setIsHidden] = useState(true)

  const pixelsPerProject = config.pixelsPerProject()
  const data = projectData[lastShown]
  const showAt = pixelsPerProject * currentProject + pixelsPerProject * -0.3
  const hideAt = pixelsPerProject * currentProject + pixelsPerProject * 0.3

  useEffect(() => {
    // attempt to hide
    if (scrollPosition >= hideAt) {
      console.log("HIDE")
      if (!isHidden) setIsHidden(true)
      if (currentProject + 1 < projectData.length)
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
    return () => {
      // something else
    }
    // check the current bounds
  }, [scrollPosition])

  return (
    <section className={styles.overlay}>
      <div
        className={`${styles["overlay-container"]} ${
          isHidden ? styles["hidden"] : ""
        }`}
      >
        {currentProject === 0 ? (
          <h1>{data.title}</h1>
        ) : (
          <h2 className="h1">{data.title}</h2>
        )}
        <section className={styles["lower-panels"]}>
          <div
            className={`${styles.topics} ${
              data.hideSubtitleOnMobile ? styles["hide-on-mobile"] : ""
            } `}
          >
            <p>{data.subtitle}</p>
          </div>

          <div className={styles["sidebar-container"]}>
            {data.sidebarWidget && data.sidebarWidget()}
          </div>
        </section>
      </div>
    </section>
  )
}

// get all the projects data
// determine scroll position to decide what project to show
// useeffect to dynamically add or remove a class whenever our project changes
