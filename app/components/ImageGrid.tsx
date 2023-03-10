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
          <div className={styles["image-container"]}>
            <Image
              key={i}
              alt={image.alt}
              src={image.src}
              width="64"
              height="64"
            />
          </div>
        ))}
    </section>
  )
}
