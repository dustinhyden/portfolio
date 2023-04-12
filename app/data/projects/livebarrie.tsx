import Video from "@/app/components/Video"
import Image from "next/image"
import Link from "next/link"

import { ProjectType } from ".."

const liveBarrieData: ProjectType = {
  title: "LiveBarrie",
  featured: false,
  featuredVideo: "images/LiveBarrie-logo-black.jpg",
  subtitle:
    "See how I helped a fledgling live entertainment company build their entire brand from strategy to identity and implementation.",
  href: "/projects/livebarrie",
  image: {
    src: "/images/LiveBarrie-logo-black.jpg",
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
          is a new live entertainment company located in Barrie, Ontario. I was
          tasked with helping determine the brand strategy and creating the
          visual identity of the brand.
        </p>
        <h3>Project</h3>
        <p>
          Following my standard process, I started with a discovery session,
          determined their competitors, and found a niche for LiveBarrie to
          focus on: big, bold, and trustworthy.{" "}
          <a href="/docs/LiveBarrie-Brand-Identity.pdf" target="_blank">
            View the full style guide here.
          </a>
        </p>
        <Image
          src="/images/livebarrie-business-cards.jpg"
          width={1000}
          height={800}
          alt="LiveBarrie logo"
        />
        <h3>Logo variations</h3>
        <p>
          I knew right away that LiveBarrie&apos;s logo will need a few
          variations. Many of LiveBarrie&apos;s promotional materials are very
          tall and narrow (such as a poster). Thus, I designed a logo
          specifically for this use case.
        </p>
        <Image
          src="/images/LiveBarrie-logo-variations.jpg"
          width={1000}
          height={800}
          alt="LiveBarrie logo variations"
        />
        <h3>Brand colours</h3>
        <p>
          Since LiveBarrie&apos;s branding will appear alongside various acts, I
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
        <p>Take a look at some of the stationary items below.</p>
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
          LiveBarrie&apos;s look and feel. This reduces reduces the time it
          takes to teach new designers about the brand, resulting in cost
          savings for LiveBarrie, while also developing a visually consistent
          identity.
        </p>
        <h3>The future</h3>
        <p>
          Our relationship with LiveBarrie continues to progress. We have since
          worked together to develop their website and I now design all of their
          posters/promotional material for their events.
        </p>
      </div>
    )
  },
}

export default liveBarrieData
