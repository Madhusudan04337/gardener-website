import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"
import { SectionHeader } from "./section-header"

export function TeamSection() {
  const teamMembers = [
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Team Member 1",
      name: "Full Name",
      title: "Designation",
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Team Member 2",
      name: "Full Name",
      title: "Designation",
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Team Member 3",
      name: "Full Name",
      title: "Designation",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader subHeading="Our Team" mainHeading="Dedicated & Experienced Team Members" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden text-center group">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={member.src || "/placeholder.svg"}
                  alt={member.alt}
<<<<<<< HEAD
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
=======
                  fill
                  className="transition-transform duration-300 group-hover:scale-105 object-cover"
>>>>>>> master
                />
                <div className="absolute inset-0 bg-gardener-dark-green bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-3">
                    <Link href="#" aria-label="Facebook" className="text-white hover:text-gardener-accent-green">
                      <Facebook className="w-6 h-6" />
                    </Link>
                    <Link href="#" aria-label="Twitter" className="text-white hover:text-gardener-accent-green">
                      <Twitter className="w-6 h-6" />
                    </Link>
                    <Link href="#" aria-label="Instagram" className="text-white hover:text-gardener-accent-green">
                      <Instagram className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gardener-dark-green mb-1">{member.name}</h3>
                <p className="text-gardener-text-gray">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
