import Link from "next/link"

import styles from "./Orb.module.css"

export default function Orb({ link }: { link?: string }) {
  return (
    <div className={styles.orb}>
      {link != null ? (
        <Link href={link}>
          <span className={styles.sphere} />
          <span className={styles.text}>Barrie, Ontario</span>
        </Link>
      ) : (
        <p>
          <span className={styles.sphere} />
          <span className={styles.text}>Barrie, Ontario</span>
        </p>
      )}
    </div>
  )
}

