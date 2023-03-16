export default function Video({ src }: { src: string }) {
  return <video autoPlay loop muted src={src}></video>
}
