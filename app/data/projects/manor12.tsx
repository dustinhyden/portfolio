import Video from "@/app/components/Video"
import Image from "next/image"
import Link from "next/link"

import { ProjectType } from ".."
import Example from "../../3d/projects/Example"

const manorData: ProjectType = {
  title: "MANOR12",
  featured: true,
  subtitle: "Helping an award winning interior decorator showcase her work.",
  displayFile: (index = 0) => {
    return <Example index={index} key={index} />
  },
  href: "/projects/manor12",
  image: {
    src: "/images/manor12-homepage.jpg",
    alt: "Photo of a kids room",
  },
  industry: "Interior Decoration",
  toolsUsed: ["WordPress"],
  work: ["Web Design"],
  externalLink: "https://mindyourmanor.ca/",
  content: () => {
    return (
      <div>
        <h2 className="h1">It’s time to mind your manor. 🏠</h2>
        <h3>Background</h3>
        <p>
          <a href="https://mindyourmanor.ca/" target="_blank">
            MANOR12
          </a>{" "}
          is an award winning interior decoration company. They have been
          featured in numerous magazines and publications, including HGTV.
          MANOR12 provides personalized guidance for homeowners who are ready
          for a change.
        </p>
        <h3>Project</h3>
        <p>
          I was tasked with creating a fully custom WordPress website, one that
          would focus on the photography to tell a story. It needed to be clean,
          modern, and showcase all of MANOR12’s talents.
        </p>
        <Video src="/videos/mind-your-manor-homepage.mp4" />
        <h3>It’s all about the photography</h3>
        <p>
          I knew from the very beginning that the website needed to focus solely
          on product photography. Being too busy or cluttered would detract from
          what makes MANOR12 so special – their ability to design and stage
          rooms.
        </p>
        <p>
          However, you can’t just throw a few pictures on a page and hope it
          looks good. It takes planning, and a lot of creativity. By adding a
          really neat effect, I call it the looking glass effect, I was able to
          make each and every photo feel like it was alive, and as if you were
          peering into a world of wonder and intrigue. Whenever the user scrolls
          through the page, the images will actually reveal more of themselves,
          almost like a looking glass peering into the photo.
        </p>
        <p>
          I didn’t make it so more of the image just… appears. That would be too
          easy! Not to mention, not as visually stunning. Instead, the photo
          slides through a mask, giving the user a sort of spotlight on the
          image, and based on how much they scroll, the spotlight moves.
        </p>
        <h3>The looking glass effect</h3>
        <p>
          When a viewer scrolls through the page, more of the image will come
          into frame, but not in the traditional manner. Instead, the user is
          given a window into the image. See the video below to see this effect
          in action.
        </p>
        <Video src="/videos/manor12-scrolled.mp4" />
        <Image
          src="/images/manor12-bedroom-interior.jpg"
          width={1000}
          height={800}
          alt="Master bedroom."
        />
        <h3>Pop-up gallery, to really focus on the photography</h3>
        <p>
          I implemented the ability for the viewers to click on images and see
          them in a focused mode. This really drives home the idea that the
          photos are what the viewer is meant to spend their time and attention
          on.
        </p>
        <Video src="/videos/manor12-gallery.mp4" />
        <h3>Page transitions</h3>
        <p>
          When a viewer traverses the website, I wanted the pages to transition
          beyond just going to white like a traditional website. Instead, I
          wanted to unify the page transition design with the same functionality
          as MANOR12’s navigation menu dropdown. This required me to code the
          entire website as just one page (and implement a whole bunch of neat
          server and client side effects) but the end result was worth it. Check
          it out below.
        </p>
        <Video src="/videos/manor12-page-transitions.mp4" />
        <h3>Speaking of the navigation…</h3>
        <p>
          A good user experience is everything. Before I even begin coding or
          designing the page, I sit down and determine how i want the user to
          traverse the site. Do I want them to see the most important links or
          click a hamburger menu, or both? Do I want to entice the user to
          scroll down, or focus on a specific piece of content? For MANOR12, we
          wanted to make sure that a user could always find their way around the
          site. To do this, I created a sticky hamburger menu, along with a
          search icon. Check out how I utilized these in the video below.
        </p>

        <Video src="/videos/manor12-navigation.mp4" />
        <h2 className="h1">Final comments</h2>
        <h3>Results</h3>
        <p>
          MANOR12 now has a website that is truly unique. From the subtle
          animations to the sliding photo effect, I love this project so much,
          and MANOR12’s viewers do as well. This project was an amazing project
          to be working on. I appreciate{" "}
          <a href="https://mindyourmanor.ca/" target="_blank">
            MANOR12
          </a>{" "}
          giving me the opportunity to work on this project and help create a
          standout product.
        </p>
      </div>
    )
  },
}

export default manorData
