import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import styles from "./page.module.css"

import Content from "@/app/components/Content"
import data from "@/app/data"
import ProjectWorld from "./World"
import ProjectPagination from "@/app/components/ProjectPagination"

type ProjectParams = {
  params: {
    url: string
  }
}

export async function generateMetadata({ params }: ProjectParams) {
  const project = data.filter(
    (item) => item.href === "/projects/" + params.url
  )[0]
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
  const project = data.filter(
    (item) => item.href === "/projects/" + params.url
  )[0]
  if (!project) {
    redirect("/projects")
  }

  return (
    <Content>
      <div className={styles.columns}>
        <aside className={styles["details-container"]}>
          <Link className={`${styles["back-btn"]} icon-btn`} href="/projects">
            <Image
              src="/back-icon.svg"
              alt="Go back button"
              height="24"
              width="24"
            />
            View all projects
          </Link>

          <Link className={`${styles["back-btn"]} icon-btn secondary`} href="/">
            <Image
              src="/back-icon.svg"
              alt="Go home button"
              height="24"
              width="24"
            />
            Or Go home
          </Link>
          <ProjectWorld>{project.displayFile()}</ProjectWorld>
          <h1>{project.title}</h1>
          <section className={styles.details}>
            <h3>Project Details</h3>
            <p>
              <span>Industry:</span> <span>{project.industry}</span>
            </p>
            <p>
              <span>Tools used:</span>{" "}
              <span>{project.toolsUsed.join(" • ")}</span>
            </p>
            <p>
              <span>Work:</span> <span>{project.work.join(" • ")}</span>
            </p>
            <Link
              className="icon-btn"
              href={project.externalLink}
              target="_blank"
            >
              <Image
                src="/external-link.svg"
                alt="External link button"
                height="16"
                width="16"
              />
              View Site
            </Link>
          </section>
        </aside>
        <section className={styles.content}>
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width="300"
            height="300"
          />
          <h2 className="h1">{project.subtitle}</h2>
          {project?.content()}
        </section>
      </div>
      <ProjectPagination currentProject={params.url} />
    </Content>
  )
}
