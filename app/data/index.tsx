import home from "./home"
import contact from "./contact"
import exampleProject from "./exampleProject"
import dmsData from "./projects/dms"

export type ProjectType = {
  title: string
  displayFile: (index?: number) => React.ReactNode
  subtitle: string
  hideSubtitleOnMobile?: boolean
  sidebarWidget?: () => React.ReactNode
  href: string
  image: {
    src: string
    alt: string
  }
  industry?: string
  toolsUsed?: string[]
  work?: string[]
  externalLink?: string
  content: () => React.ReactNode
}
const data: ProjectType[] = [home, exampleProject, dmsData, contact]
export default data
