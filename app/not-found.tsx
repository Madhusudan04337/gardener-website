import Link from "next/link"
import { TriangleAlert } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title="404 Error"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "#" },
          { label: "404 Error", href: "/404" },
        ]}
      />
      <main className="flex-grow flex flex-col items-center justify-center py-12 px-4 text-center">
        <TriangleAlert className="w-24 h-24 text-gardener-accent-green mb-6" />
        <h2 className="text-6xl md:text-8xl font-bold text-gardener-dark-green mb-4">404</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gardener-dark-green mb-6">Page Not Found</h3>
        <p className="text-gardener-text-gray max-w-md mb-8">
          {
            "We're sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?"
          }
        </p>
        <Link href="/" passHref>
<<<<<<< HEAD
          <Button className="bg-gardener-accent-green hover:bg-gardener-dark-green text-white px-8 py-3 rounded-full text-lg">
=======
          <Button className="bg-gardener-accent-green hover:bg-gardener-dark-green text-white px-8 h-12 rounded-full text-lg font-semibold">
>>>>>>> master
            Go Back To Home
          </Button>
        </Link>
      </main>
    </div>
  )
}
