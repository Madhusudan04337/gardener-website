import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SectionHeader } from "./section-header"

export function TestimonialSection() {
  const testimonials = [
    {
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo.",
      name: "Client Name 1",
      profession: "Profession",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Client Name 2",
      profession: "Profession",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Client Name 3",
      profession: "Profession",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader subHeading="Testimonial" mainHeading="What Our Clients Say About Us!" />
        <div className="relative bg-white shadow-md rounded-lg p-8 md:p-12 text-center">
          {/* Testimonial content - assuming a single active testimonial for simplicity */}
          <p className="text-gardener-text-gray text-lg italic mb-8">{testimonials[0].text}</p>
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
              <Image
                src={testimonials[0].image || "/placeholder.svg"}
                alt={testimonials[0].name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h4 className="text-xl font-bold text-gardener-dark-green">{testimonials[0].name}</h4>
            <p className="text-gardener-text-gray">{testimonials[0].profession}</p>
          </div>

          {/* Navigation arrows for carousel */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-gardener-dark-green hover:bg-gray-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-gardener-dark-green hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
