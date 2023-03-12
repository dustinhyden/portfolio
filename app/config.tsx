import data from "./data"

export const config = {
  offsetFromPlayer: 8, // how far off the screen should the projects be from the player track.
  spacing: 40, // distance between objects
  floorPos: -4.5, // how much do we need to adjust the height to shrink the objects
  scrollSpeed: 0.025, // how quickly to scroll the projects
  showHideDepth: 0.35,
  totalScrollHeight: () =>
    (config.spacing * (data.length - 1)) / config.scrollSpeed,
  pixelsPerProject: () => config.spacing / config.scrollSpeed,
}

export default config
