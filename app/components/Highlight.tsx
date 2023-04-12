"use client"
import SyntaxHighlighter from "react-syntax-highlighter"
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  atomOneLight,
  tomorrowNight,
} from "react-syntax-highlighter/dist/esm/styles/hljs"
import styles from "./Highlight.module.css"

export default function Highlight({ content, language = "javascript" }) {
  return (
    <SyntaxHighlighter
      language={language}
      style={tomorrowNight}
      className={styles.highlight}
      showLineNumbers={true}
      wrapLines={true}
    >
      {content}
    </SyntaxHighlighter>
  )
}
