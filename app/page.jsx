import { HeroSection } from "@/components/hero-section"
import { FeaturesGrid } from "@/components/features-grid"
import { AboutUsSection } from "@/components/about-us-section"
import { CountersSection } from "@/components/counters-section"
import { ServicesOverview } from "@/components/services-overview"
import { PortfolioPreview } from "@/components/portfolio-preview"
import { CallToActionSection } from "@/components/call-to-action-section"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesGrid />
      <AboutUsSection />
      <CountersSection />
      <ServicesOverview />
      <PortfolioPreview />
      <CallToActionSection />
    </main>
  )
}
