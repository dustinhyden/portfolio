import Example from "./3dEffects/projects/Example"

export type ProjectType = {
  id: number
  name: string
  size: number
  displayFile: (offset: number) => React.ReactNode
}
const projectData: ProjectType[] = [
  {
    id: 1,
    name: "Example Project",
    size: 10,
    displayFile: (offset) => {
      return <Example position={[0, 0, offset]} />
    },
  },
  {
    id: 2,
    name: "Example Project 2",
    size: 10,
    displayFile: (offset) => {
      return <Example position={[0, 0, offset]} />
    },
  },
  {
    id: 3,
    name: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example position={[0, 0, offset]} />
    },
  },
  {
    id: 4,
    name: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example position={[0, 0, offset]} />
    },
  },
  {
    id: 5,
    name: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example position={[0, 0, offset]} />
    },
  },
  {
    id: 6,
    name: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example position={[0, 0, offset]} />
    },
  },
  {
    id: 7,
    name: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example position={[0, 0, offset]} />
    },
  },
  {
    id: 8,
    name: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example position={[0, 0, offset]} />
    },
  },
  {
    id: 9,
    name: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example position={[0, 0, offset]} />
    },
  },
  {
    id: 10,
    name: "Example Project 3",
    size: 10,
    displayFile: (offset) => {
      return <Example position={[0, 0, offset]} />
    },
  },
]
export default projectData
