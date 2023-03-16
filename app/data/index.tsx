import contact from "./contact"
import home from "./home"
import bohemiaData from "./projects/bohemia"
import dmsData from "./projects/dms"
import manorData from "./projects/manor12"
import swirleezData from "./projects/swirleez"

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
const data: ProjectType[] = [
  home,
  manorData,
  swirleezData,
  bohemiaData,
  dmsData,
  contact,
]
export default data
