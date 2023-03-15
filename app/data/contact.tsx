import { ProjectType } from "."
import Example from "../3d/projects/Example"

const contactData: ProjectType = {
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
  content: null,
}

export default contactData
