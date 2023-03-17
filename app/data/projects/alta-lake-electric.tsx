import Video from "@/app/components/Video"
import Image from "next/image"

import { ProjectType } from ".."

const altaData: ProjectType = {
  title: "Alta Lake Electric",
  featured: false,
  subtitle:
    "Leading electrical ⚡ service provider in the Sea to Sky Corridor.",
  displayFile: () => null,
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
          searches. Therefore, we knew in order to help with SEO that we should
          break each service into its own dedicated page. That way, each page
          has a higher chance of ranking for its specific keywords.
        </p>
        <Image
          src="/images/alta-services.jpg"
          width={1000}
          height={800}
          alt="Showcasing the three primary services of alta lake."
        />
        <p>
          On every page, we wanted to draw attention to the different industries
          that Alta services. Therefore, we created a repeating design element
          to tie the pages together.
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
          We laid out the design to appear as if it’s a resource, or a wiki
          article. This helps connect the legitimacy of Alta’s work with the
          quality they provide.
        </p>
        <Video src="/videos/alta-service.mp4" />
        <h2 className="h1">Final comments</h2>
        <h3>Positioning</h3>
        <p>
          We take the time to learn your company’s unique position within the
          market and create designs that reflect it. We would have not done Alta
          justice if we designed their website in any other manner.
        </p>
        <h3>Industries</h3>
        <p>
          You might have noticed our site showcases a whole variety of websites,
          across a very wide spectrum of industries. This is because we’re
          designers. We love what we do, and we can design for anything. We
          enjoy having to use our brains to figure out unique ways to present
          information. If you want an out of the box approach to your website,
          let us know.
        </p>
      </div>
    )
  },
}

export default altaData