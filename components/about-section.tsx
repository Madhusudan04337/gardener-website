import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, Users, Wrench } from "lucide-react"
import { SectionHeader } from "./section-header"

export function AboutSection() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=500&width=600"
            alt="Person gardening"
<<<<<<< HEAD
            layout="fill"
            objectFit="cover"
            quality={90}
            className="rounded-lg"
=======
            fill
            quality={90}
            className="rounded-lg object-cover"
>>>>>>> master
          />
        </div>
        <div>
          <SectionHeader
            subHeading="About Us"
            mainHeading="We Make Your Home Like A Garden"
            className="text-left !mb-6"
          />
          <p className="text-gardener-text-gray mb-6">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum
            et lorem et sit, sed stet lorem sit clita duo justo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-gardener-accent-green" />
              <span className="text-gardener-dark-green font-medium">Award Winning</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-gardener-accent-green" />
              <span className="text-gardener-dark-green font-medium">Dedicated Team</span>
            </div>
            <div className="flex items-center gap-3">
              <Wrench className="w-6 h-6 text-gardener-accent-green" />
              <span className="text-gardener-dark-green font-medium">Modern Equipment</span>
            </div>
          </div>
          <Link href="/about" passHref>
<<<<<<< HEAD
            <Button className="bg-gardener-accent-green hover:bg-gardener-dark-green text-white px-8 py-3 rounded-full text-lg">
=======
            <Button className="bg-gardener-accent-green hover:bg-gardener-dark-green text-white px-8 h-12 rounded-full text-lg font-semibold">
>>>>>>> master
              Explore More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
