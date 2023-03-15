import { ProjectType } from "."
import HomepageSidebar from "../components/HomepageSidebar"

const homeData: ProjectType = {
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
}
export default homeData
