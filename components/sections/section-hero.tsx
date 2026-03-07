import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { HeroEntrance } from "@/components/animation/hero-entrance"
import { FloatingCircle } from "@/components/animation/floating-circle"
import { siteConfig } from "@/config/navigation"

interface SectionHeroProps {
  heading: string
  subheading?: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
}

export function SectionHero({
  heading,
  subheading,
  ctaText = "Book a Session",
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: SectionHeroProps) {
  const href = ctaHref ?? siteConfig.calendlyUrl

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      <Image
        src="/images/generated/hero-background.webp"
        alt=""
        fill
        priority
        aria-hidden="true"
        className="object-cover object-center opacity-80"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-background/42" />
      <div className="hero-gradient absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-background/38 to-background"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[18%] bottom-2 h-20 rounded-full bg-background/55 blur-3xl"
      />

      <FloatingCircle className="absolute left-[10%] top-[15%] bg-primary/5" />
      <FloatingCircle className="absolute bottom-[10%] right-[15%] bg-accent/5" size="lg" speed="slow" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <HeroEntrance index={0}>
          <h1 className="font-serif text-5xl font-light leading-tight tracking-tight md:text-6xl lg:text-7xl">
            {heading}
          </h1>
        </HeroEntrance>
        {subheading && (
          <HeroEntrance index={1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {subheading}
            </p>
          </HeroEntrance>
        )}
        <HeroEntrance index={2}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-primary px-8 text-primary-foreground hover:bg-primary/90"
              render={
                <Link
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                />
              }
            >
              {ctaText}
            </Button>
            {secondaryCtaText && secondaryCtaHref && (
              <Button
                variant="outline"
                size="lg"
                className="border-primary/20 px-8"
                render={<Link href={secondaryCtaHref} />}
              >
                {secondaryCtaText}
              </Button>
            )}
          </div>
        </HeroEntrance>
      </div>
    </section>
  )
}
