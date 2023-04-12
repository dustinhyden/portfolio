import Highlight from "@/app/components/Highlight"
import Video from "@/app/components/Video"
import Image from "next/image"
import Link from "next/link"

import { ProjectType } from ".."

const behindTheScenesData: ProjectType = {
  title: "Behind The Scenes",
  featured: true,
  featuredVideo: "/videos/portfolio-about.mp4",
  subtitle:
    "Curious how this website was made? Take a look behind the scenes, view some code snippets, and enjoy.",
  href: "/projects/behind-the-scenes",
  image: {
    src: "/images/behind-the-scenes.jpg",
    alt: "Character of Dustin and a polar bear looking at a website.",
  },
  industry: "Web Development",
  toolsUsed: ["NextJS", "React", "Vercel"],
  work: ["Web Development"],
  content: () => {
    return (
      <div>
        <h2 className="h1">Behind The Scenes</h2>
        <p>
          Curious how this site was made? Well your in luck. Not only have I
          created this behind the scenes look, but you can also view the entire
          repo{" "}
          <a href="https://github.com/dustinHyden/portfolio" target="_blank">
            over on GitHub
          </a>
          .
        </p>
        <h2>Tech Stack</h2>
        <p>
          For this project I used NextJS exclusively for my server (deployed on
          Vercel) and front-end. My database is built into the project rather
          than connecting to an SQL/NoSQL source. I Used react-three-fiber to
          implement my 3D effects, and blender to model/animate all of the 3d
          objects themselves.
        </p>
        <p>
          I&apos;ve been itching to try out the new NextJS 13 beta, and I
          figured this would be a great place to do so. It did however mean a
          lot of bugs to deal with! At the time of writing, the create-next-app
          doesn&apos;t play nicely with React and causes hydration errors out of
          the gate. But with all these bugs aside, Next13 is a huge leap forward
          in my opinion.
        </p>
        <p>
          Whenever possible, I develop as lean as I can. Below you can see my{" "}
          <a
            href="https://github.com/dustinHyden/portfolio/blob/main/package.json"
            target="_blank"
          >
            package.json
          </a>{" "}
          file. There really isn&apos;t much here aside from some type
          declarations, default NextJS packages, threeJS packages for the 3D
          effects, and a few utility packages.
        </p>
        <Highlight
          language="json"
          startingLineNumber={11}
          content={`"dependencies": {
  "@react-three/drei": "^9.57.0",
  "@react-three/fiber": "^8.11.9",
  "@react-three/postprocessing": "^2.7.1",
  "@types/node": "18.14.6",
  "@types/react": "18.0.28",
  "@types/react-dom": "18.0.11",
  "@types/three": "^0.149.0",
  "@vercel/analytics": "^0.1.11",
  "eslint": "8.35.0",
  "eslint-config-next": "13.2.3",
  "next": "13.2.4",
  "react": "^18.2.0",
  "react-dom": "18.2.0",
  "react-syntax-highlighter": "^15.5.0",
  "react-use-scroll-direction": "^0.1.0",
  "three": "^0.150.1",
  "typescript": "4.9.5"
}`}
        />
        <h2>Subtle Animations</h2>
        <p>
          I&apos;m all about the subtle experience. I believe that&apos;s what
          builds to a great experience. One neat subtlety was the simple hover
          menu on desktop. Hovering anywhere near the menu, will expand it,
          reducing the clicks a user has to do by 1, while also hiding that
          information when it&apos;s not necessary (a win-win)!
        </p>
        <p>This effect is mostly CSS magic, and it works like this:</p>
        <Highlight
          language="css"
          startingLineNumber={140}
          content={`/* large screen effects */
@media only screen and (min-width: 768px) {
  .menu-items {
    display: flex;
    align-items: center;
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    /* close speed = 0.35s */
    transition: clip-path 0.35s var(--smoothing),
    -webkit-clip-path 0.35s var(--smoothing);
  }
  .nav-container:hover .menu-items {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    /* open speed = 0.6s */
    transition: clip-path 0.6s var(--smoothing),
    -webkit-clip-path 0.6s var(--smoothing);
  }
  /* hamburger */
  .nav-container:hover .menu-icon__bar:nth-of-type(2) {
    transform: translateX(-494px);
  }
  .nav-container:hover .menu-icon__bar:nth-of-type(1) {
    transform: rotateZ(45deg);
  }
  .nav-container:hover .menu-icon__bar:nth-of-type(3) {
    transform: rotateZ(-45deg);
  }
}`}
        />
        <h2>Let&apos;s Get More Technical</h2>
        <p>
          I love discussing the inner workings of the packages used and the CSS
          that was written, but when it comes down to most people are just
          looking for the fancy JavaScript that was written to make a specific
          effect. So, let&apos;s talk JavaScript
        </p>
        <h2>How Did I Make The Homepage?</h2>
        <p>
          Step 1 was simple, I created a{" "}
          <a
            href="https://github.com/dustinHyden/portfolio/tree/main/app/data"
            target="_blank"
          >
            faux database
          </a>{" "}
          and as a TypeScript fanatic I setup a type that would make sure all of
          my data objects were the same structure. Here is that type:
        </p>
        <Highlight
          language="typescript"
          startingLineNumber={18}
          content={`export type ProjectType = {
  title: string
  featured: boolean
  featuredVideo: string
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
  linkText?: string
  content: () => React.ReactNode
}`}
        />
        <p>
          Next, I made a basic config file that holds all the relevant settings
          and information that my homepage would need, such as how far away the
          objects should be from the "player", where the floor is, how much
          space there should be between panels, and more.
        </p>
        <Highlight
          language="javascript"
          startingLineNumber={3}
          content={`export const scrollConfig = {
  offsetFromPlayer: 8,
  spacing: 40,
  floorPos: -4.5,
  scrollSpeed: 0.025
  showHideDepth: 0.35,
  totalScrollHeight: () =>
    (scrollConfig.spacing *
      data.reduce((acc, current) => acc + (current.featured ? 1 : 0), 0) -
      40) /
    scrollConfig.scrollSpeed,
  pixelsPerProject: () => scrollConfig.spacing / scrollConfig.scrollSpeed,
}`}
        />
        <p>
          Above you can see I also calculated the necessary scroll height based
          on the spacing of each element, the number of items that are featured,
          and a modified based on how quickly the items scroll in the 3d world.
          Then, with this information I directly modified the homepage div to
          set it&apos;s height to the config.totalScrollHeight():
        </p>
        <p>
          Creating this config file really helps to simplify development as all
          my logic pulls from these values, thus keeping everything in sync
          (such as my page height, and the components used to render the 3D
          world)
        </p>
        <p>
          The next step was to create a basic hook that keeps track of the
          scroll position (pretty standard stuff).
        </p>
        <Highlight
          language="tsx"
          startingLineNumber={11}
          content={`export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  // set the initial scroll position of the projects + watch for scroll
  useEffect(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return scrollPosition
}`}
        />
        <p>
          From there, I just needed to apply this scroll position to my 3D "div"
          that contained all of the projects on the homepage. React-Three-Fiber
          has a handy dandy hook that lets me hook into the 3d render pipeline
          and modify values quite easily. Thus, all I needed to do{" "}
          <a
            href="https://github.com/dustinHyden/portfolio/blob/main/app/3d/ScrollWorld.tsx"
            target="_blank"
          >
            was the following:
          </a>
        </p>
        <Highlight
          language="javascript"
          startingLineNumber={11}
          content={`const { width } = useWindowDimensions()
const group = useRef<THREE.Group>(null)
const scrollPosition = useScrollPosition()

const featuredItems = data.filter((item) => item.featured)

useFrame((state, delta) => {
  if (group.current) {
    return group.current.position.set(
      config.offsetFromPlayer + (width >= 768 ? 6 : 0),
      config.floorPos,
      -scrollPosition * config.scrollSpeed
    )
  }
})`}
        />
        <p>
          To explain the above, I also coded a useWindowDimensions hook so that
          I could move the world relative to the screen width (woo for
          responsiveness 🎉). Then I needed a ref to the object so I called this
          "group" since Three JS refers to groups of objects as "group".
          Finally, ThreeJS&apos; "useFrame" hook allowed me to modify the 3D.
          So, I calculated the X, Y, and Z positions based on my config settings
          and saved scroll position, and injected them into the useFrame hook.
        </p>
        <h2>So What About The Word Effect?</h2>
        <p>
          Having the words appear or disappear has nothing to do with the 3d
          world, and instead relies entirely on my config file. Based on the
          scroll position, I determine if any of the featured projects are "in
          frame", and if so, I show their information. You can view the entire{" "}
          <a
            href="https://github.com/dustinHyden/portfolio/blob/main/app/components/WorldOverlay.tsx"
            target="_blank"
          >
            WorldOverlay.tsx
          </a>{" "}
          file here.
        </p>
        <h2>Mouse Effect</h2>
        <p>
          I typically recommend against customizing the mouse for a traditional
          website. It breaks the normal flow that users are familiar with. But,
          since this is a portfolio I thought I should customize every aspect
          (such as the scroll bar and mouse) to showcase what I "can" do.
        </p>
        <Highlight
          language="javascript"
          startingLineNumber={11}
          content={`export default function Mouse() {
  const { x, y } = useMousePosition()
  const { mouse, threeMouse } = useMouseContext()
  const doEffect = threeMouse || mouse?.nodeName === "A" || mouse?.closest("a")

  return (
    <span
      className={\`\${styles.mouse} \${doEffect ? styles.hovering : ""}\`}
      style={{ transform: \`translate(\${x}px, \${y}px)\` }}
    />
  )
}`}
        />
        <p>
          The snippet above shows all the logic necessary to have the mouse
          effect work. I look at where my mouse is, determine if I&apos;m
          hovering over anything clickable, and then apply a class based on that
          logic. The rest is CSS.
        </p>
        <h2 className="h1">Final Comments</h2>
        <p>
          There was a lot of small details that went into this project that I
          haven&apos;t even begun to cover. My favourite detail is simply that
          you can click the 3d character on the homepage and he will react to
          being clicked! I even implemented a cross-fade animation effect so
          that the animations fade into each other, rather than appearing like
          an old Gameboy Colour game.
        </p>
        <p>
          Here&apos;s the{" "}
          <a href="https://github.com/dustinHyden/portfolio" target="_blank">
            full repo on GitHub
          </a>{" "}
          once again, take a look through it. Once you&apos;re ready, reach out
          and let&apos;s discuss how I can help you.
        </p>
      </div>
    )
  },
}

export default behindTheScenesData
