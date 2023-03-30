import Image from "next/image"
import { useEffect, useState } from "react"
import JumboButton from "./JumboButton"
import styles from "./Loader.module.css"
export default function Loader() {
  const [loaded, setLoaded] = useState(false)
  const duration = 3

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("finished")
      setLoaded(true)
    }, duration * 1000)

    return () => clearTimeout(timer)
  }, [])

  return <div>hi</div>
  return (
    <div className={`${styles.loader} ${loaded ? styles.done : ""}`}>
      <div className={styles["container"]}>
        <Image
          src="/loader.png"
          alt="Cartoon head loading image"
          width={150}
          height={150}
        />
        <p className={styles["loading-text"]}>
          {loaded ? "Done!" : "Loading..."}
        </p>
        <section className={styles["loading-container"]}>
          <Image
            className={styles["loading-bar"]}
            src="/loading-bar.svg"
            alt="Retro loading bar"
            width={150}
            height={50}
          />
        </section>
      </div>
    </div>
  )
}
