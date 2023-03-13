import AboutWorld from "./World"
import Content from "../../components/Content"
import Orb from "../../components/Orb"
import Space from "../../components/Space"
import ImageGrid from "../../components/ImageGrid"
import JumboButton from "../../components/JumboButton"

export const metadata = {
  title: "About Dustin Hyden | Front End Engineer & Barrie Web Designer",
  description: "About Dustin Hyden",
}

export default function About() {
  return (
    <>
      <AboutWorld />
      <Content alt={true}>
        <h1>Dustin Hyden</h1>
        <Orb />
        <Space />
        <div className="block">
          <h3>
            Hey! I'm Dustin, a front end developer based in Barrie, Ontario with
            5+ years of experience.
          </h3>
          <p>
            With a keen eye for design and details, I am very passionate about
            bringing to life designs and UI. An avid learner, I enjoy learning
            about all things development, and how new technologies can be used
            to improve both the development and user experience.
          </p>
        </div>
        <div className="block">
          <h3>Clients & Projects</h3>
          <p>
            Over the past several year, I've had the pleasure of working with
            many businesses to improve SEO, site performace overall UX/UI.
            Here's a few clients I've worked with:
          </p>
          <ImageGrid
            images={[
              { src: "/hyden-logo.svg", alt: "Logo" },
              { src: "/hyden-logo.svg", alt: "Logo" },
              { src: "/hyden-logo.svg", alt: "Logo" },
              { src: "/hyden-logo.svg", alt: "Logo" },
              { src: "/hyden-logo.svg", alt: "Logo" },
              { src: "/hyden-logo.svg", alt: "Logo" },
              { src: "/hyden-logo.svg", alt: "Logo" },
              { src: "/hyden-logo.svg", alt: "Logo" },
              { src: "/hyden-logo.svg", alt: "Logo" },
              { src: "/hyden-logo.svg", alt: "Logo" },
            ]}
          />
        </div>
        <div className="block">
          <h3>Contact</h3>
          <p>Let's talk about how my skillset can work for you.</p>
          <JumboButton text="Get in touch" href="/contact" />
        </div>
      </Content>
    </>
  )
}
