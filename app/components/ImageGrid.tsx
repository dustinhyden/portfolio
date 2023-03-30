import Image from "next/image"
import styles from "./ImageGrid.module.css"
export default function ImageGrid({
  images,
}: {
  images: { src: string; alt: string }[]
}) {
  return (
    <section className={styles.images}>
      {images.length > 0 &&
        images.map((image, i) => (
          <div key={i} className={styles["image-container"]}>
            <Image alt={image.alt} src={image.src} width="350" height="350" />
          </div>
        ))}
    </section>
  )
}
