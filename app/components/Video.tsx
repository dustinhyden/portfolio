export default function Video({ src }: { src: string }) {
  return (
    <video
      src={src}
      autoPlay={true}
      loop={true}
      muted={true}
      playsInline={true}
    />
  )
}
