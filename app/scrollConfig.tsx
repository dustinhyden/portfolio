import data from "./data"

export const scrollConfig = {
  offsetFromPlayer: 8, // how far off the screen should the projects be from the player track.
  spacing: 40, // distance between objects
  floorPos: -4.5, // how much do we need to adjust the height to shrink the objects
  scrollSpeed: 0.025, // how quickly to scroll the projects
  showHideDepth: 0.35,
  totalScrollHeight: () =>
    (scrollConfig.spacing * (data.length - 1)) / scrollConfig.scrollSpeed,
  pixelsPerProject: () => scrollConfig.spacing / scrollConfig.scrollSpeed,
}

export default scrollConfig
