import Content from "@/app/components/Content"
import data from "@/app/data"
import { redirect } from "next/navigation"

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
      <h1>{project.title}</h1>
    </Content>
  )
}
