<<<<<<< HEAD
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
=======
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
  ]

  return (
    <header className="w-full bg-white shadow-sm py-3 px-3 sm:py-4 sm:px-8 flex items-center justify-between sticky top-0 z-50">
      <Link href="/" className="text-2xl md:text-3xl font-extrabold text-garden-green-800 whitespace-nowrap">
        InnovateGardens
      </Link>
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-text-dark hover:text-garden-green-600 font-medium transition-colors px-2 py-1 rounded-sm"
          >
            {link.label}
          </Link>
        ))}
        <Link href="/contact">
          <Button className="bg-garden-green-600 hover:bg-garden-green-700 text-white px-8 h-11 rounded-full shadow-md transition-colors font-semibold">
            Get a Quote
          </Button>
        </Link>
      </nav>

      {/* Mobile Nav */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
            <Menu className="w-6 h-6 text-text-dark" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[80vw] max-w-xs sm:w-[400px]">
          <nav className="flex flex-col gap-4 mt-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-text-dark hover:text-garden-green-600 transition-colors px-2 py-2 rounded-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="w-full">
              <Button className="bg-garden-green-600 hover:bg-garden-green-700 text-white px-8 h-11 rounded-full shadow-md transition-colors font-semibold w-full">
                Get a Quote
              </Button>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      {/* Responsive styles for nav and button alignment */}
      <style jsx>{`
        @media (max-width: 768px) {
          header {
            flex-direction: row;
            align-items: center;
          }
        }
      `}</style>
>>>>>>> master
    </header>
  )
}
