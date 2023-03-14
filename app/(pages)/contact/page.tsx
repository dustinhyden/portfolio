import Link from "next/link"

import Content from "../../components/Content"
import Line from "../../components/Line"
import Orb from "../../components/Orb"
import styles from "./page.module.css"

export const metadata = {
  title: "Contact Dustin Hyden | Front End Engineer & Barrie Web Designer",
  description:
    "Looking to get in touch with Dustin? You can email him at dustin@hyden.ca or by phone at 705-500-0140.",
}

export default function Contact() {
  return (
    <Content>
      <div className={styles.centered}>
        <div className={styles.top}>
          <h1>Contact</h1>
          <Orb />
          <p className="center">
            Want to get in touch? There&apos;s two ways to do so. I&apos;m very quick to
            respond to emails so if you&apos;re not email shy, let&apos;s do that method.
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
