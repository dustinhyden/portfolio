import data from "@/app/data"
import Content from "../../components/Content"
import JumboButton from "../../components/JumboButton"
import ProjectGrid from "../../components/ProjectGrid"

export const metadata = {
  title: "Projects | Dustin Hyden | Front End Developer",
  description:
    "View all of Dustin's posted projects online here. From React based webapps, to fully custom coded WordPress websites and more.",
}

export default function Projects() {
  return (
    <Content>
      <h1>Projects</h1>
      <p>Browse through past web and e-commerce development projects.</p>
      <ProjectGrid links={data.slice(1, data.length - 1)} />
      <div className="center">
        <p>
          Interested in more? Reach out to talk further about how my skillset
          can work for you.
        </p>
        <JumboButton text="Let's chat" href="/contact" />
      </div>
    </Content>
  )
}
