import { redirect } from "next/navigation"
import Content from "@/app/components/Content"
import data from "@/app/data"
import styles from "./page.module.css"
import AboutWorld from "../../about/World"
import ProjectWorld from "./World"
import Link from "next/link"
import Image from "next/image"

type ProjectParams = {
  params: {
    url: string
  }
}

export async function generateMetadata({ params }: ProjectParams) {
  const project = data.filter((item) => item.href === params.url)[0]
  if (!project) {
    return {
      title: "Project not found",
    }
  }
  return {
    title: project.title + " | Dustin Hyden",
    description: project.description,
  }
}

export default function Project({ params }: ProjectParams) {
  const project = data.filter((item) => item.href === params.url)[0]
  if (!project) {
    redirect("/projects")
  }
  console.log(project)
  return (
    <Content>
      <div className={styles.columns}>
        <aside className={styles["details-container"]}>
          <ProjectWorld>{project.displayFile()}</ProjectWorld>
          <Link className={styles["back-btn"]} href="/projects">
            View all projects
          </Link>
          <h1>{project.title}</h1>
          <section className={styles.details}>
            <h3>Project Details</h3>
            <p>
              <span>Industry:</span> <span>{project.industry}</span>
            </p>
            <p>
              <span>Tools used:</span> <span>{project.toolsUsed}</span>
            </p>
            <p>
              <span>Work:</span> <span>{project.work}</span>
            </p>
            <p>
              <span>
                <Image
                  src="/external-link.svg"
                  alt="External link button"
                  height="25"
                  width="25"
                />
              </span>{" "}
              <span>View Site</span>
            </p>
          </section>
        </aside>
        <section className={styles.content}>
          <h2 className="h1">{project.subtitle}</h2>
          {project?.content()}
        </section>
      </div>
    </Content>
  )
}
