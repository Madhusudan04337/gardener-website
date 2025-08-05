"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

export function PortfolioPreview() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const projects = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "College Campus Landscaping",
      title: "University Green Spaces",
      category: "Institutional",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Sustainable Urban Garden",
      title: "Eco-Urban Oasis",
      category: "Public",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Residential Backyard Garden",
      title: "Serene Backyard Retreat",
      category: "Residential",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        <h2 className="text-sm font-semibold text-garden-green-600 uppercase tracking-wider text-center mb-3">
          Our Work
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-text-dark text-center mb-12">Inspiring Transformations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg group">
              <Image
                src={project.src || "/placeholder.svg"}
                alt={project.alt}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6 bg-white">
                <p className="text-sm text-garden-green-600 font-semibold mb-1">{project.category}</p>
                <h4 className="text-xl font-bold text-text-dark mb-2">{project.title}</h4>
                <Link href="/portfolio" className="text-garden-green-500 hover:underline text-sm font-medium">
                  View Project &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/portfolio" passHref>
            <Button className="bg-garden-green-500 hover:bg-garden-green-600 text-white px-8 py-3 rounded-full text-lg shadow-md transition-colors">
              Explore All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
