import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-text-dark text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About Us */}
        <div>
          <h3 className="text-2xl font-extrabold text-garden-green-500 mb-6">InnovateGardens</h3>
          <p className="text-gray-400 mb-6">
            Specializing in creating aesthetically pleasing and functional outdoor spaces with a focus on sustainability
            and innovation.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-garden-green-500 transition-colors"
            >
              <Facebook className="w-6 h-6" />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-gray-400 hover:text-garden-green-500 transition-colors">
              <Twitter className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-garden-green-500 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-garden-green-500 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/about" className="text-gray-400 hover:text-garden-green-500 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-400 hover:text-garden-green-500 transition-colors">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-gray-400 hover:text-garden-green-500 transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-garden-green-500 transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-400 hover:text-garden-green-500 transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-6">Contact Info</h3>
          <address className="not-italic space-y-3">
            <div className="flex items-start text-gray-400">
              <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-garden-green-500" />
              <span>123 Green Valley Rd, Garden City, GA 30303</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Phone className="w-5 h-5 mr-3 text-garden-green-500" />
              <Link href="tel:+1234567890" className="hover:text-garden-green-500 transition-colors">
                +1 (234) 567-890
              </Link>
            </div>
            <div className="flex items-center text-gray-400">
              <Mail className="w-5 h-5 mr-3 text-garden-green-500" />
              <Link href="mailto:info@innovategardens.com" className="hover:text-garden-green-500 transition-colors">
                info@innovategardens.com
              </Link>
            </div>
          </address>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-6">Newsletter</h3>
          <p className="text-gray-400 mb-4">Stay updated with our latest projects and green tips.</p>
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="Your email"
              className="flex-grow bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 rounded-md focus:border-garden-green-500"
            />
            <Button
              type="submit"
              className="bg-garden-green-500 hover:bg-garden-green-600 text-white rounded-md transition-colors"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} InnovateGardens. All rights reserved.</p>
      </div>
    </footer>
  )
}
