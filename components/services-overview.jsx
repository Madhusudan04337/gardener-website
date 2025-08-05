"use client"

import { LeafyGreen, Building2, Home, Droplets, TreePine, Lightbulb } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useInView } from "@/hooks/use-in-view"

export function ServicesOverview() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const services = [
    {
      icon: <LeafyGreen className="w-10 h-10 text-garden-green-600" />,
      title: "Residential Gardens",
      description: "Personalized designs for private homes, creating serene and beautiful sanctuaries.",
    },
    {
      icon: <Building2 className="w-10 h-10 text-garden-green-600" />,
      title: "Commercial & Public Spaces",
      description: "Transforming campuses, parks, and urban areas into vibrant, functional landscapes.",
    },
    {
      icon: <Home className="w-10 h-10 text-garden-green-600" />,
      title: "Sustainable Landscaping",
      description: "Eco-friendly solutions, native planting, and water-wise designs.",
    },
    {
      icon: <Droplets className="w-10 h-10 text-garden-green-600" />,
      title: "Irrigation & Water Features",
      description: "Efficient systems and captivating water elements for tranquility.",
    },
    {
      icon: <TreePine className="w-10 h-10 text-garden-green-600" />,
      title: "Hardscape Integration",
      description: "Designing pathways, patios, and structural elements that complement nature.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-garden-green-600" />,
      title: "Consultation & Planning",
      description: "Expert advice and detailed planning to bring your vision to life.",
    },
  ]

  return (
    <section className="py-16 bg-garden-green-50 px-4 md:px-8">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        <h2 className="text-sm font-semibold text-garden-green-600 uppercase tracking-wider text-center mb-3">
          Our Expertise
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-text-dark text-center mb-12">
          Comprehensive Garden Design Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center pb-4">
                <div className="p-4 rounded-full bg-garden-green-100 mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-text-dark">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-light">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
