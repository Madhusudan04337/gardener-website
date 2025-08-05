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
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant="outline"
            className="bg-gardener-accent-green text-white hover:bg-gardener-dark-green hover:text-white rounded-full px-6 py-2"
          >
            All
          </Button>
          <Button
            variant="outline"
            className="border-gardener-accent-green text-gardener-dark-green hover:bg-gardener-accent-green hover:text-white rounded-full px-6 py-2 bg-transparent"
          >
            Complete Projects
          </Button>
          <Button
            variant="outline"
            className="border-gardener-accent-green text-gardener-dark-green hover:bg-gardener-accent-green hover:text-white rounded-full px-6 py-2 bg-transparent"
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
              <div className="absolute inset-0 bg-gardener-dark-green bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Link href="#" className="text-white text-lg font-bold">
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
