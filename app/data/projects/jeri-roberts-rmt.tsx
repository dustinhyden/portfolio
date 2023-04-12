import Video from "@/app/components/Video"
import Image from "next/image"
import Link from "next/link"

import { ProjectType } from ".."

const jeriData: ProjectType = {
  title: "Jeri Roberts, RMT",
  featured: false,
  featuredVideo: "/videos/jeri-homepage.mp4",
  subtitle:
    "View how I helped Jeri Roberts turn her website into not only a source of information, but also into a driver of conversions (users booking appointments).",
  href: "/projects/jeri-roberts-rmt",
  image: {
    src: "/images/jeri-roberts-water.jpg",
    alt: "Waves",
  },
  industry: "Massage Therapy",
  toolsUsed: ["WordPress"],
  work: ["Web Design"],
  externalLink: "https://www.jeriroberts.com/",
  content: () => {
    return (
      <div>
        <h2 className="h1">
          Specialized Therapeutic Massage for Relief of Head, Neck and Jaw Pain
          💆‍♂️
        </h2>
        <h3>Background</h3>
        <p>
          <a href="https://www.jeriroberts.com/" target="_blank">
            Jeri Roberts
          </a>{" "}
          has made a name for herself in Owen Sound as an expert who truly cares
          for her clients. She provides relief for those suffering with
          temporomandibular joint disorders.
        </p>
        <h3>Project</h3>
        <p>
          Jeri was looking for a new website that went beyond what she currently
          had. She felt her current website was “good, but boring”. I knew right
          away that creating a monochromatic website based on her brand colours,
          with fun/funky headers would create the perfect dichotomy that she was
          looking for.
        </p>
        <Video src="/videos/jeri-homepage.mp4" />
        <h3>Dictionary level authority</h3>
        <p>
          Jeri is the authority on TMJ, and as such her website needed to
          portray that. She has a page that describes everything about TMJ. We
          took this opportunity to design the page in a way such that it appears
          like something right out of a health book, including references.
        </p>
        <Video src="/videos/jeri-tmj.mp4" />
        <h3>Attention to detail</h3>
        <p>
          Making a good website is easy. Making a great website requires
          attention to detail. No aspect of the design is overlooked. When the
          user scrolls to the bottom you'll see that the footer leaves the
          perfect amount of space so as to not be covered by the “back to top”
          button in the bottom right.
        </p>

        <h2 className="h1">Final comments</h2>
        <h3>Results</h3>
        <p>
          The end result is absolutely lovely. My favourite sneaky feature is
          how I added a sidebar on all the pages (aside from the homepage) that
          is the same width as the sidebar in the footer. So, as the user
          scrolls everything appears to just “fit”. I could talk about this
          website for days, but don't let me do all the talking, take a look for
          yourself and then reach out when you're ready!
        </p>
      </div>
    )
  },
}

export default jeriData
