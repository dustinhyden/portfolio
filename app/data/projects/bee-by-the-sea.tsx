import Video from "@/app/components/Video"
import Image from "next/image"

import { ProjectType } from ".."

const beeData: ProjectType = {
  title: "Bee By The Sea",
  featured: true,
  featuredVideo: "/videos/bee-homepage.mp4",
  subtitle:
    "Check out how I turned Bee By The Sea's website into one of the easiest to navigate ecommerce stores (they have 200+ products).",
  href: "/projects/bee-by-the-sea",
  image: {
    src: "/images/bee-homepage.jpg",
    alt: "Lots of bees.",
  },
  industry: "Natural Products",
  toolsUsed: ["WordPress"],
  work: ["Web Design"],
  externalLink: "https://beebythesea.com/",
  content: () => {
    return (
      <div>
        <h2 className="h1">
          Bestselling body cream made with sea buckthorn and 🐝 honey
        </h2>
        <h3>Background</h3>
        <p>
          <a href="https://beebythesea.com/" target="_blank">
            Bee By The Sea Natural Products
          </a>{" "}
          was founded in 2008 by Andrew Wingrove with the chance discovery of
          the sea buckthorn berry while travelling abroad. After extensive
          research and development, Bee launched a cream unlike anything else on
          the market. Fast forward 12 years and they are still producing that
          same bestselling body cream. They’ve expanded their offerings to
          include a whole assortment of healthy products. Best of all,
          everything is produced and packaged in Ontario.
        </p>
        <h3>Project</h3>
        <p>
          Bee needed a new website. Well actually, they needed two-in-one. Their
          business has two major segments: end consumers, and wholesale users.
          To better serve both segments, Bee was looking for a way to have their
          website look and feel different based on what user was logged in. Or
          to put it another way, they needed a way for their wholesale customers
          to have a different experience from end consumers.
        </p>
        <p>
          This meant I needed to build two websites disguised as one! The goal
          was to give Bee the flexibility of using one platform to better serve
          their customers and also make their own lives a tad easier.
        </p>
        <Video src="/videos/bee-homepage.mp4" />
        <h3>Reducing the number of clicks required</h3>
        <p>
          Bee stressed the importance of reducing the number of clicks it takes
          for a viewer to get to where they want to go. To do this, we focused
          on the navigation. When on a computer, the viewer can mouse over any
          of the dropdowns along the top to be greeted with a very unique drop
          down effect. On mobile, I implemented the ability to view the dropdown
          information with the use of tabs. See the video and picture below to
          see this in action.
        </p>
        <Video src="/videos/bee-nav.mp4" />
        <p>
          Before the new website, users were required to click first into the
          shop, then into a collection, and then finally they could scroll and
          try to find the product they had in mind. This new navigation puts all
          of their best sellers upfront and easily accessible.
        </p>
        <Image
          src="/images/bee-top-down.jpg"
          width={1000}
          height={800}
          alt="Top down view of honey and other yellow seeds."
        />
        <h3>Grid-style promotional blocks</h3>
        <p>
          The ability to promote specific products on a website is a huge key to
          the success for any ecommerce business. I decided to create two types
          of promotional blocks that Bee can place anywhere on their site. The
          first is a single, full page promotion, the second is a 3 card block
          promoting 3 different options. Check this out in action below.
        </p>
        <Video src="/videos/bee-feature-cards.mp4" />
        <h3>Full page search</h3>
        <p>
          If the user cannot find what they are looking for using the extensive
          drop down navigation, they can use the site wide search option
          instead. This search menu is a full page option, as can be seen in the
          video below.
        </p>
        <Video src="/videos/bee-search.mp4" />
        <h3>Rewards</h3>
        <p>
          Bee wanted to include the rewards program information in a manner that
          was easier to digest. To do so, I fixed a button to the bottom left of
          every page which opens up a rewards panel with customizable
          information. Viewers can now easily see how many reward points they
          have, along with how to earn more.
        </p>
        <Video src="/videos/bee-rewards.mp4" />
        <h3>Contact options</h3>
        <p>
          Bee recently opened a physical store, and as such, needed a way for
          viewers to easily get directions to this new location. I implemented
          an option for viewers to click the map that will automatically open
          Google Maps. This map is actually just a picture for quicker load
          times, but the user cannot tell as hovering over the picture initiates
          a fancy hover effect and indicates to click to go to Google Maps.
        </p>
        <p>
          I also made the contact information stick on the left side of the
          screen to always remain in view. This small effect adds to the overall
          polish of the design and greatly improves user experience.
        </p>
        <Video src="/videos/bee-contact.mp4" />
        <h2 className="h1">Ecommerce Solution</h2>
        <h3>Creating a minimal store, packed full of features</h3>
        <p>
          When browsing products, a viewer is greeted with a traditional grid of
          options. From here, the viewer can mouse over any of the links and
          quickly view the product.
        </p>
        <h3>A bold product page.</h3>
        <p>
          When viewing a single product page, the viewer is greeted with a very
          unique design. Typically, the product images are along the left or the
          right, however, I decided to go a different route. I put the photo
          front and center, and then pinned the ability to add the product to
          cart to the top right corner of the screen.
        </p>
        <Video src="/videos/bee-products.mp4" />
        <Video src="/videos/bee-product-page.mp4" />
        <h2 className="h1">Final comments</h2>
        <h3>More features</h3>
        <p>
          This project is packed full of features and I barely even touched the
          surface. If you like what you see and you want us to help with your
          next website let us know and we can discuss even more of the features
          we built into this project
        </p>
        <h3>Increased revenue</h3>
        <p>
          This site was launched back in 2019-2020, yet the design still feels
          relevant and some might say timeless. The site helped boost sales by
          nearly 25% annually. As the business grew the original owner has since
          sold the business, and the new owner has made the decision that the
          business is ready for another refresh. We wish them the best and we
          hope their new website lasts as long as this one did!
        </p>
        <h3>Could you be next?</h3>
        <p>
          I'm always looking for more forward thinking clients. Bee allowed me
          the creative freedom necessary to make all of the features that they
          wanted possible. I had a blast working with them and developing this
          website. If you want your business to have a website that stands out,
          let me know! I would love to see how I can help.
        </p>
      </div>
    )
  },
}

export default beeData
