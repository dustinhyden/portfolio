import AboutWorld from "./World"
import Content from "../../components/Content"
import Navbar from "../../components/Navbar"
import Orb from "../../components/Orb"
import Space from "../../components/Space"
import ImageGrid from "../../components/ImageGrid"
import JumboButton from "../../components/JumboButton"

export const metadata = {
  title: "About Dustin Hyden | Front End Engineer & Barrie Web Designer",
  description:
    "I'm Dustin Hyden, I make website's and web apps. My specialties are in React/NextJs all the way to WordPress. I've consulted over 100 businesses, developed dozens of websites, and I've been a speaker for Central Ontario's Premiere Business Event Xcelerate Learning Series",
}

export default function About() {
  return (
    <>
      <AboutWorld />
      <Content alt={true}>
        <h1>Dustin Hyden</h1>
        <Orb text="Barrie, Ontario" />
        <Space />
        <div className="block">
          <h3>About</h3>
          <p>
            Hey! I'm Dustin, a web designer and front end engineer based in
            Barrie, Ontario with 5+ years of experience (I've been programming
            for 15, but 5 professionally).
          </p>
          <p>
            I have a keen eye for design and I love coding. I've worked in all
            stages of the development process, from the initial discovery
            sessions all the way to launch. My most recent obsession is NextJs
            13 and all of it's peculiarities.{" "}
          </p>
        </div>
        <div className="block">
          <h3>Clients & Projects</h3>
          <p>
            I've had the pleasure of co-hosting Central Ontario's premiere
            business event Xcelerate Summit's Learning Series, I've consulted
            over 100 local businesses, and I've developed dozens of websites
            (WordPress, Shopify, React/NextJs). Here's a few clients I've worked
            with:
          </p>
          <ImageGrid
            images={[
              { src: "hyden-logo.svg", alt: "Logo" },
              { src: "hyden-logo.svg", alt: "Logo" },
              { src: "hyden-logo.svg", alt: "Logo" },
              { src: "hyden-logo.svg", alt: "Logo" },
              { src: "hyden-logo.svg", alt: "Logo" },
              { src: "hyden-logo.svg", alt: "Logo" },
              { src: "hyden-logo.svg", alt: "Logo" },
              { src: "hyden-logo.svg", alt: "Logo" },
              { src: "hyden-logo.svg", alt: "Logo" },
              { src: "hyden-logo.svg", alt: "Logo" },
            ]}
          />
        </div>
        <div className="block">
          <h3>Contact</h3>
          <p>Got a project you'd like help on?</p>
          <JumboButton text="Get in touch" href="/contact" />
        </div>
      </Content>
    </>
  )
}
