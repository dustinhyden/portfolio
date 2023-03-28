import Video from "@/app/components/Video"
import Image from "next/image"

import { ProjectType } from ".."

const altaData: ProjectType = {
  title: "Alta Lake Electric",
  featured: false,
  featuredVideo: "/videos/alta-homepage.mp4",
  subtitle:
    "Leading electrical ⚡ service provider in the Sea to Sky Corridor.",
  href: "/projects/alta-lake-electric",
  image: {
    src: "/images/alta-lake-cover.jpg",
    alt: "Beautiful kitchen with hanging lights.",
  },
  industry: "Electrical",
  toolsUsed: ["WordPress"],
  work: ["Web Design"],
  externalLink: "https://www.altalakeelectric.com/",
  content: () => {
    return (
      <div>
        <h2 className="h1">
          Leading electrical ⚡ service provider in the Sea to Sky Corridor
        </h2>
        <Video src="/videos/alta-homepage.mp4" />
        <h3>Distinct services</h3>
        <p>
          Alta provides services for the residential, commercial, and industrial
          industries. All three industries result in vastly different Google
          searches. Therefore, in order to help with Alta&apos;s SEO I create a
          separate page for each service. This allows Google to find their
          specific content easier, and allows our pages to be more specific in
          which keywords to focus on. Ultimately allowing each page to have a
          higher probability of ranking for its specific keywords.
        </p>
        <Image
          src="/images/alta-services.jpg"
          width={1000}
          height={800}
          alt="Showcasing the three primary services of alta lake."
        />
        <p>
          On every page, I wanted to draw attention to the different industries
          that Alta services. Therefore, I created a repeating design element to
          tie the pages together.
        </p>
        <Image
          src="/images/alta-outside.jpg"
          width={1000}
          height={800}
          alt="On a patio with a mountain in the background."
        />
        <h3>Make it like a textbook</h3>
        <p>
          Alta has a leadership role within their community. Thus, the website
          needed to be presented in a more educational manner to reflect this
          leadership role. The various service pages are great examples of this.
          I laid out the design to appear as if it&apos;s a resource, or a wiki
          article. This helps connect the legitimacy of Alta&apos;s work with
          the quality they provide.
        </p>
        <Video src="/videos/alta-service.mp4" />
        <h2 className="h1">Final comments</h2>
        <h3>Positioning</h3>
        <p>
          As part of my design process, I take the time to learn about each
          client&apos;s unique position within the market and create designs
          that reflect it.
        </p>
      </div>
    )
  },
}

export default altaData
