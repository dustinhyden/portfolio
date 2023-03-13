"use client"
import { MouseProvider } from "../contexts/MouseContext"
import Footer from "./Footer"
import Mouse from "./Mouse"
import Navbar from "./Navbar"

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="main-layout">
      <MouseProvider>
        <Navbar />
        <Mouse />
        {children}
        <Footer />
      </MouseProvider>
    </main>
  )
}
