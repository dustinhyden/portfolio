import Example from "./3d/projects/Example"
import HomepageSidebar from "./components/HomepageSidebar"

export type ProjectType = {
  title: string
  displayFile: (offset: number) => React.ReactNode
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
}
const data: ProjectType[] = [
  {
    title: "Your front end engineer & web designer.",
    displayFile: () => null,
    subtitle:
      "I specialize in all things front-end from WordPress based CMS sites to React/Next headless projects.",
    hideSubtitleOnMobile: true,
    sidebarWidget: () => <HomepageSidebar />,
    href: "/",
    image: {
      src: "/images/bohemia-barrie.jpg",
      alt: "Man making coffee",
    },
  },
  {
    title: "Example Project",
    subtitle: "Helping Bee's users navigate hundreds of projects.",
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
    href: "weqfqwef",
    image: {
      src: "/images/bohemia-barrie.jpg",
      alt: "Man making coffee",
    },
    industry: "Construction",
    toolsUsed: ["WordPress"],
    work: ["Web Design", "Branding"],
    externalLink: "https://www.bohemiabarrie.com/",
  },
  {
    title: "Example Project 2",
    subtitle: "Another example here.",
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
    href: "qwefwqef",
    image: {
      src: "/images/on-the-mend-barrie.jpg",
      alt: "Man making coffee",
    },
    industry: "Construction",
    toolsUsed: ["WordPress"],
    work: ["Web Design"],
    externalLink: "https://www.bohemiabarrie.com/",
  },
  {
    title: "Example Project 3",
    subtitle: "Another example here.",
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
    href: "examwqefwle",
    image: {
      src: "/images/bohemia-barrie.jpg",
      alt: "Man making coffee",
    },
    industry: "Construction",
    toolsUsed: ["WordPress"],
    work: ["Web Design"],
    externalLink: "https://www.bohemiabarrie.com/",
  },
  {
    title: "Example Project 4",
    subtitle: "Another example here.",
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
    href: "wqefwqef",
    image: {
      src: "/images/bohemia-barrie.jpg",
      alt: "Man making coffee",
    },
    industry: "Construction",
    toolsUsed: ["WordPress"],
    work: ["Web Design"],
    externalLink: "https://www.bohemiabarrie.com/",
  },
  {
    title: "qwedqwed",
    subtitle: "Another example here.",
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
    href: "wqefwqef",
    image: {
      src: "/images/bohemia-barrie.jpg",
      alt: "Man making coffee",
    },
    industry: "Construction",
    toolsUsed: ["WordPress"],
    work: ["Web Design"],
    externalLink: "https://www.bohemiabarrie.com/",
  },
  {
    title: "Effweqf",
    subtitle: "Another example here.",
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
    href: "wqefewqf",
    image: {
      src: "/images/bohemia-barrie.jpg",
      alt: "Man making coffee",
    },
    industry: "Construction",
    toolsUsed: ["WordPress"],
    work: ["Web Design"],
    externalLink: "https://www.bohemiabarrie.com/",
  },
  {
    title: "Example wqef",
    subtitle: "Another example here.",
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
    href: "fewqfqwe",
    image: {
      src: "/images/bohemia-barrie.jpg",
      alt: "Man making coffee",
    },
    industry: "Construction",
    toolsUsed: ["WordPress"],
    work: ["Web Design"],
    externalLink: "https://www.bohemiabarrie.com/",
  },
  {
    title: "Examweqfqwef",
    subtitle: "Another example here.",
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
    href: "example1313",
    image: {
      src: "/images/bohemia-barrie.jpg",
      alt: "Man making coffee",
    },
    industry: "Construction",
    toolsUsed: ["WordPress"],
    work: ["Web Design"],
    externalLink: "https://www.bohemiabarrie.com/",
  },
  {
    title: "Hello World",
    subtitle: "Another example here.",
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
    href: "example12",
    image: {
      src: "/images/bohemia-barrie.jpg",
      alt: "Man making coffee",
    },
    industry: "Construction",
    toolsUsed: ["WordPress"],
    work: ["Web Design"],
    externalLink: "https://www.bohemiabarrie.com/",
  },
  {
    title: "Contact me",
    subtitle: "Another example here.",
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
    href: "example1313",
    image: {
      src: "/images/bohemia-barrie.jpg",
      alt: "Man making coffee",
    },
  },
]
export default data
