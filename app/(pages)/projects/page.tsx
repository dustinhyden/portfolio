import Content from "../../components/Content"
import JumboButton from "../../components/JumboButton"
import ProjectGrid from "../../components/ProjectGrid"

export const metadata = {
  title: "Project's by Dustin Hyden | Front End Engineer & Barrie Web Designer",
  description:
    "View all of Dustin's posted projects online here. From React based webapps, to fully custom coded WordPress websites and more.",
}

export default function Projects() {
  return (
    <Content>
      <h1>Projects</h1>
      <p>
        Welcome to my longer list of client projects. I'd have recommended
        scrolling through the homepage for the fancy 3d effect, but since you're
        here you get to enjoy a more traditional layout.
      </p>
      <ProjectGrid />
      <div className="center">
        <h3 className="h1">
          🥳
          <br />
          Whoa
        </h3>
        <p>
          I've got more projects, but if you've scrolled this far I think we
          should just have a call and discuss your next project together.
        </p>
        <JumboButton text="Let's chat" href="/contact" />
      </div>
    </Content>
  )
}
