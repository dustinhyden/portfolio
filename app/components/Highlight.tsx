"use client"
import SyntaxHighlighter from 'react-syntax-highlighter';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import styles from "./Highlight.module.css"

export default function Highlight({content, language = "javascript"}) {

  return (
    <SyntaxHighlighter language={language} style={atomOneLight} className={styles.highlight} showLineNumbers={true} wrapLines={true}>
      {content}
    </SyntaxHighlighter>
  )
}