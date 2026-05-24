"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

export function AboutUsSection({ showButton = true }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="py-16 px-4 md:px-8">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/placeholder.svg?height=500&width=600"
            alt="Garden designer at work"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-garden-green-600 uppercase tracking-wider mb-3">Our Philosophy</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-text-dark leading-tight mb-6">
            Crafting Harmony Between Nature & Design
          </h3>
          <p className="text-text-light text-lg mb-6">
            At InnovateGardens, we believe that outdoor spaces are an extension of living. Our designs blend natural
            beauty with functional aesthetics, creating environments that inspire, soothe, and connect people with
            nature. We specialize in transforming diverse areas—from bustling college campuses to serene public
            parks—into sustainable and vibrant landscapes.
          </p>
          <p className="text-text-light text-lg mb-8">
            Our approach integrates native flora, efficient water management, and thoughtful hardscape elements to
            deliver unique, low-maintenance, and environmentally responsible solutions.
          </p>
          {showButton && (
            <Link href="/about" passHref>
              <Button className="bg-earth-brown-400 hover:bg-earth-brown-500 text-white px-8 h-12 rounded-full text-lg shadow-md transition-colors font-semibold">
                Learn More About Us
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
