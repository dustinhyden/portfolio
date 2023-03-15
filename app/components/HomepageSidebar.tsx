// A small component that shows my location, phone number, and email button.
// Additionally it shows the ability to scroll
import Image from "next/image"
import styles from "./HomepageSidebar.module.css"
import Orb from "./Orb"
export default function HomepageSidebar() {
  const handleClick = (e) => {
    e.preventDefault()
    console.log("scroll please")
    // window.scrollBy(0, 100)
  }

  return (
    <aside className={styles.sidebar}>
      <a href="mailto:dustin@hyden.ca">Email</a>
      <a href="tel:7055000140">Call</a>

      <Orb link="/contact" />

      <a
        href="#scroll"
        className={`${styles["scroll-btn"]} icon-btn icon--right`}
        // onClick={handleClick}
      >
        Scroll to explore
        <Image alt="Mouse" src="/mouse.svg" width="20" height="20" />
      </a>
    </aside>
  )
}
