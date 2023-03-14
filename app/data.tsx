import Example from "./3d/projects/Example"
import HomepageSidebar from "./components/HomepageSidebar"

export type ProjectType = {
  title: string
  description?: string
  displayFile: (index?: number) => React.ReactNode
  subtitle: string
  hideSubtitleOnMobile?: boolean
  sidebarWidget?: () => React.ReactNode
  href: string
  image: {
    src: string
    alt: string
  }
  industry?: string
  toolsUsed?: string[]
  work?: string[]
  externalLink?: string
  content: () => React.ReactNode
}
const data: ProjectType[] = [
  {
    title: "Your next Front end developer",
    displayFile: () => null,
    subtitle:
      "Specializing in React and NextJS, with extensive experience using WordPress",
    hideSubtitleOnMobile: true,
    sidebarWidget: () => <HomepageSidebar />,
    href: "/projects//",
    image: {
      src: "/images/bohemia-barrie.jpg",
      alt: "Man making coffee",
    },
    content: null,
  },
  {
    title: "Example Project",
    description: "Meta description here example.",
    subtitle: "Helping bee do",
    displayFile: (index = 0) => {
      return <Example index={index} key={index} />
    },
    href: "/projects/weqfqwef",
    image: {
      src: "/images/bohemia-barrie.jpg",
      alt: "Man making coffee",
    },
    industry: "Construction",
    toolsUsed: ["WordPress"],
    work: ["Web Design", "Branding"],
    externalLink: "https://www.bohemiabarrie.com/",
    content: () => {
      return (
        <div>
          <h3>Background</h3>
          <p>
            Straightline Construction was founded in 2003, and since then has
            grown to a crew of nearly a dozen talented and skilled tradesmen.
            After renovating countless homes, they realized that their website
            was in dire need of a refresh.
          </p>
          <h3>Background</h3>
          <p>
            Straightline Construction was founded in 2003, and since then has
            grown to a crew of nearly a dozen talented and skilled tradesmen.
            After renovating countless homes, they realized that their website
            was in dire need of a refresh.
          </p>
          <h3>Background</h3>
          <p>
            Straightline Construction was founded in 2003, and since then has
            grown to a crew of nearly a dozen talented and skilled tradesmen.
            After renovating countless homes, they realized that their website
            was in dire need of a refresh.
          </p>
          <h3>Background</h3>
          <p>
            Straightline Construction was founded in 2003, and since then has
            grown to a crew of nearly a dozen talented and skilled tradesmen.
            After renovating countless homes, they realized that their website
            was in dire need of a refresh.
          </p>
          <h3>Background</h3>
          <p>
            Straightline Construction was founded in 2003, and since then has
            grown to a crew of nearly a dozen talented and skilled tradesmen.
            After renovating countless homes, they realized that their website
            was in dire need of a refresh.
          </p>
          <h3>Background</h3>
          <p>
            Straightline Construction was founded in 2003, and since then has
            grown to a crew of nearly a dozen talented and skilled tradesmen.
            After renovating countless homes, they realized that their website
            was in dire need of a refresh.
          </p>
        </div>
      )
    },
  },
  {
    title: "Example Project 2",
    description: "Meta description here other.",
    subtitle: "Another example here.",
    displayFile: (index = 0) => {
      return <Example index={index} key={index} />
    },
    href: "/projects/qwefwqef",
    image: {
      src: "/images/on-the-mend-barrie.jpg",
      alt: "Man making coffee",
    },
    industry: "Construction",
    toolsUsed: ["WordPress"],
    work: ["Web Design"],
    externalLink: "https://www.bohemiabarrie.com/",
    content: () => {
      return (
        <div>
          <h3>Background</h3>
          <p>
            Straightline Construction was founded in 2003, and since then has
            grown to a crew of nearly a dozen talented and skilled tradesmen.
            After renovating countless homes, they realized that their website
            was in dire need of a refresh.
          </p>
        </div>
      )
    },
  },
  {
    title: "Example Project 3",
    description: "Meta description here.",
    subtitle: "Another example here.",
    displayFile: (index = 0) => {
      return <Example index={index} key={index} />
    },
    href: "/projects/examwqefwle",
    image: {
      src: "/images/bohemia-barrie.jpg",
      alt: "Man making coffee",
    },
    industry: "Construction",
    toolsUsed: ["WordPress"],
    work: ["Web Design"],
    externalLink: "https://www.bohemiabarrie.com/",
    content: () => {
      return (
        <div>
          <h3>Background</h3>
          <p>
            Straightline Construction was founded in 2003, and since then has
            grown to a crew of nearly a dozen talented and skilled tradesmen.
            After renovating countless homes, they realized that their website
            was in dire need of a refresh.
          </p>
        </div>
      )
    },
  },
  {
    title: "Example Project 4",
    description: "Meta description here.",
    subtitle: "Another example here.",
    displayFile: (index = 0) => {
      return <Example index={index} key={index} />
    },
    href: "/projects/wqefwqef",
    image: {
      src: "/images/bohemia-barrie.jpg",
      alt: "Man making coffee",
    },
    industry: "Construction",
    toolsUsed: ["WordPress"],
    work: ["Web Design"],
    externalLink: "https://www.bohemiabarrie.com/",
    content: () => {
      return (
        <div>
          <h3>Background</h3>
          <p>
            Straightline Construction was founded in 2003, and since then has
            grown to a crew of nearly a dozen talented and skilled tradesmen.
            After renovating countless homes, they realized that their website
            was in dire need of a refresh.
          </p>
        </div>
      )
    },
  },
  {
    title: "qwedqwed",
    description: "Meta description here.",
    subtitle: "Another example here.",
    displayFile: (index = 0) => {
      return <Example index={index} key={index} />
    },
    href: "/projects/qewf",
    image: {
      src: "/images/bohemia-barrie.jpg",
      alt: "Man making coffee",
    },
    industry: "Construction",
    toolsUsed: ["WordPress"],
    work: ["Web Design"],
    externalLink: "https://www.bohemiabarrie.com/",
    content: () => {
      return (
        <div>
          <h3>Background</h3>
          <p>
            Straightline Construction was founded in 2003, and since then has
            grown to a crew of nearly a dozen talented and skilled tradesmen.
            After renovating countless homes, they realized that their website
            was in dire need of a refresh.
          </p>
        </div>
      )
    },
  },
  {
    title: "Effweqf",
    description: "Meta description here.",
    subtitle: "Another example here.",
    displayFile: (index = 0) => {
      return <Example index={index} key={index} />
    },
    href: "/projects/qewwqwqwqwq",
    image: {
      src: "/images/bohemia-barrie.jpg",
      alt: "Man making coffee",
    },
    industry: "Construction",
    toolsUsed: ["WordPress"],
    work: ["Web Design"],
    externalLink: "https://www.bohemiabarrie.com/",
    content: () => {
      return (
        <div>
          <h3>Background</h3>
          <p>
            Straightline Construction was founded in 2003, and since then has
            grown to a crew of nearly a dozen talented and skilled tradesmen.
            After renovating countless homes, they realized that their website
            was in dire need of a refresh.
          </p>
        </div>
      )
    },
  },
  {
    title: "Example wqef",
    description: "Meta description here.",
    subtitle: "Another example here.",
    displayFile: (index = 0) => {
      return <Example index={index} key={index} />
    },
    href: "/projects/fewq11fqwe",
    image: {
      src: "/images/bohemia-barrie.jpg",
      alt: "Man making coffee",
    },
    industry: "Construction",
    toolsUsed: ["WordPress"],
    work: ["Web Design"],
    externalLink: "https://www.bohemiabarrie.com/",
    content: () => {
      return (
        <div>
          <h3>Background</h3>
          <p>
            Straightline Construction was founded in 2003, and since then has
            grown to a crew of nearly a dozen talented and skilled tradesmen.
            After renovating countless homes, they realized that their website
            was in dire need of a refresh.
          </p>
        </div>
      )
    },
  },
  {
    title: "Examweqfqwef",
    description: "Meta description here.",
    subtitle: "Another example here.",
    displayFile: (index = 0) => {
      return <Example index={index} key={index} />
    },
    href: "/projects/example1313",
    image: {
      src: "/images/bohemia-barrie.jpg",
      alt: "Man making coffee",
    },
    industry: "Construction",
    toolsUsed: ["WordPress"],
    work: ["Web Design"],
    externalLink: "https://www.bohemiabarrie.com/",
    content: () => {
      return (
        <div>
          <h3>Background</h3>
          <p>
            Straightline Construction was founded in 2003, and since then has
            grown to a crew of nearly a dozen talented and skilled tradesmen.
            After renovating countless homes, they realized that their website
            was in dire need of a refresh.
          </p>
        </div>
      )
    },
  },
  {
    title: "Hello World",
    description: "Meta description here.",
    subtitle: "Another example here.",
    displayFile: (index = 0) => {
      return <Example index={index} key={index} />
    },
    href: "/projects/example12",
    image: {
      src: "/images/bohemia-barrie.jpg",
      alt: "Man making coffee",
    },
    industry: "Construction",
    toolsUsed: ["WordPress"],
    work: ["Web Design"],
    externalLink: "https://www.bohemiabarrie.com/",
    content: () => {
      return (
        <div>
          <h3>Background</h3>
          <p>
            Straightline Construction was founded in 2003, and since then has
            grown to a crew of nearly a dozen talented and skilled tradesmen.
            After renovating countless homes, they realized that their website
            was in dire need of a refresh.
          </p>
        </div>
      )
    },
  },
  {
    title: "Contact me",
    description: "Meta description here.",
    subtitle: "Another example here.",
    displayFile: (index = 0) => {
      return <Example index={index} key={index} />
    },
    href: "/contact",
    image: {
      src: "/images/bohemia-barrie.jpg",
      alt: "Man making coffee",
    },
    content: () => {
      return (
        <div>
          <h3>Background</h3>
          <p>
            Straightline Construction was founded in 2003, and since then has
            grown to a crew of nearly a dozen talented and skilled tradesmen.
            After renovating countless homes, they realized that their website
            was in dire need of a refresh.
          </p>
        </div>
      )
    },
  },
]
export default data
