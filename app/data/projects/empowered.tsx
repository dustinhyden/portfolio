import Video from "@/app/components/Video"
import Image from "next/image"
import Link from "next/link"

import { ProjectType } from ".."

const empoweredData: ProjectType = {
  title: "Empowered",
  featured: false,
  featuredVideo: "/videos/empowered-homepage.mp4",
  subtitle:
    "See how I custom developed an ecommerce enabled website for a small town cosmetics shop in Midland, Ontario.",
  href: "/projects/empowered",
  image: {
    src: "/images/featured-image-portrait-empowered.png",
    alt: "Photo of Katelyn and a client",
  },
  industry: "Cosmetics",
  toolsUsed: ["WordPress"],
  work: ["Web Design"],
  externalLink: "https://empoweredbybae.com/",
  content: () => {
    return (
      <div>
        <h2 className="h1">Empowered Medical Aesthetics Co. 👩‍⚕️</h2>
        <h3>Background</h3>
        <p>
          <a href="https://empoweredbybae.com/" target="_blank">
            Empowered Medical Aesthetics Co.
          </a>{" "}
          also known as Empowered by BAE, is a medical esthetician company
          located in Midland, Ontario. Founded by Katelyn Burden, RN, Empowered
          focuses on putting clients first. Every client who walks into her spa
          has a different vision. Katelyn listens to each individual's needs,
          and provides natural enhancements through medical aesthetic services.
        </p>
        <h3>Project</h3>
        <p>
          Katelyn was looking to improve her web presence by having a fully
          custom website developed that showcases her brand and her vision. She
          wanted a website that would unify with her already existing digital
          assets, while also pushing the boundaries on what a website is capable
          of. This is that journey.
        </p>
        <Video src="/videos/empowered-homepage.mp4" />
        <h3>Navigation</h3>
        <p>
          I always make the navigation of any website my first priority. If the
          user can't figure out how to traverse the site, it doesn't matter how
          beautiful the site is. Additionally, Empowered has a lot of pages,
          from contact, to shop, to privacy policy, and more.
        </p>
        <p>
          I placed the “Menu” button in the top left corner of each page. It's
          the first link a user will see when looking for the navigation. This
          button is the perfect way to get users to see all of the links
          available to them.
        </p>
        <p>
          I then decided to make a full page flyout navigation to house all of
          the pages for the site, as we wanted the menu to be fun and unique. By
          adding a whole slew of animations and hover effects, I achieved just
          that. Check out the video below showcasing this menu.
        </p>
        <Video src="/videos/empowered-nav.mp4" />
        <h3>Reiterating what we want the viewer to do</h3>
        <p>
          Most viewers who want to create an appointment or contact the business
          will, by default, look for the Contact page. However, Empowered's goal
          is to get businesses to book appointments. For the site, I added an
          option to book an appointment along the top navigation bar, and also
          added a sticky button to the side prompting the viewer towards
          appointments. If the user stumbles onto the Contact page, I split this
          page to once again tell the user what we want them to do. See this in
          action in the video below.
        </p>
        <Video src="/videos/empowered-split.mp4" />
        <h2 className="h1">More features</h2>
        <h3>Ecommerce solution</h3>
        <p>
          Empowered wanted the ability to sell products online, and to be able
          to use their store as a one-stop-shop for her business. To accomplish
          this we integrated Woocommerce with the custom website, this gave them
          the flexibility to add all of her products, and any additional plugins
          or features they may need
        </p>
        <h3>Scheduling platform</h3>
        <p>
          Empowered was using a scheduling platform that they knew needed to be
          on the new website. We integrated the scheduling platform for them so
          their business could continue to function as normal, without having to
          change their order of operations.
        </p>
        <h2 className="h1">Final comments</h2>
        <h3>GoDaddy</h3>
        <p>
          We are constantly trying to provide a better experience for our
          clients. As such, we regularly test new hosting providers in our
          attempt to find the best one. We decided to try GoDaddy for a few of
          our clients, as many of our clients have their domains registered with
          GoDaddy as a platform.
        </p>
        <p>
          The reviews for GoDaddy hosting are overall very positive, with some
          outliers. However, our experience has been less than ideal. I
          immediately transferred Empowered to a new platform, as their site on
          GoDaddy was taking an extra 6-14 seconds of load time just waiting for
          a response from the server. That's not the download time. That's just
          the initial response, which is far too long for any website.
        </p>
        <p>
          If you are considering hosting your site on GoDaddy I would recommend
          against it as the results are unreliable.
        </p>
        <h3>Results</h3>
        <p>
          This project allowed me to really test my client-side programming
          skills. From making custom galleries, to a before-and-after slideshow,
          I got to play around with all sorts of elements. And the results show.
          The site has a very unique look and feel. We want to thank Empowered
          for giving us this opportunity to make this website, and we look
          forward to finding a new platform to host their website on in the
          future.
        </p>
      </div>
    )
  },
}

export default empoweredData
