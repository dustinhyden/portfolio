import { ProjectType } from "."

const contactData: ProjectType = {
  title: "Contact me",
  featured: true,
  featuredVideo: null,
  subtitle: "Want to get in touch with me? Click the picture!",
  href: "/contact",
  image: {
    src: "/images/contact-me-banner.jpg",
    alt: "Polar bear holding camera",
  },
  content: () => null,
}

export default contactData
