"use client"

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
      <Navbar />
      <Mouse />
      <Footer />
      {children}
    </main>
  )
}
