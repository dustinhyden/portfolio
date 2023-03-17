import Example from "@/app/3d/projects/Example"
import Video from "@/app/components/Video"
import Image from "next/image"
import Link from "next/link"

import { ProjectType } from ".."

const liveBarrieData: ProjectType = {
  title: "LiveBarrie",
  featured: true,
  subtitle:
    "See how I helped a fledgling live entertainment company build their entire brand from strategy to identity and implementation.",
  displayFile: (index = 0) => {
    return <Example index={index} key={index} />
  },
  href: "/projects/livebarrie",
  image: {
    src: "/images/livebarrie-business-cards.jpg",
    alt: "LiveBarrie business cards",
  },
  industry: "Live Entertainment",
  toolsUsed: ["Adobe XD", "WordPress"],
  work: ["Brand Strategy", "Brand Identity", "Graphic Design"],
  externalLink: "https://www.livebarrie.co/",
  content: () => {
    return (
      <div>
        <h2 className="h1">
          Pairing local talent with outside talent to create truly unique events
          🎷
        </h2>
        <h3>Background</h3>
        <p>
          <a href="https://www.jeriroberts.com/" target="_blank">
            LiveBarrie
          </a>{" "}
          is a new live entertainment company located in Barrie, Ontario. We
          were tasked with helping determine the brand strategy and creating the
          visual identity of the brand.
        </p>
        <h3>Project</h3>
        <p>
          Following our process, we started with a discovery session, determined
          their competitors, and found a niche for LiveBarrie to focus on: big,
          bold, and trustworthy.{" "}
          <a href="/docs/LiveBarrie-Brand-Identity.pdf" target="_blank">
            View the full style guide here
          </a>{" "}
          .
        </p>
        <Image
          src="/images/LiveBarrie-logo-black.jpg"
          width={1000}
          height={800}
          alt="LiveBarrie logo"
        />

        <h3>Logo variations</h3>
        <p>
          We knew right away that LiveBarrie’s logo will need a few variations.
          Many of LiveBarrie’s promotional materials are very tall and narrow
          (such as a poster). Thus we designed a logo specifically for this use
          case.
        </p>
        <Image
          src="/images/LiveBarrie-logo-variations.jpg"
          width={1000}
          height={800}
          alt="LiveBarrie logo variations"
        />
        <h3>Brand colours</h3>
        <p>
          Since LiveBarrie’s branding will appear alongside various acts, we
          needed to choose colours that can can compliment a wide variety of
          colour palettes.
        </p>
        <Image
          src="/images/LiveBarrie-brand-colours.jpg"
          width={1000}
          height={800}
          alt="LiveBarrie brand colours"
        />
        <h2 className="h1">Stationary</h2>
        <Image
          src="/images/LiveBarrie-business-card.jpg"
          width={1000}
          height={800}
          alt="LiveBarrie brand business cards"
        />
        <Image
          src="/images/LiveBarrie-document.jpg"
          width={1000}
          height={800}
          alt="LiveBarrie brand documents"
        />
        <Image
          src="/images/LiveBarrie-envelope.jpg"
          width={1000}
          height={800}
          alt="LiveBarrie envelope example"
        />
        <Image
          src="/images/LiveBarrie-stationary.jpg"
          width={1000}
          height={800}
          alt="LiveBarrie stationary"
        />
        <h2 className="h1">Final comments</h2>
        <h3>A guide created</h3>
        <p>
          Now that LiveBarrie has a complete brand kit, any designer will be
          able to look at this kit and design promotional materials that match
          LiveBarrie’s look and feel. This reduces reduces the time it takes to
          teach new designers about the brand, resulting in cost savings for
          LiveBarrie, while also developing a visually consistent identity.
        </p>
        <h3>The future</h3>
        <p>
          Our relationship with LiveBarrie continues to progress. Our next
          project is working on a website that allows them to showcase their
          upcoming events.
        </p>
      </div>
    )
  },
}

export default liveBarrieData
