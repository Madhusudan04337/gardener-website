import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gardener-dark-green text-white py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Gardener</h3>
          <p className="text-gardener-text-gray mb-4">
            Innovative garden designers specializing in creating aesthetically pleasing and functional outdoor spaces.
          </p>
          <div className="flex gap-3">
            <Link href="#" aria-label="Facebook" className="text-white hover:text-gardener-accent-green">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-white hover:text-gardener-accent-green">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-white hover:text-gardener-accent-green">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-white hover:text-gardener-accent-green">
              <Instagram className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-gardener-text-gray hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gardener-text-gray hover:text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gardener-text-gray hover:text-white">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-gardener-text-gray hover:text-white">
                Our Projects
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-gardener-text-gray hover:text-white">
                Terms & Condition
              </Link>
            </li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
          <address className="not-italic space-y-2">
            <div className="flex items-start text-gardener-text-gray">
              <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
              <span>123 Street, New York, USA</span>
            </div>
            <div className="flex items-center text-gardener-text-gray">
              <Phone className="w-5 h-5 mr-2" />
              <Link href="tel:+0123456789" className="hover:text-white">
                +012 345 67890
              </Link>
            </div>
            <div className="flex items-center text-gardener-text-gray">
              <Mail className="w-5 h-5 mr-2" />
              <Link href="mailto:info@example.com" className="hover:text-white">
                info@example.com
              </Link>
            </div>
          </address>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
          <div className="flex items-center text-gardener-text-gray mb-2">
            <Clock className="w-5 h-5 mr-2" />
            <span>Monday - Friday</span>
          </div>
          <p className="text-gardener-text-gray mb-4">09:00 AM - 09:00 PM</p>
          <div className="flex items-center text-gardener-text-gray mb-2">
            <Clock className="w-5 h-5 mr-2" />
            <span>Saturday - Sunday</span>
          </div>
          <p className="text-gardener-text-gray">10:00 AM - 08:00 PM</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gardener-text-gray">
        <p>
          &copy; {new Date().getFullYear()} Gardener. All Rights Reserved. Designed By{" "}
          <Link href="#" className="text-white hover:underline">
            HTML Codex
          </Link>
        </p>
      </div>
    </footer>
  )
}
