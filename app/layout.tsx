import { Poppins } from "next/font/google"
import Footer from "./components/Footer"
import ClientWrapper from "./components/ClientWrapper"
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
        <ClientWrapper>{children}</ClientWrapper>
        <Footer />
      </body>
    </html>
  )
}
