"use client"

import { Leaf, Users, Lightbulb, Handshake } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useInView } from "@/hooks/use-in-view"

export function FeaturesGrid() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const features = [
    {
      icon: <Leaf className="w-10 h-10 text-garden-green-600" />,
      title: "Sustainable Design",
      description: "Creating eco-friendly landscapes that thrive with minimal environmental impact.",
    },
    {
      icon: <Users className="w-10 h-10 text-garden-green-600" />,
      title: "Expert Team",
      description: "Our certified designers bring creativity and precision to every project.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-garden-green-600" />,
      title: "Innovative Solutions",
      description: "Leveraging modern techniques for unique and functional outdoor spaces.",
    },
    {
      icon: <Handshake className="w-10 h-10 text-garden-green-600" />,
      title: "Client-Centric Approach",
      description: "Collaborating closely with you to bring your vision to life.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 px-4 md:px-8">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        {features.map((feature, index) => (
          <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center pb-4">
              <div className="p-4 rounded-full bg-garden-green-100 mb-4">{feature.icon}</div>
              <CardTitle className="text-xl font-bold text-text-dark">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-text-light">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
