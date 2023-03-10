import styles from "./Orb.module.css"
export default function Orb({ text = "Barrie, Ontario" }: { text: string }) {
  return (
    <div className={styles.orb}>
      <span className={styles.sphere}></span>
      <span className={styles.text}>{text}</span>
    </div>
  )
}