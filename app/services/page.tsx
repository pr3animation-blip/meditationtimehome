import type { Metadata } from "next"
import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  HandPrayerIcon,
  Yoga01Icon,
  MoonIcon,
  BrainIcon,
  HeartAddIcon,
  FlowerIcon,
  Yoga03Icon,
} from "@hugeicons/core-free-icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/animation/scroll-reveal"
import { FloatingCircle } from "@/components/animation/floating-circle"
import { PageHero } from "@/components/sections/page-hero"
import { CtaBanner } from "@/components/sections/cta-banner"
import { services, arizonaPages } from "@/config/site-data"
import { siteConfig } from "@/config/navigation"
import { buildMetaDescription } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Sound Healing, Reiki and Meditation Services",
  description: buildMetaDescription(
    "Explore Reiki, signature energy work, and sound bath sessions in Chandler, Arizona. Compare service options and reserve your preferred session with Victoria."
  ),
  alternates: {
    canonical: "/services",
  },
}

const serviceAnchors: Record<string, string> = {
  "1-hour-session-with-victoria": "reiki-session",
  "1-5-hour-signature-energy-session-by-victoria": "signature-session",
  "45-min-healing-sound-bath-by-victoria": "sound-bath",
}

const serviceIcons: Record<string, typeof HandPrayerIcon> = {
  reiki: HandPrayerIcon,
  energy: Yoga01Icon,
  sound: MoonIcon,
}

const specialtyIcons: Record<string, typeof BrainIcon> = {
  "anxiety-treatment-in-chandler": BrainIcon,
  "soundbath-session-in-chandler": MoonIcon,
  "reiki-energy-healing-session-in-chandler": HeartAddIcon,
  "chakra-healing-meditation-in-chandler": Yoga03Icon,
}

