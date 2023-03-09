// A small component that shows my location, phone number, and email button.
// Additionally it shows the ability to scroll
import Image from "next/image"
import styles from "./HomepageSidebar.module.css"
import Orb from "./Orb"
export default function HomepageSidebar() {
  return (
    <aside className={styles.sidebar}>
      <a href="mailto:dustin@hyden.ca">Email</a>
      <a href="tel:7055000140">Call</a>

      <Orb text="Barrie, Ontario" />

      <a href="#" className={`${styles["scroll-btn"]} icon-btn icon--right`}>
        Scroll to explore
        <Image alt="Mouse" src="/mouse.svg" width="20" height="20" />{" "}
      </a>
    </aside>
  )
}
