import contact from "./contact"
import home from "./home"
import altaData from "./projects/alta-lake-electric"
import beeData from "./projects/bee-by-the-sea"
import bohemiaData from "./projects/bohemia"
import dmsData from "./projects/digital-main-street"
import empoweredData from "./projects/empowered"
import manorData from "./projects/manor12"
import valisierData from "./projects/mr-valisier"
import onTheMendData from "./projects/on-the-mend-therapy"
import sunielaData from "./projects/suniela-beach"
import swirleezData from "./projects/swirleez"

export type ProjectType = {
  title: string
  featured: boolean
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
  valisierData,
  beeData,
  altaData,
  onTheMendData,
  sunielaData,
  empoweredData,
  manorData,
  swirleezData,
  bohemiaData,
  dmsData,
  contact,
]
export default data
