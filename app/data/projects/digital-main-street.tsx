import Image from "next/image"
import Link from "next/link"

import { ProjectType } from ".."

const dmsData: ProjectType = {
  title: "Digital Main Street",
  featured: false,
  featuredVideo: "/images/dms-gif-with-text.gif",
  subtitle:
    "Learn about Hyden's role with the City of Barrie and their Digital Main Street initiative.",
  href: "/projects/digital-main-street",
  image: {
    src: "/images/dms-banner.gif",
    alt: "Three people sitting on a chair",
  },
  industry: "Various",
  toolsUsed: ["WordPress", "Shopify", "Hubspot", "Mailchimp"],
  work: ["Web Design", "Brand Identity", "Brand Strategy", "Digital Marketing"],
  externalLink: null,
  content: () => {
    return (
      <div>
        <h2 className="h1">
          Getting businesses online in Barrie & Simcoe County 💻
        </h2>
        <h3>Background</h3>
        <p>
          In 2019, the City of Barrie and the County of Simcoe decided to join
          an initiative called Digital Main Street, where a team of specialists
          would be assembled to help local businesses with their online
          presence. This program was originally intended to only last 12 months,
          however due to the success of the program, it was extended until March
          2021! I was chosen to help with this task after showcasing a video of
          a platform I was working on to educate other programmers. Our
          dedication to education was our key to success with the hundreds of
          businesses we consulted.
        </p>
        <h3>Initial Strategy</h3>
        <p>
          Helping businesses who did not have a digital presence meant we needed
          to go the old fashion route: door-to-door. From there, we were able to
          speak directly with each business and learn their needs and more
          importantly, their pains. Some needed a website ASAP, while others
          needed help with their social media, some were looking for guidance
          and some wanted to be educated. With this knowledge, we then began to
          implement a specialized plan for each business.
        </p>
        <Image
          src="/images/bohemia-logo-black.jpg"
          width={1000}
          height={800}
          alt="Bohemia Barrie logo"
        />
        <p>
          For each business, I would sit down to determine what goal to focus
          on. One such business was{" "}
          <a href="https://www.bohemiabarrie.com/" target="_blank">
            Bohemia Barrie
          </a>
          . By the end of the program, Bohemia had a fully functional
          Squarespace website, with ecommerce functionality, and were
          comfortable using the platform. That last one is huge. It meant that
          they would keep the site fresh! If you want to learn more about the
          process I took with Bohemia,{" "}
          <Link href="/projects/bohemia">check it out</Link>.
        </p>
        <h3>Educating on a larger scale</h3>
        <p>
          Each year, Barrie hosts{" "}
          <a href="https://xceleratesummit.co/" target="_blank">
            Xcelerate Summit
          </a>
          , Central Ontario's Premier Business Event. In between scheduled
          events, Xcelerate hosts their “Learning Series.” We were tasked with
          hosting the seminar, along with marketing it!
        </p>
        <p>
          Educating a crowd of 75+ business owners was quite different from the
          1-on-1 we had been doing up until now. However, we were able to
          utilize all of the door-to-door knowledge that we gathered, the pain
          points businesses had, and we were able to condense it into three 1
          hour presentations.
        </p>
        <p>
          The seminar was an interesting note in my life, as nearly all of the
          businesses who had attended were plagued with the same issues as the
          ones I had met 1-on-1.
        </p>
        <h3>Taking the story online</h3>
        <p>
          Building off of the success of the Learning Series, we rolled out
          several webinar series to continue educating businesses en masse. This
          meant the creation of a whole slew of webinars, from social media to
          websites. It also meant the creation of slideshows and deliverables
          that we could give to each business as a sort of “care package”.
        </p>
        <h2 className="h1">
          Animated gifs are a live saver (and a money saver) 🎉
        </h2>
        <Image
          src="/images/dms-gif-with-text.gif"
          width={1000}
          height={800}
          alt="Animated gif example"
        />
        <h2 className="h1">Outcomes</h2>
        <h3>We helped hundreds of small businesses</h3>
        <p>
          This was the biggest result by far. Combined, the team of specialists
          were able to connect with over 200 businesses and help with their
          digital presence (from a 1 hour call to up to 10 hours of help per
          business). We were able to help businesses activate numerous tools
          such as Google My Business. We helped explain their analytics, and we
          even got to make a few websites.
        </p>
        <h3>Webinars for anyone to access</h3>
        <p>
          All of the webinars that we hosted have been recorded and archived for
          viewing for any business owner on the Barrie website. If you would
          like to watch any of the recordings, feel free to check them out.
        </p>
        <h3>Appreciation</h3>
        <p>
          This program is what launched Hyden, and we wouldn't be here today if
          this program did not exist. We want to thank all of the partners
          involved, and we look forward to the day where we collaborate once
          again.
        </p>
      </div>
    )
  },
}

export default dmsData
