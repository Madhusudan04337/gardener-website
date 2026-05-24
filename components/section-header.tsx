interface SectionHeaderProps {
  subHeading: string
  mainHeading: string
  className?: string
}

export function SectionHeader({ subHeading, mainHeading, className }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <p className="inline-block px-3 py-1 mb-3 text-gardener-accent-green border-b-2 border-gardener-accent-green font-medium">
        {subHeading}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-gardener-dark-green leading-tight">{mainHeading}</h2>
    </div>
  )
}
