import styles from "./Orb.module.css"
export default function Orb() {
  return (
    <div className={styles.orb}>
      <p>
        <span className={styles.sphere} />
        <span className={styles.text}>Barrie, Ontario</span>
      </p>
    </div>
  )
}
