import Content from "../../components/Content"
import ImageGrid from "../../components/ImageGrid"
import JumboButton from "../../components/JumboButton"
import Orb from "../../components/Orb"
import Space from "../../components/Space"
import AboutWorld from "./World"

import styles from "./page.module.css"

export const metadata = {
  title: "About Dustin Hyden | Front End Engineer & Barrie Web Designer",
  description: "About Dustin Hyden",
}

export default function About() {
  return (
    <div className={styles.wrapper}>
      <AboutWorld />
      <Content alt={true}>
        <h1>Dustin Hyden</h1>
        <Orb />
        <Space />
        <div className="block">
          <h3>
            Hey! I&apos;m Dustin, a front end developer based in Barrie, Ontario
            with 5+ years of experience.
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
            Over the past several year, I&apos;ve had the pleasure of developing
            custom solutions with numerous businesses to improve SEO, site
            performance, and overall UX/UI. Here&apos;s a few clients I&apos;ve
            worked with:
          </p>
          <ImageGrid
            images={[
              { src: "/images/logo-livebarrie@2x.png", alt: "LiveBarrie logo" },
              {
                src: "/images/logo-bee@2x.png",
                alt: "Bee by the sea logo",
              },
              {
                src: "/images/logo-mft@2x.png",
                alt: "Midland Food Tours logo",
              },
              { src: "/images/logo-swirleez@2x.png", alt: "Swirleez logo" },
              { src: "/images/logo-manor12@2x.png", alt: "Manor12 logo" },
            ]}
          />
        </div>
        <div className="block">
          <h3>Contact</h3>
          <p>Let&apos;s talk about how my skill set can work for you.</p>
          <JumboButton text="Get in touch" href="/contact" />
        </div>
      </Content>
    </div>
  )
}
