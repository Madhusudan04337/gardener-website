import Link from "next/link"
import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-gardener-dark-green text-white py-2 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between text-sm">
      <div className="flex items-center gap-4 mb-2 md:mb-0">
        <Link href="tel:+0123456789" className="flex items-center hover:underline">
          <Phone className="w-4 h-4 mr-1" />
          <span>+012 345 6789</span>
        </Link>
        <Link href="mailto:info@example.com" className="flex items-center hover:underline">
          <Mail className="w-4 h-4 mr-1" />
          <span>info@example.com</span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <span className="mr-2">Follow Us:</span>
        <div className="flex gap-3">
          <Link href="#" aria-label="Facebook" className="hover:text-gray-300">
            <Facebook className="w-4 h-4" />
          </Link>
          <Link href="#" aria-label="Twitter" className="hover:text-gray-300">
            <Twitter className="w-4 h-4" />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="hover:text-gray-300">
            <Linkedin className="w-4 h-4" />
          </Link>
          <Link href="#" aria-label="Instagram" className="hover:text-gray-300">
            <Instagram className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
