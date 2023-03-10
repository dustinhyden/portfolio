import Link from "next/link"
import Content from "../../components/Content"
import styles from "./page.module.css"
import Line from "../../components/Line"
import Orb from "../../components/Orb"

export const metadata = {
  title: "Contact Dustin Hyden | Front End Engineer & Barrie Web Designer",
  description:
    "Looking to get in touch with Dustin? You can email him at dustin@hyden.ca or by phone at 705-500-0140.",
}

export default function About() {
  return (
    <Content>
      <div className={styles.centered}>
        <div className={styles.top}>
          <h1>Contact</h1>
          <Orb />
          <p className="center">
            Want to get in touch? There's two ways to do so. I'm very quick to
            respond to emails so if you're not email shy, let's do that method.
          </p>
          <Link href="mailto:dustin@hyden.ca" className="mega-link">
            dustin@hyden.ca
          </Link>
        </div>
        <Line />
        <p className="center">Alternatively, you can call me here:</p>
        <Link href="tel:7055000140" className="mega-link">
          705-500-0140
        </Link>
      </div>
    </Content>
  )
}
