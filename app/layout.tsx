import { Poppins } from "next/font/google"

import NavbarWrapper from "./components/NavbarWrapper"

import "./globals.css"

const poppins = Poppins({
  weight: ["100", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-primary",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <NavbarWrapper>{children}</NavbarWrapper>
      </body>
    </html>
  )
}
