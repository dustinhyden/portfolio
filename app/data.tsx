import Example from "./3d/projects/Example"
import HomepageSidebar from "./components/HomepageSidebar"

export type ProjectType = {
  title: string
  description?: string
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
    title: "Your next Front end developer",
    displayFile: () => null,
    subtitle:
      "Specializing in React and NextJS, with extensive experience using WordPress",
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
    description: "Meta description here example.",
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
    description: "Meta description here other.",
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
    description: "Meta description here.",
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
    description: "Meta description here.",
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
    description: "Meta description here.",
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
    description: "Meta description here.",
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
    description: "Meta description here.",
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
    description: "Meta description here.",
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
    description: "Meta description here.",
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
    description: "Meta description here.",
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
