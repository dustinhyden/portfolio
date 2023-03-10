"use client"
import Navbar from "./Navbar"

export default function NavbarWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="main-layout">
      <Navbar />
      {children}
    </main>
  )
}
