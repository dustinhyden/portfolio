import Video from "@/app/components/Video"
import Image from "next/image"
import Link from "next/link"

import { ProjectType } from ".."
import Example from "../../3d/projects/Example"

const bohemiaData: ProjectType = {
  title: "Bohemia",
  featured: true,
  subtitle:
    "Bohemia was plagued with a website with several broken links, pages that did not load, and a platform to edit content that was not user-friendly. See how I helped set them up with, and designed an easy to use ecommerce solution.",
  displayFile: (index = 0) => {
    return <Example index={index} key={index} />
  },
  href: "/projects/bohemia",
  image: {
    src: "/images/bohemia-coffee-maker.jpg",
    alt: "An espresso machine",
  },
  industry: "Coffee Shop",
  toolsUsed: ["Squarespace"],
  work: ["Web Design"],
  externalLink: "https://www.bohemiabarrie.com/",
  content: () => {
    return (
      <div>
        <h2 className="h1">Beautiful setting, amazing coffee, great food ☕</h2>
        <h3>Background</h3>
        <p>
          <a href="https://www.bohemiabarrie.com/" target="_blank">
            Bohemia Barrie
          </a>{" "}
          is a very well known coffee shop situated at the heart of Barrie’s
          downtown. Their interior is as unique as it gets, and without a doubt
          one of the nicest gems in the city. From the gorgeous tree branch
          railing, to the black and white checkerboard tiles, Bohemia has
          created a very unique aesthetic that just makes you want to stay
          longer and longer.
        </p>
        <h3>Project</h3>
        <p>
          When the{" "}
          <Link href="/projects/digital-main-street">Digital Main Street</Link>{" "}
          program began, one of my initial clients that I worked with was{" "}
          <a href="https://www.bohemiabarrie.com/" target="_blank">
            Bohemia Barrie
          </a>
          . Bohemia was plagued with a website with several broken links, pages
          that did not load, and a platform to edit content that was not
          user-friendly.
        </p>
        <p>
          Bohemia was also looking for an option to sell their product offering
          online and allow customers to come in and pick up their orders
          directly. This forward-thinking mentality immediately sold me on
          helping out.
        </p>
        <Video src="/videos/bohemia-homepage.mp4" />
        <h3>Choosing the right platform for the client</h3>
        <p>
          I decided to build our strategy around finding a user friendly
          platform that Bohemia would enjoy using. One that they would look
          forward to going in and updating content on. If this was meant to
          become an integral part of their business, this needed to be my top
          priority.
        </p>
        <p>
          As with most coffee shops, taking photos of the coffees, posting them
          on social media, and commenting on social media is extremely
          important. This also meant we wanted to find a platform that had a
          really good admin interface for mobile devices.
        </p>
        <p>
          Ultimately, we settled on using{" "}
          <a href="http://squarespace.com/" target="_blank">
            Squarespace
          </a>
          , and this is our journey.
        </p>
        <h3>Having a website is half the battle</h3>
        <p>
          Whenever I make a website for a client, I make sure that they
          understand exactly how the features work and how the platform works.
          Whether this is through personalized video tutorials, phone calls, or
          in-person meetings, I want to make sure the client can take the wheel.
          Otherwise, the website quickly goes stagnant. Content doesn’t get
          updated frequently, and it spells disaster.
        </p>
        <p>
          I sat down with Bohemia and went through how to upload product photos
          to the gallery, where to get the Squarespace app, and how to use it.
        </p>
        <Image
          src="/images/bohemia-contact-page.png"
          width={1000}
          height={800}
          alt="Bohemia's new contact page"
        />
        <h2 className="h1">Outcomes</h2>
        <h3>The obvious outcome: a new website!</h3>
        <p>
          The result of all of our meeting and strategy sessions led to the
          successful implementation of their new website. We helped with the
          domain transfer, and ensured everything was running smoothly.
        </p>
        <h3>Bohemia now has tools they enjoy using.</h3>
        <p>
          Being able to add photos as easily as they can add photos to Instagram
          is a huge success. Moreover, Bohemia has since modified the site to
          add more content! They’ve continually added to their product offering,
          and maintain the site all on their own. I like to call this a big win.
        </p>
      </div>
    )
  },
}

export default bohemiaData
