import { ProjectType } from "."
import Example from "../3d/projects/Example"

const exampleData: ProjectType = {
  title: "Example Project",
  description: "Meta description here example.",
  subtitle:
    "Straightline Construction was founded in 2003, and since then has grown to a crew of nearly a dozen talented and skilled tradesmen. After renovating countless homes, they realized that their website was in dire need of a refresh.",
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
        <h2 className="h1">Shortest line from start to finish</h2>
        <h3>Background</h3>
        <p>
          Straightline Construction was founded in 2003, and since then has
          grown to a crew of nearly a dozen talented and skilled tradesmen.
          After renovating countless homes, they realized that their website was
          in dire need of a refresh.
        </p>
        <h3>Background</h3>
        <p>
          Straightline Construction was founded in 2003, and since then has
          grown to a crew of nearly a dozen talented and skilled tradesmen.
          After renovating countless homes, they realized that their website was
          in dire need of a refresh.
        </p>
        <h3>Background</h3>
        <p>
          Straightline Construction was founded in 2003, and since then has
          grown to a crew of nearly a dozen talented and skilled tradesmen.
          After renovating countless homes, they realized that their website was
          in dire need of a refresh.
        </p>
        <h3>Background</h3>
        <p>
          Straightline Construction was founded in 2003, and since then has
          grown to a crew of nearly a dozen talented and skilled tradesmen.
          After renovating countless homes, they realized that their website was
          in dire need of a refresh.
        </p>
        <h3>Background</h3>
        <p>
          Straightline Construction was founded in 2003, and since then has
          grown to a crew of nearly a dozen talented and skilled tradesmen.
          After renovating countless homes, they realized that their website was
          in dire need of a refresh.
        </p>
        <h3>Background</h3>
        <p>
          Straightline Construction was founded in 2003, and since then has
          grown to a crew of nearly a dozen talented and skilled tradesmen.
          After renovating countless homes, they realized that their website was
          in dire need of a refresh.
        </p>
      </div>
    )
  },
}

export default exampleData
