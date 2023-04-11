
import Highlight from "@/app/components/Highlight"
import Video from "@/app/components/Video"
import Image from "next/image"
import Link from "next/link"

import { ProjectType } from ".."

const behindTheScenesData: ProjectType = {
  title: "Behind The Scenes",
  featured: true,
  featuredVideo: "/videos/mind-your-manor-homepage.mp4",
  subtitle: "Curious how this website was made? Take a look behind the scenes, view some code snippets, and enjoy.",
  href: "/projects/behind-the-scenes",
  image: {
    src: "/images/manor12-homepage.jpg",
    alt: "Photo of a kids room",
  },
  industry: "Web Development",
  toolsUsed: ["NextJS", "React", "Vercel"],
  work: ["Web Development"],
  content: () => {
    return (
      <div>
        <h2 className="h1">Hello</h2>
        <Highlight content={
`function hello(){
  return 3;
}`} />
      </div>
    )
  },
}


export default behindTheScenesData
