import Example from "./3d/projects/Example"
import HomepageSidebar from "./components/HomepageSidebar"

export type ProjectType = {
  title: string
  size: number
  displayFile: (offset: number) => React.ReactNode
  hideDetailsOnMobile?: boolean
  sidebarWidget: () => React.ReactNode
}
const projectData: ProjectType[] = [
  {
    title: "Your front end engineer & web designer.",
    size: 10,
    hideDetailsOnMobile: true,
    displayFile: () => null,
    sidebarWidget: () => <HomepageSidebar />,
  },
  {
    title: "Example Project",
    size: 10,
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
    sidebarWidget: () => null,
  },
  {
    title: "Example Project 2",
    size: 10,
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
    sidebarWidget: () => null,
  },
  {
    title: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
    sidebarWidget: () => null,
  },
  {
    title: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
    sidebarWidget: () => null,
  },
  {
    title: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
    sidebarWidget: () => null,
  },
  {
    title: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
    sidebarWidget: () => null,
  },
  {
    title: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
    sidebarWidget: () => null,
  },
  {
    title: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
    sidebarWidget: () => null,
  },
  {
    title: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
    sidebarWidget: () => null,
  },
  {
    title: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
    sidebarWidget: () => null,
  },
]
export default projectData
