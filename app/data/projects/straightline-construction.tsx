import Video from "@/app/components/Video"
import Image from "next/image"
import Link from "next/link"

import { ProjectType } from ".."

const straightlineData: ProjectType = {
  title: "Straightline Construction",
  featured: false,
  featuredVideo: "/videos/straightline-homepage.mp4",
  subtitle:
    "Not all websites need to scroll vertically, sometimes it's fun to have the site scroll horizontally.",
  href: "/projects/straightline-construction",
  image: {
    src: "/images/straightline-project-example.jpg",
    alt: "Inside a wooden cabin with gorgeous windows and doors",
  },
  industry: "Construction",
  toolsUsed: ["WordPress"],
  work: ["Web Design"],
  externalLink: "https://straightlineconstruction.ca/",
  content: () => {
    return (
      <div>
        <h2 className="h1">
          The shortest distance between start and finish 👷‍♂️
        </h2>
        <h3>Background</h3>
        <p>
          <a href="https://straightlineconstruction.ca/" target="_blank">
            Straightline Construction
          </a>{" "}
          was founded in 2003, and since then has grown to a crew of nearly a
          dozen talented and skilled tradesmen. After renovating countless
          homes, they realized that their website was in dire need of a refresh.
        </p>
        <h3>Project</h3>
        <p>
          Straightline came to me after having seen my work with{" "}
          <Link href="/projects/manor12">MANOR12</Link> (who could blame them,
          am I right?). They wanted a very simple website to display their work,
          and to clearly illustrate what it is that they do. This is that story.
        </p>
        <Video src="/videos/straightline-homepage.mp4" />
        <h3>Horizontal scrolling</h3>
        <p>
          Most websites scroll vertically, but I wanted to play on their name,
          more specifically the horizontal line in their logo. Thus, I custom
          coded a solution that would allow for the page to scroll horizontally
          instead of vertically.
        </p>
        <h3>Big, bold, and in your face</h3>
        <p>
          Straightline is all about having a very direct and in your face
          attitude. To help portray this I used oversized text, with a lot of
          white space, to really emphasize what it is about Straightline that
          their clients can expect from them.
        </p>
        <Image
          src="/images/straightline-bold-text.jpg"
          width={1000}
          height={800}
          alt="A screenshot of Straightline's homepage"
        />
        <h3>Did someone say a gallery?</h3>
        <p>
          To make Straightline's photography stand out they wanted a clear and
          concise gallery. I took this one step further. I took their photos and
          showed them at very unusual dimensions. By turning their photos into
          drastically horizontal photos, viewer's eyes can't help but start from
          left and scan to the right, as they scroll, creating a very harmonious
          pairing, and an oddly satisfying experience.
        </p>
        <Video src="/videos/straightline-gallery.mp4" />
      </div>
    )
  },
}

export default straightlineData
