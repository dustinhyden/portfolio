import Example from "./3d/projects/Example"
import HomepageSidebar from "./components/HomepageSidebar"

export type ProjectType = {
  title: string
  displayFile: (offset: number) => React.ReactNode
  subtitle: string
  hideSubtitleOnMobile?: boolean
  sidebarWidget?: () => React.ReactNode
}
const projectData: ProjectType[] = [
  {
    title: "Your front end engineer & web designer.",
    displayFile: () => null,
    subtitle:
      "I specialize in all things front-end from WordPress based CMS sites to React/Next headless projects.",
    hideSubtitleOnMobile: true,
    sidebarWidget: () => <HomepageSidebar />,
  },
  {
    title: "Example Project",
    subtitle: "Helping Bee's users navigate hundreds of projects.",
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
  },
  {
    title: "Example Project 2",
    subtitle: "Another example here.",
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
  },
  {
    title: "Example Project 3",
    subtitle: "Another example here.",
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
  },
  {
    title: "Example Project 4",
    subtitle: "Another example here.",
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
  },
  {
    title: "qwedqwed",
    subtitle: "Another example here.",
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
  },
  {
    title: "Effweqf",
    subtitle: "Another example here.",
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
  },
  {
    title: "Example wqef",
    subtitle: "Another example here.",
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
  },
  {
    title: "Examweqfqwef",
    subtitle: "Another example here.",
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
  },
  {
    title: "Hello World",
    subtitle: "Another example here.",
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
  },
  {
    title: "Contact me",
    subtitle: "Another example here.",
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
  },
]
export default projectData
