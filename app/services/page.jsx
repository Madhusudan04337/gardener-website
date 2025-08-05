import { PageHero } from "@/components/page-hero"
import { ServicesOverview } from "@/components/services-overview" // Reusing the section from homepage
import { CallToActionSection } from "@/components/call-to-action-section" // To encourage contact

export const metadata = {
  title: "Our Services - InnovateGardens",
  description: "Explore the comprehensive range of garden design and landscaping services offered by InnovateGardens.",
}

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Our Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
        backgroundImage="/placeholder.svg?height=400&width=1920"
      />
      <ServicesOverview /> {/* This section can be expanded with more details for each service */}
      <CallToActionSection /> {/* Encourage users to get a quote */}
    </main>
  )
}
