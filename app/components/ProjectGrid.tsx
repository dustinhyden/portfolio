import Image from "next/image"
import Link from "next/link"

import data, { ProjectType } from "../data"
import styles from "./ProjectGrid.module.css"

export type LinkType = {
  href: string
  title: string
  image: {
    alt: string
    src: string
  }
  work: string[]
}

export default function ProjectGrid({
  links,
  thin = false,
}: {
  links: ProjectType[] | LinkType[]
  thin?: boolean
}) {
  const projects = links

  // const projects = data.slice(1, data.length - 1)

  return (
    <section className={`${styles.projects} ${thin ? styles.thin : ""}`}>
      {projects.length > 0 &&
        projects.map((project, i) => (
          <Link
            key={i}
            className={styles["project-container"]}
            href={project.href}
          >
            <Image
              className={styles.image}
              alt={project.image.alt}
              src={`${project.image.src}`}
              width="1000"
              height="600"
            />
            <div className={styles.overlay}>
              <p className={styles["project-title"]}>{project.title}</p>
              {project.work && (
                <p className={styles["project-subtitle"]}>
                  {project.work.join(" • ")}
                </p>
              )}
            </div>
          </Link>
        ))}
    </section>
  )
}
