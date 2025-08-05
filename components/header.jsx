import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="w-full bg-white shadow-sm py-4 px-4 md:px-8 flex items-center justify-between sticky top-0 z-50">
      <Link href="/" className="text-3xl font-extrabold text-garden-green-800">
        InnovateGardens
      </Link>
      <nav className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-text-dark hover:text-garden-green-600 font-medium transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-text-dark hover:text-garden-green-600 font-medium transition-colors">
          About Us
        </Link>
        <Link href="/services" className="text-text-dark hover:text-garden-green-600 font-medium transition-colors">
          Services
        </Link>
        <Link href="/portfolio" className="text-text-dark hover:text-garden-green-600 font-medium transition-colors">
          Portfolio
        </Link>
        <Link href="/contact" className="text-text-dark hover:text-garden-green-600 font-medium transition-colors">
          Contact
        </Link>
        <Button className="bg-garden-green-600 hover:bg-garden-green-700 text-white px-6 py-2 rounded-full shadow-md transition-colors">
          Get a Quote
        </Button>
      </nav>
      <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
        <Menu className="w-6 h-6 text-text-dark" />
      </Button>
    </header>
  )
}
