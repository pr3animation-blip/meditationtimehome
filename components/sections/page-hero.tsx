import { HeroEntrance } from "@/components/animation/hero-entrance"

interface PageHeroProps {
  title: string
  subtitle?: string
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/50 py-16 md:py-24">
      <div className="hero-gradient absolute inset-0 opacity-50" />
      <div className="relative z-10 mx-auto max-w-screen-2xl px-4 text-center md:px-8">
        <HeroEntrance index={0}>
          <h1 className="font-serif text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
        </HeroEntrance>
        {subtitle && (
          <HeroEntrance index={1}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {subtitle}
            </p>
          </HeroEntrance>
        )}
      </div>
    </section>
  )
}
