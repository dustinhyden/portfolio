import Image from "next/image"
import Link from "next/link"
import data from "../data"
import styles from "./ProjectGrid.module.css"

export default function ProjectGrid() {
  const projects = data.slice(1, data.length - 1)

  console.log(projects.length)
  return (
    <section className={styles.projects}>
      {projects.length > 0 &&
        projects.map((project, i) => (
          <Link
            className={styles["project-container"]}
            href={`./projects/${project.href}`}
          >
            <Image
              className={styles.image}
              key={i}
              alt={project.image.alt}
              src={`${project.image.src}`}
              width="400"
              height="400"
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
