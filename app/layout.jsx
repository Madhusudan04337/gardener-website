import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "InnovateGardens - Modern Garden Design",
  description:
    "Innovative garden designers creating vibrant, eco-friendly, and inspiring outdoor environments for colleges, public spaces, and private residences.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
