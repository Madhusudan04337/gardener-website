"use client"

import { useInView } from "@/hooks/use-in-view"
import { useCountingAnimation } from "@/hooks/use-counting-animation"

function CounterItem({ targetValue, label }) {
  const [ref, count] = useCountingAnimation(targetValue)

  return (
    <div ref={ref} className="flex flex-col items-center">
      <h3 className="text-5xl md:text-6xl font-bold mb-2">{count}</h3>
      <p className="text-lg text-gray-300">{label}</p>
    </div>
  )
}

export function CountersSection() {
  const counters = [
    { value: 1234, label: "Happy Clients" },
    { value: 987, label: "Garden Completed" },
    { value: 56, label: "Dedicated Staff" },
    { value: 23, label: "Awards Achieved" },
  ]

  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="relative py-16 px-4 md:px-8 overflow-hidden">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: `url('/placeholder.svg?height=400&width=1920')` }}
      ></div>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-garden-green-800 bg-opacity-70 z-0"></div>

      {/* Content */}
      <div
        ref={sectionRef}
        className={`relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white z-10 transition-all duration-1000 ease-out ${
          sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        {counters.map((counter, index) => (
          <CounterItem key={index} targetValue={counter.value} label={counter.label} />
        ))}
      </div>
    </section>
  )
}