const modalities = [
  {
    name: "Body Rub Session",
    description:
      "Therapeutic massage using signature techniques. Beginning at the head, working through shoulders, scalp, face, and pressure points before progressing to arms, legs, and feet. Session concludes with back and neck work while face-down. You will feel my thumbs, and knuckles as well as heels or my palms, but nothing uncomfortable.",
  },
  {
    name: "Dermal Session",
    description:
      "Having your whole body scratched is one decadent royal experience. Using fingernails across the entire body without leaving physical marks — just traces of emotion. Stimulates the middle skin layer and requires relaxation and communication if sensitivity arises.",
  },
  {
    name: "Fingertip Session",
    description:
      "Light, feather-like touches across the skin to soothe the epidermis. Light as a feather moving across your skin. Clients may experience tickling sensations and awakened nerve endings.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Energy Flows Where the Attention Goes"
      />

      {/* Service Sections */}
      {services.map((service, index) => {
        const anchor = serviceAnchors[service.slug]
        const icon = serviceIcons[service.icon] ?? HandPrayerIcon
        const isSignature =
          service.slug === "1-5-hour-signature-energy-session-by-victoria"
        const isEven = index % 2 === 1

        const content = service.longDescription ?? service.description

        return (
          <section
            key={service.slug}
            id={anchor}
            className={`scroll-mt-20 py-20 md:py-28 ${isEven ? "bg-secondary/30" : ""}`}
          >
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              {/* Service number + icon */}
              <ScrollReveal className="mb-10 flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="font-serif text-7xl font-extralight tracking-tighter text-primary/10 md:text-8xl"
                >
                  0{index + 1}
                </span>
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10">
                  <HugeiconsIcon
                    icon={icon}
                    size={28}
                    className="text-primary"
                    aria-hidden="true"
                  />
                </div>
              </ScrollReveal>

              <div className="grid items-start gap-12 lg:grid-cols-[1fr_320px]">
                {/* Main content */}
                <ScrollReveal delay={100}>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge
                      variant="outline"
                      className="border-primary/30 text-primary"
                    >
                      {service.duration}
                    </Badge>
                    <Badge variant="secondary" className="font-semibold">
                      {service.price}
                    </Badge>
                  </div>

                  <h2 className="mt-5 font-serif text-3xl font-light tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-tight">
                    {service.name}
                  </h2>

                  <div className="mt-6 space-y-4">
                    {content.split("\n\n").map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Signature session modalities */}
                  {isSignature && (
                    <div className="mt-10">
                      <h3 className="font-serif text-xl font-medium md:text-2xl">
                        The Three Modalities
                      </h3>
                      <div className="mt-6 space-y-4">
                        {modalities.map((mod, mi) => (
                          <ScrollReveal key={mod.name} delay={200 + mi * 100}>
                            <div className="rounded-xl border border-border/50 bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                              <div className="flex items-center gap-3">
                                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 font-serif text-sm font-medium text-accent">
                                  {mi + 1}
                                </span>
                                <h4 className="font-serif text-lg font-medium">
                                  {mod.name}
                                </h4>
                              </div>
                              <p className="mt-3 pl-11 text-sm leading-relaxed text-muted-foreground">
                                {mod.description}
                              </p>
                            </div>
                          </ScrollReveal>
                        ))}
                      </div>
                      <p className="mt-4 text-sm text-muted-foreground/70 italic">
                        Or choose any single modality for a 30-minute focused
                        session.
                      </p>
                    </div>
                  )}
                </ScrollReveal>

                {/* Booking sidebar */}
                <ScrollReveal
                  delay={200}
                  className="lg:sticky lg:top-24"
                >
                  <div className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
                    <p className="text-center font-serif text-2xl font-light">
                      {service.price}
                    </p>
                    <p className="mt-1 text-center text-sm text-muted-foreground">
                      {service.duration} session
                    </p>
                    <Button
                      size="lg"
                      className="mt-6 w-full"
                      render={
                        <Link
                          href={service.calendlyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    >
                      Book Now
                    </Button>
                    <div className="mt-4 space-y-1 text-center text-xs text-muted-foreground">
                      <p>{siteConfig.phone}</p>
                      <p>{siteConfig.email}</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        )
      })}

      {/* Free Introductory Offer */}
      <section className="relative overflow-hidden bg-primary/5 py-20 md:py-28">
        <div className="absolute inset-0 opacity-[0.04]">
          <FloatingCircle
            className="absolute left-[10%] top-[30%] bg-primary"
            size="lg"
          />
          <FloatingCircle
            className="absolute bottom-[20%] right-[15%] bg-accent"
            size="md"
            speed="slow"
          />
        </div>
        <ScrollReveal className="relative z-10 mx-auto max-w-screen-2xl px-4 text-center md:px-8">
          <Badge variant="outline" className="border-primary/30 text-primary">
            Free Introductory Offer
          </Badge>
          <h2 className="mt-5 font-serif text-3xl font-light tracking-tight md:text-4xl lg:text-5xl">
            Tuning Fork Chakra Session
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">
            15 min. Very gentle, yet powerful modality to treat the body and mind
            that helps restore inner balance and assists in your sense of well
            being.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="text-sm text-muted-foreground line-through">
              US$75.00
            </span>
            <span className="text-3xl font-semibold text-primary">FREE</span>
          </div>
          <Button
            size="lg"
            className="mt-8 px-10"
            render={
              <Link
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Claim Your Free Session
          </Button>
        </ScrollReveal>
      </section>

      {/* Still Not Sure */}
      <section className="py-20 md:py-28">
        <ScrollReveal className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="font-serif text-3xl font-light tracking-tight md:text-4xl">
            Still Not Sure?
          </h2>
          <p className="mt-5 text-muted-foreground md:text-lg md:leading-relaxed">
            Your intuition always knows what you need and will direct you to
            what can fulfill these needs. I have heard many times over how
            amazing my energy session makes my clients feel. The human body has
            so much potential to relax its muscles, and to heal itself if we
            just give the human body enough time to heal.
          </p>
          <p className="mt-4 text-muted-foreground md:text-lg md:leading-relaxed">
            Come experience the difference that intentional healing energy can
            make in your life.
          </p>
          <Button
            size="lg"
            className="mt-8 px-8"
            render={
              <Link
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Book a Session
          </Button>
        </ScrollReveal>
      </section>

      {/* Healing Specialties */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <ScrollReveal className="text-center">
            <h2 className="font-serif text-3xl font-light tracking-tight md:text-4xl">
              Healing Specialties
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Learn more about our specialized healing approaches in Chandler,
              Arizona.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {arizonaPages.map((page, index) => {
              const icon =
                specialtyIcons[page.slug] ?? FlowerIcon

              return (
                <ScrollReveal key={page.slug} delay={index * 100}>
                  <Link
                    href={`/arizona/${page.slug}`}
                    className="group flex flex-col rounded-xl border border-border/50 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                      <HugeiconsIcon
                        icon={icon}
                        size={24}
                        className="text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-serif text-lg font-medium leading-snug">
                      {page.heading}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {page.description.length > 120
                        ? page.description.slice(0, 120) + "\u2026"
                        : page.description}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-colors group-hover:text-primary/80">
                      Learn more
                      <svg
                        className="ml-1 size-4 transition-transform group-hover:translate-x-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
