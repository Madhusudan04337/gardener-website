import Image from "next/image"
import Link from "next/link"

export function PageHero({ title, breadcrumbs, backgroundImage = "/placeholder.svg?height=400&width=1920" }) {
  return (
    <section className="relative w-full h-[250px] md:h-[300px] overflow-hidden">
      <Image
        src={backgroundImage || "/placeholder.svg"}
        alt="Background image of garden plants"
        fill
        quality={90}
        className="z-0 object-cover"
      />
      <div className="absolute inset-0 bg-garden-green-800 bg-opacity-70 flex flex-col items-center justify-center text-white z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">{title}</h1>
        <nav aria-label="breadcrumb">
          <ol className="flex items-center space-x-2 text-lg">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.label} className="flex items-center">
                <Link href={crumb.href} className="hover:underline">
                  {crumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  )
}
