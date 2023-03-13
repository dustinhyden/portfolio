import WorldOverlay from "../components/WorldOverlay"
import config from "../scrollConfig"
import HomeWorld from "../World"
import styles from "./page.module.css"
export const metadata = {
  title: "Dustin Hyden | Front End Engineer & Barrie Web Designer | Home",
  description:
    "I'm Dustin Hyden, I make website's and web apps. My specialties are in React/NextJs all the way to WordPress. I've consulted over 100 businesses, developed dozens of websites, and I've been a speaker for Central Ontario's Premiere Business Event Xcelerate Learning Series",
}

export default function Home() {
  return (
    <div
      style={{
        height: `calc(100vh + ${config.totalScrollHeight()}px)`,
      }}
    >
      <HomeWorld />
      <WorldOverlay />
    </div>
  )
}
