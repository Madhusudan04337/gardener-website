import { Leaf, Scissors, Droplets, Sprout, TreeDeciduous, Home } from "lucide-react"
import { SectionHeader } from "./section-header"

export function ServicesSection() {
  const services = [
    {
      icon: <Leaf className="w-12 h-12 text-gardener-accent-green" />,
      title: "Landscaping",
      description: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    },
    {
      icon: <Scissors className="w-12 h-12 text-gardener-accent-green" />,
      title: "Pruning Plants",
      description: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    },
    {
      icon: <Droplets className="w-12 h-12 text-gardener-accent-green" />,
      title: "Irrigation & Drainage",
      description: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    },
    {
      icon: <Sprout className="w-12 h-12 text-gardener-accent-green" />,
      title: "Garden Maintenance",
      description: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    },
    {
      icon: <TreeDeciduous className="w-12 h-12 text-gardener-accent-green" />,
      title: "Green Technology",
      description: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    },
    {
      icon: <Home className="w-12 h-12 text-gardener-accent-green" />,
      title: "Urban Gardening",
      description: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader subHeading="Our Services" mainHeading="Services That We Offer For You" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-8 text-center flex flex-col items-center group">
              <div className="mb-6 transition-transform duration-300 group-hover:-translate-y-2">{service.icon}</div>
              <h3 className="text-xl font-bold text-gardener-dark-green mb-3">{service.title}</h3>
              <p className="text-gardener-text-gray mb-4">{service.description}</p>
              <div className="w-10 h-10 rounded-full bg-gardener-accent-green flex items-center justify-center text-white text-2xl font-bold transition-all duration-300 group-hover:bg-gardener-dark-green">
                +
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
