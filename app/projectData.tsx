import Example from "./3d/projects/Example"

export type ProjectType = {
  name: string
  size: number
  displayFile: (offset: number) => React.ReactNode
}
const projectData: ProjectType[] = [
  {
    name: "Example Project",
    size: 10,
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
  },
  {
    name: "Example Project 2",
    size: 10,
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
  },
  {
    name: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
  },
  {
    name: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
  },
  {
    name: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
  },
  {
    name: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
  },
  {
    name: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
  },
  {
    name: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
  },
  {
    name: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
  },
  {
    name: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example key={offset} position={[0, 0, offset]} />
    },
  },
]
export default projectData
