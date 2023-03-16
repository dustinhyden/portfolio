import Video from "@/app/components/Video"
import Image from "next/image"
import Link from "next/link"

import { ProjectType } from ".."
import Example from "../../3d/projects/Example"

const swirleezData: ProjectType = {
  title: "Swirleez",
  subtitle:
    "A fun task for a fun company. Check out how I implemented a physics engine to bring Swirleez website to life.",
  displayFile: (index = 0) => {
    return <Example index={index} key={index} />
  },
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
          centre of downtown Barrie, Ontario. They’ve built a strong reputation
          for their vast array of treats, ranging from frozen yogurt, to crepes,
          to their signature S’wafflez, and everything in between. Creating
          unique experiences is at the core of the Swirleez brand. Every year
          they have come out with one stellar new treat after another.
        </p>
        <h3>Project</h3>
        <p>
          The chance to work with Swirleez was an opportunity that we could not
          give up. We loved the idea of working with them so much so that we
          actually approached them. Our strategy was a simple one. Create a
          fully custom WordPress website for Swirleez so that they have a
          website unique to them. We wanted the site to be fun and exciting,
          something special and unlike any other site we’ve seen. This is that
          process.
        </p>
        <Video src="/videos/swirleez-homepage.mp4" />
        <h3>A physics engine</h3>
        <p>
          When a user scrolls through the Swirleez website, they will quickly
          notice that the foam-like circles on the page are interacting with the
          user. Based on the velocity the user scrolls through the page, the
          circles will move accordingly. To take this even further, we coded the
          circles to be aware of each other! This meant we could track
          collisions. This effect creates a buttery-smooth animation, and makes
          it quite addicting to just scroll up and down and watch the circles
          interact.
        </p>
        <h3>The products needed to be front and centre</h3>
        <p>
          Each menu item has a lot of ingredients and price points, but what
          sells a product is how it looks. Customers need to see the food to get
          that itch, that craving, that desire to go and get one. We decided to
          make a separate page for each menu category. Below is an example of
          the Waffles category. From here, you are greeted with a gorgeous
          oversized photo of the product to really wet your appetite.
        </p>
        <p>
          At the end of the page we give the user the ability to view the next
          product category for easy navigation. Finally, we continued to make
          the website unique by utilizing the physics engine to render the
          circles just before the footer.
        </p>
        <Image
          src="/images/strawberry-swaffle.jpg"
          width={1000}
          height={800}
          alt="One of Swirleez signature treats, a Swaffle."
        />
        <p>
          To unify the design further and to continue with the usage of spheres,
          we made the menu flyout as a sphere.
        </p>
        <Image
          src="/images/swirleez-menu-animated-small.gif"
          width={1000}
          height={800}
          alt="Animated gif of the Swirleez navigation menu."
        />
        <h2 className="h1">Results</h2>
        <h3>Fun, visual experience</h3>
        <p>
          When a user goes to the site, they quickly see the visual effects in
          action. We optimized the code in such a way that the animations will
          be buttery smooth, even on mobile devices. If you’re curious, we did
          this by making it so there are actually only ever two rows of bubbles,
          and then, based on where a user is on the page, those bubbles will
          move there. This creates the illusion that there are bubbles after
          every section, when in reality it’s just the two!
        </p>
        <h3>A modern website</h3>
        <p>
          Swirleez now has a modern website, on a platform that is scalable.
          They are able to easily add new features, such as the ability to sell
          products through Shopify. The website is now fun, inviting and
          perfectly matches their brand colours and fonts.
        </p>
      </div>
    )
  },
}

export default swirleezData
