import { PageHero } from "@/components/page-hero"
import { AboutUsSection } from "@/components/about-us-section" // Reusing the section from homepage
import { TeamSection } from "@/components/team-section" // Assuming you want a team section
import { TestimonialSection } from "@/components/testimonial-section" // Assuming you want testimonials
import { WhyChooseUsSection } from "@/components/why-choose-us-section" // Reusing from homepage

export const metadata = {
  title: "About Us - InnovateGardens",
  description: "Learn more about InnovateGardens, our philosophy, team, and commitment to sustainable garden design.",
}

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
        backgroundImage="/placeholder.svg?height=400&width=1920"
      />
      <AboutUsSection showButton={false} /> {/* This section can be expanded with more content */}
      <WhyChooseUsSection /> {/* Reusing the reasons why clients choose you */}
      <TeamSection /> {/* Display your team members */}
      <TestimonialSection /> {/* Showcase client testimonials */}
    </main>
  )
}
