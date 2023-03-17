import Example from "@/app/3d/projects/Example"
import Video from "@/app/components/Video"
import Image from "next/image"
import Link from "next/link"

import { ProjectType } from ".."

const valisierData: ProjectType = {
  title: "Mr. Valisier",
  featured: false,
  subtitle:
    "Taking a simple Shopify template, supercharging it with custom coded Liquid/Css/JavaScript to create a gorgeous luxury brand reseller ecommerce experience.",
  displayFile: () => null,
  href: "/projects/mr-valisier",
  image: {
    src: "/images/mr-valisier-featured-image.jpg",
    alt: "Two people with their luggage.",
  },
  industry: "Retail",
  toolsUsed: ["Shopify"],
  work: ["Web Design"],
  externalLink: "https://mrvalisier.com/",
  content: () => {
    return (
      <div>
        <h2 className="h1">Let your belongings travel in style 💼</h2>
        <h3>Background</h3>
        <p>
          <a href="https://mrvalisier.com/" target="_blank">
            Mr. Valisier
          </a>{" "}
          is located in Montreal, Canada. They’re known for providing high
          quality suitcases and other luggage accessories. After several years
          with their website they wanted a refresh.
        </p>
        <h3>Project</h3>
        <p>
          Mr. Valisier reached out to us after seeing another project of ours:{" "}
          <Link href="/projects/suniela">Suniela</Link>. They wanted a website
          that had a similar attention to detail, while creating a very
          professional brand in the process. Ecommerce projects are always chalk
          full of features. From the custom vertical picture gallery on the
          product page, to the animated luggage icons on the bottom of the
          homepage. Here’s a few below.
        </p>

        <Video src="/videos/valisier-homepage.mp4" />
        <h3>A unique side tab</h3>
        <p>
          On the left-hand side of the site, we added a button called “new” that
          would allow for users to immediately see what products have recently
          been added to the site. It’s a unique bit of functionality that we
          haven’t seen often but really love the value it brings.
        </p>
        <Video src="/videos/valisier-sidebar.mp4" />
        <h3>Simple, yet elegant collections pages</h3>
        <p>
          Mr. Valisier has a lot of different collections, from backpacks to
          bags, accessories and more. Thus, we needed to make sure that the
          collections page template was visually familiar and easy to navigate.
        </p>
        <Video src="/videos/valisier-collections.mp4" />

        <h2 className="h1">Final comments</h2>
        <h3>Results</h3>
        <p>
          Mr. Valisier was great to work with, and we want to say thank you!
          Especially during the debugging process. The end result paid off
          immensely. Mr. Valisier now has a website that rivals the biggest
          players in the industry. It has a language translator baked in,
          several unique fly out menus, is vibrant and lively, while also
          professional.
        </p>
        <h3>Could you be next?</h3>
        <p>
          Are you a business operating in a small town looking for a world class
          website? Or perhaps you’re located in Montreal just like Mr. Valisier?
          Reach out, and let’s see how I can help you.
        </p>
      </div>
    )
  },
}

export default valisierData
