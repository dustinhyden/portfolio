"use client"
import { Analytics } from "@vercel/analytics/react"
import Footer from "./Footer"
import Loader from "./Loader"
import Mouse from "./Mouse"
import Navbar from "./Navbar"

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="main-layout">
      <Navbar />
      <Mouse />
      <Loader />
      {children}
      <Analytics />
      <Footer />
    </main>
  )
}
