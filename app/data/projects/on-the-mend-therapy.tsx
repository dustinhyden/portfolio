import Video from "@/app/components/Video"
import Image from "next/image"

import { ProjectType } from ".."

const onTheMendData: ProjectType = {
  title: "On The Mend Therapy",
  featured: false,
  featuredVideo: "/videos/mend-homepage.mp4",
  subtitle: "A clinic that feels like a spa.",
  href: "/projects/on-the-mend-therapy",
  image: {
    src: "/images/on-the-mend-therapy.jpg",
    alt: "Hand being massaged",
  },
  industry: "Massage Therapy",
  toolsUsed: ["WordPress"],
  work: ["Web Design"],
  externalLink: "https://onthemendtherapy.ca/",
  content: () => {
    return (
      <div>
        <h2 className="h1">A clinic that feels like a spa 💆‍♀️</h2>
        <Video src="/videos/mend-homepage.mp4" />
        <h3>Create an inviting and warm atmosphere</h3>
        <p>
          Our goal with On The Mend Therapy was to create a more relaxing
          experience. This meant switching to calmer earth tones, and guiding
          the viewer throughout the website. Originally, the client used orange
          as a call to action colour. However, orange is often associated with
          junk mail. Therefore, I switched this out for tan and maroon.
        </p>
        <p>
          The main menu was designed specifically to focus on the key concerns a
          viewer might have. From questions (FAQ), to Covid-19, to everything
          in-between. The end result is a very friendly, and inviting, unisex
          experience.
        </p>
        <Image
          src="/images/mend-call-to-action.jpg"
          width={1000}
          height={800}
          alt="Font example taken from On The Mend Therapy's website."
        />
        <p>
          Fonts play a huge role when establishing a mood. I utilized two fonts
          in the call to action to create excitement while also calming the
          viewer with the pastel colours, and transparent background.
        </p>
        <Image
          src="/images/on-the-mend-barrie.jpg"
          width={1000}
          height={800}
          alt="Woman being massaged."
        />
        <h3>Simplicity</h3>
        <p>
          On The Mend uses a booking system separate from their own website.
          However, including their services on the website meant a potential SEO
          boost. Therefore, our solution was to create a very minimal grid
          layout of the services they provide where each item leads to their
          booking platform.
        </p>
        <Video src="/videos/mend-menu.mp4" />
        <h3>Knowledgebase</h3>
        <p>
          On The Mend needed a way to easily answer their frequently asked
          questions. Rather than follow the trend of making boring plain text
          pages, I took this as an opportunity to grow On The Mend’s brand
          value. By applying their branding to the FAQ, adding areas of user
          interactions, and turned a boring page into a visually appealing
          experience I have been able to create an entire experience that feels
          more complete and professional.
        </p>
        <Video src="/videos/mend-faq.mp4" />
        <h3>Photography</h3>
        <p>
          Shh, don’t tell anyone but all of the photos used for this project
          were royalty free photos. Thus ending the debate of whether or not
          it’s possible to create a beautiful website with just royalty free
          images. If you don’t have photos to use for the site, don’t worry
          about it! We’re more than happy to take the time to find the perfect
          photos to match your brand
        </p>
      </div>
    )
  },
}

export default onTheMendData
