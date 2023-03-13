import data from "../data"
import ProjectGrid, { LinkType } from "./ProjectGrid"
import styles from "./ProjectPagination.module.css"
export default function ProjectPagination({
  currentProject,
}: {
  currentProject: string
}) {
  const index = data.findIndex(
    (project) => project.href === "/projects/" + currentProject
  )
  if (index < 1) {
    return null
  }

  const projects: LinkType[] = []
  if (index > 1) projects.push(data[index - 1] as LinkType) // attempt to get the previous project
  if (index < data.length - 2) projects.push(data[index + 1] as LinkType) // attempt to get the next project
  projects.push({
    href: "/contact",
    title: "Contact me",
    image: {
      alt: "string",
      src: "/images/contact-me.jpg",
    },
    work: [""],
  })

  return (
    <div className={styles.pagination}>
      <h3 className={styles.header}>Navigate</h3>
      <ProjectGrid links={projects} thin={true} />
    </div>
  )
}
