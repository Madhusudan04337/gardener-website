"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowRight } from "lucide-react"
import { useState } from "react"

export function MainNav() {
  const [isPagesOpen, setIsPagesOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm py-4 px-4 md:px-8 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold text-gardener-dark-green">
        Gardener
      </Link>
      <div className="hidden md:flex items-center gap-6">
        <Link href="/" className="text-gardener-dark-green hover:text-gardener-accent-green font-medium">
          Home
        </Link>
        <Link href="/about" className="text-gardener-dark-green hover:text-gardener-accent-green font-medium">
          About
        </Link>
        <Link href="/services" className="text-gardener-dark-green hover:text-gardener-accent-green font-medium">
          Services
        </Link>
        <Link href="/projects" className="text-gardener-dark-green hover:text-gardener-accent-green font-medium">
          Projects
        </Link>
        <div className="relative">
          <Button
            variant="ghost"
            className="text-gardener-dark-green hover:text-gardener-accent-green font-medium flex items-center gap-1"
            onClick={() => setIsPagesOpen(!isPagesOpen)}
            aria-expanded={isPagesOpen}
            aria-haspopup="true"
          >
            Pages
            <ChevronDown className={`w-4 h-4 transition-transform ${isPagesOpen ? "rotate-180" : ""}`} />
          </Button>
          {isPagesOpen && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-40 z-10">
              <Link href="/features" className="block px-4 py-2 text-gardener-dark-green hover:bg-gray-100">
                Features
              </Link>
              <Link href="/team" className="block px-4 py-2 text-gardener-dark-green hover:bg-gray-100">
                Team
              </Link>
              <Link href="/testimonial" className="block px-4 py-2 text-gardener-dark-green hover:bg-gray-100">
                Testimonial
              </Link>
              <Link href="/404" className="block px-4 py-2 text-gardener-dark-green hover:bg-gray-100">
                404 Page
              </Link>
            </div>
          )}
        </div>
        <Link href="/contact" className="text-gardener-dark-green hover:text-gardener-accent-green font-medium">
          Contact
        </Link>
        <Button className="bg-gardener-accent-green hover:bg-gardener-dark-green text-white px-6 py-2 rounded-full flex items-center gap-2">
          Get A Quote
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
      {/* Mobile menu button would go here */}
    </nav>
  )
}
