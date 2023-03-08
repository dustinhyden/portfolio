"use client"
import styles from "./WorldOverlay.module.css"
import config from "../config"
import projectData from "../projectData"
import { useState } from "react"

export default function WorldOverlay() {
  const [currentProject, setCurrentProject] = useState(0)
  const data = projectData[currentProject]

  return (
    <section className={styles.overlay}>
      <div className={styles["overlay-container"]}>
        {currentProject === 0 ? (
          <h1>{data.title}</h1>
        ) : (
          <h2 className="h1">{data.title}</h2>
        )}
        <section className={styles["lower-panels"]}>
          <div
            className={`${styles.topics} ${
              data.hideDetailsOnMobile === true ? styles["hide-on-mobile"] : ""
            }`}
          >
            <span>UI/UX</span>
            <span>React</span>
            <span>NextJs</span>
            <span>TypeScript</span>
          </div>

          <div className={styles["sidebar-container"]}>
            {data.sidebarWidget()}
          </div>
        </section>
      </div>
    </section>
  )
}

// get all the projects data
// determine scroll position to decide what project to show
// useeffect to dynamically add or remove a class whenever our project changes
