import Video from "@/app/components/Video"
import Image from "next/image"
import Link from "next/link"

import { ProjectType } from ".."

const swirleezData: ProjectType = {
  title: "Swirleez",
  featured: true,
  featuredVideo: "/videos/swirleez-homepage.mp4",
  subtitle:
    "Swirleez was the perfect opportunity to play around with animations and physics engines, to fully embody their fun lively brand.",
  href: "/projects/swirleez",
  image: {
    src: "/images/swirleez-new-portrait.jpg",
    alt: "Interior of Swirleez",
  },
  industry: "Food & Beverage",
  toolsUsed: ["WordPress"],
  work: ["Web Design"],
  externalLink: "https://www.swirleez.com/",
  content: () => {
    return (
      <div>
        <h2 className="h1">A healthy and sweet frozen treat 🍭</h2>
        <h3>Background</h3>
        <p>
          <a href="http://swirleez.com/" target="_blank">
            Swirleez
          </a>{" "}
          is a family owned and operated frozen yogurt shop, located in the
          centre of downtown Barrie, Ontario. They&apos;ve built a strong
          reputation for their vast array of treats, ranging from frozen yogurt,
          to crepes, to their signature S&apos;wafflez, and everything in
          between. Creating unique experiences is at the core of the Swirleez
          brand. Every year they have come out with one stellar new treat after
          another.
        </p>
        <h3>Project</h3>
        <p>
          The chance to work with Swirleez was an opportunity that I could not
          give up. I loved the idea of working with them so much so that I
          actually approached them, with a very simple strategy: create a fully
          custom WordPress website for Swirleez so that they have a website
          unique to them. I wanted the site to be fun and exciting, something
          special and unlike any other site a user has seen before.
        </p>
        <Video src="/videos/swirleez-homepage.mp4" />
        <h3>A Physics Engine</h3>
        <p>
          When a user scrolls through the Swirleez website, they will quickly
          notice that the foam-like circles on the page are interacting with the
          user. Based on the velocity the user scrolls through the page, the
          circles will move accordingly. To take this even further, each circle
          is aware of all the other circles, which allows for tracking of
          collisions collisions. This effect creates a buttery-smooth animation,
          and makes it quite addicting to just scroll up and down and watch the
          circles interact.
        </p>
        <h3>The Products Front and Centre</h3>
        <p>
          Each menu item has a lot of ingredients and price points, but what
          sells a product is how it looks. Customers need to see the food to get
          that itch, that craving, that desire to go and get one. I decided to
          make a separate page for each menu category. Below you can see an
          example of one menu page, where you are greeted with a gorgeous
          oversized photo of the product to really wet your appetite.
        </p>
        <p>
          For a smooth user experience that makes navigating this site a breeze,
          each category provides quick links to the next and previous
          cateogires.
        </p>
        <Image
          src="/images/strawberry-swaffle.jpg"
          width={1000}
          height={800}
          alt="One of Swirleez signature treats, a Swaffle."
        />
        <p>
          All facets of this site were custom built for a smooth user
          experience, and cohesive design. You&apos;ll see below the navigation
          maintains the design language created, and animates open with a
          circle.
        </p>
        <Image
          src="/images/swirleez-menu-animated-small.gif"
          width={1000}
          height={800}
          alt="Animated gif of the Swirleez navigation menu."
        />
        <h2 className="h1">Results</h2>
        <h3>Fun, Visual Experience</h3>
        <p>
          When a user goes to the site, they quickly see the visual effects in
          action, and most importantly with no performance downfalls. All code
          has been optimized for buttery smooth animations, even on mobile
          devices. If you&apos;re curious, I did this by making it so there are
          actually only ever two rows of bubbles, which move throughout the page
          to follow the user. This creates the illusion that there are bubbles
          after every section, when in reality it&apos;s just the two!
        </p>
        <h3>A Modern Website</h3>
        <p>
          Swirleez now has a modern website, on a platform that is scalable.
          They are able to easily add new features, including the ability to
          sell products through Shopify. The website is now fun, inviting and
          perfectly matches their brand colours and fonts.
        </p>
      </div>
    )
  },
}

export default swirleezData
