import { CheckCircle, Users, Wrench } from "lucide-react"
import { SectionHeader } from "./section-header"

export function WhyChooseUsSection() {
  const reasons = [
    {
      icon: <CheckCircle className="w-12 h-12 text-gardener-accent-green" />,
      title: "100% Satisfaction",
      description: "Clita erat ipsum lorem sit sed stet duo justo.",
    },
    {
      icon: <Users className="w-12 h-12 text-gardener-accent-green" />,
      title: "Dedicated Team",
      description: "Clita erat ipsum lorem sit sed stet duo justo.",
    },
    {
      icon: <Wrench className="w-12 h-12 text-gardener-accent-green" />,
      title: "Modern Equipment",
      description: "Clita erat ipsum lorem sit sed stet duo justo.",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader subHeading="Why Choosing Us!" mainHeading="Few Reasons Why People Choosing Us!" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-8 text-center flex flex-col items-center">
              <div className="mb-6">{reason.icon}</div>
              <h3 className="text-xl font-bold text-gardener-dark-green mb-3">{reason.title}</h3>
              <p className="text-gardener-text-gray">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
