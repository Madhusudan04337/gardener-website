import { PageHero } from "@/components/page-hero"
import { ProjectsSection } from "@/components/projects-section" // Reusing the section from homepage

export const metadata = {
  title: "Our Portfolio - InnovateGardens",
  description: "View our stunning portfolio of completed garden design and landscaping projects.",
}

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        title="Our Portfolio"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/portfolio" },
        ]}
        backgroundImage="/placeholder.svg?height=400&width=1920"
      />
      <ProjectsSection /> {/* This section can be enhanced with more projects and filtering */}
    </main>
  )
}
