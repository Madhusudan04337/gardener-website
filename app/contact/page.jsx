import { PageHero } from "@/components/page-hero"
import { QuoteFormSection } from "@/components/quote-form-section"
import { MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Contact Us - InnovateGardens",
  description: "Get in touch with InnovateGardens for inquiries, consultations, or a free quote.",
}

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
        backgroundImage="/placeholder.svg?height=400&width=1920"
      />
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-text-dark mb-6">Get In Touch</h2>
            <p className="text-text-light mb-8">
              Have a question or ready to start your project? Reach out to us using the details below or fill out the
              form.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-garden-green-600 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-text-dark">Our Office</h4>
                  <p className="text-text-light">123 Green Valley Rd, Garden City, GA 30303</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-garden-green-600 mr-4" />
                <div>
                  <h4 className="font-semibold text-text-dark">Phone</h4>
                  <Link href="tel:+1234567890" className="text-text-light hover:underline">
                    +1 (234) 567-890
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-garden-green-600 mr-4" />
                <div>
                  <h4 className="font-semibold text-text-dark">Email</h4>
                  <Link href="mailto:info@innovategardens.com" className="text-text-light hover:underline">
                    info@innovategardens.com
                  </Link>
                </div>
              </div>
            </div>
            {/* Optional: Google Maps Embed */}
            <div className="mt-8 h-64 w-full bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2060000000003!2d-73.9875499!3d40.7484409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3b3b3b3%3A0x89c259a9b3b3b3b3!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></iframe>
            </div>
          </div>

          {/* Quote/Contact Form */}
          <QuoteFormSection />
        </div>
      </section>
    </main>
  )
}
