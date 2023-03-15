import home from "./home"
import contact from "./contact"
import exampleProject from "./exampleProject"

export type ProjectType = {
  title: string
  description?: string
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
const data: ProjectType[] = [home, exampleProject, contact]
export default data
