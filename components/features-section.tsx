import { CheckCircle, Users, Clock } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: <CheckCircle className="w-10 h-10 text-gardener-accent-green" />,
      title: "No Hidden Cost",
      description: "Clita erat ipsum lorem sit sed stet duo justo.",
    },
    {
      icon: <Users className="w-10 h-10 text-gardener-accent-green" />,
      title: "Dedicated Team",
      description: "Clita erat ipsum lorem sit sed stet duo justo.",
    },
    {
      icon: <Clock className="w-10 h-10 text-gardener-accent-green" />,
      title: "24/7 Available",
      description: "Clita erat ipsum lorem sit sed stet duo justo.",
    },
  ]

  return (
    <section className="relative z-20 -mt-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 bg-white shadow-lg rounded-lg p-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gardener-dark-green mb-2">{feature.title}</h3>
            <p className="text-gardener-text-gray">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
