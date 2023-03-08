export const config = {
  offsetFromPlayer: 8, // how far off the screen should the projects be from the player track.
  screenOffset: 30, // how far away from the screen should the projects be
  floorPos: -4.5, // how much do we need to adjust the height to shrink the objects
  scrollSpeed: 0.025, // how quickly to scroll the projects
  // totalPixelHeight: 8418 , // Update this to match the right length for our project
  totalPixelHeight: (Projects.reduce((acc, curr) => acc + curr.size / 2, 0) + Projects.length * 30) / config.scrollSpeed 
}

export type ProjectType = {
  id: number
  name: string
  size: number
  displayFile: (offset: number) => ReactNode
}
const Projects: ProjectType[] = [
  {
    id: 1,
    name: "Example Project",
    size: 10 / config.scrollSpeed,
    displayFile: (offset) => <Example position={[0, 0, offset]} />
  },
  {
    id: 2,
    name: "Example Project 2",
    size: 10,
  },
  {
    id: 3,
    name: "Example Project 3",
    size: 10,
  },
  {
    id: 4,
    name: "Example Project 3",
    size: 10,
  },
  {
    id: 5,
    name: "Example Project 3",
    size: 10,
  },
  {
    id: 6,
    name: "Example Project 3",
    size: 10,
  },
  {
    id: 7,
    name: "Example Project 3",
    size: 10,
  },
]
export default Projects
