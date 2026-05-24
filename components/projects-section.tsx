import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "./section-header"

export function ProjectsSection() {
  const projects = [
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Garden landscaping project",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Urban garden design",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Residential garden",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Commercial landscape",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Sustainable garden",
    },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Public park design",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader subHeading="Our Projects" mainHeading="Some Of Our Wonderful Projects" />
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button
            variant="outline"
            className="bg-garden-green-500 text-white hover:bg-garden-green-700 hover:text-white rounded-full px-8 h-11 border-none font-semibold transition-all"

          >
            All
          </Button>
          <Button
            variant="outline"
            className="border-garden-green-500 text-garden-green-700 hover:bg-garden-green-500 hover:text-white rounded-full px-8 h-11 bg-transparent font-semibold transition-all"

          >
            Complete Projects
          </Button>
          <Button
            variant="outline"
            className="border-garden-green-500 text-garden-green-700 hover:bg-garden-green-500 hover:text-white rounded-full px-8 h-11 bg-transparent font-semibold transition-all"

          >
            Ongoing Projects
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-md group">
              <Image
                src={project.src || "/placeholder.svg"}
                alt={project.alt}
                width={400}
                height={300}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-garden-green-800 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Button variant="secondary" className="rounded-full font-bold px-6 h-10">
                  View Project
                </Button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
