import Content from "@/app/components/Content"
import ProjectPagination from "@/app/components/ProjectPagination"
import data from "@/app/data"
import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

import styles from "./page.module.css"
import ProjectWorld from "./World"

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
    description: project.subtitle,
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
          {project.displayFile() != null && (
            <ProjectWorld>{project.displayFile()}</ProjectWorld>
          )}
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
            {project.externalLink && (
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
            )}
          </section>
        </aside>
        <section className={styles.content}>
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width="1000"
            height="800"
          />
          {project?.content()}
        </section>
      </div>
      <ProjectPagination currentProject={params.url} />
    </Content>
  )
}
