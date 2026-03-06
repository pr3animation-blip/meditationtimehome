import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FloatingCircle } from "@/components/animation/floating-circle"
import { ScrollReveal } from "@/components/animation/scroll-reveal"
import { siteConfig } from "@/config/navigation"

interface CtaBannerProps {
  heading?: string
  subtext?: string
  ctaText?: string
  ctaHref?: string
}

export function CtaBanner({
  heading = "Ready to Begin Your Healing Journey?",
  subtext = "Book a session with Victoria and experience the transformative power of energy healing.",
  ctaText = "Book a Session",
  ctaHref,
}: CtaBannerProps) {
  const href = ctaHref ?? siteConfig.calendlyUrl

  return (
    <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground md:py-20">
      <div className="absolute inset-0 opacity-10">
        <FloatingCircle className="absolute left-[20%] top-[20%] bg-white" size="md" />
        <FloatingCircle className="absolute bottom-[20%] right-[20%] bg-white" size="lg" speed="slow" />
      </div>
      <ScrollReveal className="relative z-10 mx-auto max-w-screen-2xl px-4 text-center md:px-8">
        <h2 className="font-serif text-3xl font-light tracking-tight md:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
          {subtext}
        </p>
        <Button
          size="lg"
          className="mt-8 bg-white/90 px-8 text-primary hover:bg-white"
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
      </ScrollReveal>
    </section>
  )
}
