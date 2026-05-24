"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

export function CallToActionSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="bg-garden-green-800 py-20 px-4 md:px-8 text-white text-center">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Ready to Transform Your Outdoor Space?</h2>
        <p className="text-lg md:text-xl opacity-90 mb-10">
          Let's discuss your vision and bring it to life with our innovative garden design solutions.
        </p>
        <Link href="/contact" passHref>
<<<<<<< HEAD
          <Button className="bg-garden-green-500 hover:bg-garden-green-600 text-white px-10 py-4 rounded-full text-xl shadow-lg transition-colors">
=======
          <Button className="bg-garden-green-500 hover:bg-garden-green-600 text-white px-10 h-16 rounded-full text-xl shadow-lg transition-colors font-bold">
>>>>>>> master
            Schedule a Consultation
          </Button>
        </Link>
      </div>
    </section>
  )
}
