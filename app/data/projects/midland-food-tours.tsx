import Example from "@/app/3d/projects/Example"
import Video from "@/app/components/Video"
import Image from "next/image"
import Link from "next/link"

import { ProjectType } from ".."

const mftData: ProjectType = {
  title: "Midland Food Tours",
  featured: true,
  subtitle:
    "See how I helped Midland Food Tours develop a platform that helps position them as the defacto tour business in Midland, Ontario.",
  displayFile: (index = 0) => {
    return <Example index={index} key={index} />
  },
  href: "/projects/midland-food-tours",
  image: {
    src: "/images/midland-food-tours-mural1.jpg",
    alt: "Midland mural of man rowing a boat.",
  },
  industry: "Travel & hospitality",
  toolsUsed: ["WordPress"],
  work: ["Web Design"],
  externalLink: "https://mrvalisier.com/",
  content: () => {
    return (
      <div>
        <h2 className="h1">
          One of the best culinary tours in the heart of Georgian Bay 🍰
        </h2>
        <h3>Background</h3>
        <p>
          <a href="https://midlandfoodtours.ca/" target="_blank">
            Midland Food Tours (MFT)
          </a>{" "}
          was founded by Kelly Kurtz, after having visited countless food tours
          across Canada, the United States, and even Cartagena, Columbia. She’s
          used her background in tourism and hospitality and her 20+ years as an
          educator to create one of the best culinary tours around.
        </p>
        <h3>Project</h3>
        <p>
          MFT needed a website that matched their excellent tours. One that was
          engaging, yet minimal. One that screams date night, while also being
          informative. To do this I created a fully custom design from the
          ground up.
        </p>
        <Video src="/videos/mft-homepage.mp4" />
        <h3>It’s all about the photography</h3>
        <p>
          With a food tour you can expect to eat, that’s a given. I wanted the
          photos and videos to go beyond that. MFT is about making a connection
          with Midland, Ontario and the charm that this small town has to offer.
          From the waterfront to the many murals. I put these murals front and
          centre, to help potential customers feel a sense of place.
        </p>
        <Image
          src="/images/Midland-mural-Canadian-guides.jpg"
          width={1000}
          height={800}
          alt="A mural in Midland."
        />
        <h3>Navigation that blends with the page</h3>
        <p>
          What really makes minimalistic designs stand out is how well the
          different elements blend together. To blend the navigation with the
          rest of the site I decided to add an image to the top right of every
          page, with the exact same width as the “Buy Gift Card” button. That
          way, when the user scrolls the button will perfectly overlap the
          picture, thus creating a seamless connection between the content on
          the page and the navigation.
        </p>
        <Video src="/videos/mft-faq-page.mp4" />

        <h2 className="h1">Final comments</h2>
        <h3>Results</h3>
        <p>
          There’s countless other aspects to the design that I could talk about:
          such as finding the perfect shade of blue to help MFT create a sense
          of fun and excitement, while also appearing like the authoritative
          figure on food tours. Just like the rest of the redesign, each aspect
          was worth it. MFT’s new website really does stand out. Take a look at
          their website and then reach out once you’re ready.
        </p>
        <h3>Could you be next?</h3>
        <p>
          Are you a business operating in a small town looking for a world-class
          website? Reach out, and let’s see how I can help you.
        </p>
      </div>
    )
  },
}

export default mftData
