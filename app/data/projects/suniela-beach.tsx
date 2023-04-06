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
        <h3>Rounded Edges Everywhere</h3>
        <p>
          Suniela&apos;s portable cabanas all have one thing in common: they are
          half circles. Their shape is very distinguishable and helps them stand
          out. To create a visual identity that matched this, the
          majority of the site incorporates these arches. In fact, all the angles
          used come straight from their logo, helping to make the site match
          the rest of Suniela&apos;s incredible branding.
        </p>
        <h3>Tropical, Without the Palm Trees</h3>
        <p>
          Suniela stressed the importance of creating a colourful and vibrant
          website that stayed away from palm tree clip art. Most competitors
          immediately use palm trees as a part of branding, as it&apos;s “easy”
          way to give those vacation vibes. Instead, I focused on more abstract shapes and vibrant colours, 
          that match the shape of the product.
        </p>
        <h3>User Experience</h3>
        <p>
          Suniela products come in a wide assortment of colour variations. We
          wanted to illustrate this by allowing the user to hover over the
          different colours before viewing the full product, to
          see ahead of time what colours Suniela has to offer. This creates a smoother user interface,
          and a better shopping experience
        </p>
        <Video src="/videos/suniela-quickview.mp4" />
        <h3>Simple Dropdowns</h3>
        <p>
          Suniela products require a lot of information to explain the benefits
          and differentiating factors. To help make this information easier to access and digets, I implemented a
          simple accordion system to categorize information, and limit what the amount of information the user is inundated with.
        </p>
        <Video src="/videos/suniela-dropdowns.mp4" />
        <Image
          src="/images/final-suniela.jpg"
          width={1000}
          height={800}
          alt="Picture of a woman and her child on the beach with a Suniela Cabana."
        />
        <h2 className="h1">Final comments</h2>
        <h3>Even More</h3>
        <p>
          Suniela can now customize each product page to be entirely unique,
          this endless amount of customization options, and smotth user experience, is just the tip of 
          the functionality packed into the Suniela site.
        </p>
      </div>
    )
  },
}

export default sunielaData
