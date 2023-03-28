import Video from "@/app/components/Video"
import Image from "next/image"
import Link from "next/link"

import { ProjectType } from ".."

const sunielaData: ProjectType = {
  title: "Suniela Beach",
  featured: true,
  featuredVideo: "/videos/suniela-homepage.mp4",
  subtitle:
    "Escape to this very unique Shopify store. See how I turned Suniela's website into an experience on it's own.",
  href: "/projects/suniela-beach",
  image: {
    src: "/images/suniela-beach-featured-image.jpg",
    alt: "Photo of a mother and daughter under a Suniela cabana",
  },
  industry: "Beach Equipment",
  toolsUsed: ["Shopify"],
  work: ["Web Design"],
  externalLink: "https://suniela.com/",
  content: () => {
    return (
      <div>
        <h2 className="h1">Portable shade cabanas 🏖</h2>
        <Video src="/videos/suniela-homepage.mp4" />
        <h3>Rounded edges everywhere</h3>
        <p>
          Suniela&apos;s portable cabanas all have one thing in common, they are
          half circles. Their shape is very distinguishable and helps them stand
          out. To create a visual identity that matched this, I made the
          majority of the site incorporate these arches. In fact, all the angles
          used come straight from their logo, this helped to make the site match
          the rest of Suniela&apos;s incredible branding.
        </p>
        <h3>Colour without the palm trees</h3>
        <p>
          Suniela stressed the importance of creating a colorful and vibrant
          website that stayed away from palm tree clip art. Most competitors
          immediately use palm trees as a part of branding, as it&apos;s “easy”
          to do. Instead, I focused on more abstract shapes, that match the arch
          of the product.
        </p>
        <h3>Quick view</h3>
        <p>
          Suniela products come in a wide assortment of colour variations. We
          wanted to illustrate this by allowing the user to hover over the
          different colours before viewing the full product, so that they can
          see ahead of time what colours Suniela has to offer.
        </p>
        <Video src="/videos/suniela-quickview.mp4" />
        <h3>Simple dropdowns.</h3>
        <p>
          Suniela products require a lot of information to explain the benefits
          and differentiating factors. To help make this easier, I implemented a
          very minimal dropdown system to sort the more generic information.
        </p>
        <Video src="/videos/suniela-dropdowns.mp4" />
        <Image
          src="/images/final-suniela.jpg"
          width={1000}
          height={800}
          alt="Picture of a woman and her child on the beach with a Suniela Cabana."
        />
        <h2 className="h1">Final comments</h2>
        <h3>Even more</h3>
        <p>
          Suniela can now customize each product page to be entirely unique,
          with an endless amount of customization options, but that doesn&apos;t
          even begin to cover all the unique features I packed in this project.
          If you like what you see and you want me to help with your next
          website let me know and I can discuss even more of the features I
          built into this project.
        </p>
      </div>
    )
  },
}

export default sunielaData
