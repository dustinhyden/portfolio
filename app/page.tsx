import World from "./3d/World"
import WorldOverlay from "./components/WorldOverlay"
import config from "./config"

export default function Home() {
  return (
    <div
      style={{
        height: `calc(100vh + ${config.totalScrollHeight()}px`,
      }}
    >
      <World />
      <WorldOverlay />
    </div>
  )
}
