"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useCallback, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Define content for each slide (text only, background image will be static for parallax)
const slidesContent = [
  {
    title: "Transforming Spaces, Cultivating Dreams",
    description:
      "Innovative garden designers creating vibrant, eco-friendly, and inspiring outdoor environments for colleges, public spaces, and private residences.",
  },
  {
    title: "Sustainable Solutions for Urban Oases",
    description:
      "Designing eco-conscious landscapes that thrive in urban settings, promoting biodiversity and water efficiency.",
  },
  {
    title: "Crafting Your Personal Sanctuary",
    description: "Creating bespoke residential gardens that reflect your style and provide a serene escape.",
  },
  {
    title: "Enhancing Public & Institutional Grounds",
    description:
      "Expert landscaping for large-scale projects, from college campuses to community parks, fostering well-being.",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const parallaxRef1 = useRef(null)
  const parallaxRef2 = useRef(null)
  const parallaxRef3 = useRef(null)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slidesContent.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slidesContent.length) % slidesContent.length)
  }, [])

  const currentSlideData = slidesContent[currentSlide]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (parallaxRef1.current) {
        parallaxRef1.current.style.transform = `translateY(${scrollY * 0.1}px)` // Slowest
      }
      if (parallaxRef2.current) {
        parallaxRef2.current.style.transform = `translateY(${scrollY * 0.3}px)` // Medium
      }
      if (parallaxRef3.current) {
        parallaxRef3.current.style.transform = `translateY(${scrollY * 0.5}px)` // Fastest
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden flex items-center justify-center text-center">
      {/* Parallax Background Layers */}
      <div
        ref={parallaxRef1}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/placeholder.svg?height=700&width=1920')` }}
      ></div>
      <div
        ref={parallaxRef2}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/placeholder.svg?height=700&width=1920')` }}
      ></div>
      <div
        ref={parallaxRef3}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/placeholder.svg?height=700&width=1920')` }}
      ></div>

      {/* Overlay and Content */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white z-10 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          {currentSlideData.title}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-8 opacity-90">{currentSlideData.description}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/portfolio" passHref>
<<<<<<< HEAD
            <Button className="bg-garden-green-500 hover:bg-garden-green-600 text-white px-8 py-3 rounded-full text-lg shadow-lg transition-colors">
=======
            <Button className="bg-garden-green-500 hover:bg-garden-green-600 text-white px-8 h-14 rounded-full text-lg shadow-lg transition-colors font-semibold">
>>>>>>> master
              View Our Portfolio
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button
              variant="outline"
<<<<<<< HEAD
              className="border-2 border-white text-white hover:bg-white hover:text-garden-green-700 px-8 py-3 rounded-full text-lg shadow-lg transition-colors bg-transparent"
=======
              className="border-2 border-white text-white hover:bg-white hover:text-garden-green-700 px-8 h-14 rounded-full text-lg shadow-lg transition-colors bg-transparent font-semibold"
>>>>>>> master
            >
              Get a Free Consultation
            </Button>
          </Link>
        </div>
      </div>
      {/* Carousel Navigation Buttons (for text content) */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white hover:bg-opacity-20"
        aria-label="Previous slide"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-8 h-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white hover:bg-opacity-20"
        aria-label="Next slide"
        onClick={nextSlide}
      >
        <ChevronRight className="w-8 h-8" />
      </Button>
    </section>
  )
}
