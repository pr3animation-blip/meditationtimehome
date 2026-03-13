import type { Metadata } from "next"
import { ScrollReveal } from "@/components/animation/scroll-reveal"
import { PageHero } from "@/components/sections/page-hero"
import { ContactForm } from "@/components/sections/contact-form"
import { LocationMap } from "@/components/sections/location-map"
import { Card, CardContent } from "@/components/ui/card"
import { JsonLd } from "@/components/seo/json-ld"
import { siteConfig } from "@/config/navigation"
import { buildMetaDescription, faqSchema, localBusinessSchema } from "@/lib/seo"

const faqItems = [
  {
    question: "Do I need experience with meditation or energy healing?",
    answer:
      "No prior experience is necessary. Victoria welcomes beginners and experienced practitioners alike. Each session is tailored to your comfort level and personal goals.",
  },
  {
    question: "How should I prepare for a session?",
    answer:
      "Hydrate well before your appointment, wear loose and comfortable clothing, and come with an open mind. Avoid heavy meals right before your session for the most comfortable experience.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Please provide at least 24 hours notice if you need to reschedule or cancel. This allows other clients the opportunity to book the time slot.",
  },
]

const contactDescription = buildMetaDescription(
  "Contact Meditation TIME Home in Chandler, Arizona to ask questions or schedule Reiki, meditation, and sound healing sessions with Victoria."
)

export const metadata: Metadata = {
  title: "Contact Us",
  description: contactDescription,
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`

  return (
    <>
      <JsonLd
        id="contact-local-business-schema"
        data={localBusinessSchema("/contact", contactDescription)}
      />
      <JsonLd id="contact-faq-schema" data={faqSchema(faqItems)} />

      <PageHero
        title="Get in Touch"
        subtitle="Send us a message or book a session"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* Row 1: Contact Form — centered, full width */}
          <ScrollReveal>
            <div className="mx-auto max-w-2xl">
              <h2 className="font-serif text-2xl font-light">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </ScrollReveal>

          {/* Row 2: Contact Info + Map side by side */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <ScrollReveal>
              <Card className="h-full border-border/50">
                <CardContent className="space-y-6 p-8">
                  <h3 className="font-serif text-xl font-medium">
                    Contact Information
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium">Phone</p>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        {siteConfig.address}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      View on Google Maps
                    </a>
                  </div>
                  <div className="flex gap-4 pt-2">
                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label="Facebook"
                    >
                      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    </a>
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label="Instagram"
                    >
                      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                    </a>
                    <a
                      href={siteConfig.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label="YouTube"
                    >
                      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                    </a>
                    <a
                      href={siteConfig.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label="Twitter"
                    >
                      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card className="h-full border-border/50">
                <CardContent className="space-y-4 p-6">
                  <h3 className="font-serif text-xl font-medium">
                    Find Us in Chandler
                  </h3>
                  <div className="overflow-hidden rounded-xl border border-border/60">
                    <LocationMap />
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Row 3: Additional info — 2-column grid */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <ScrollReveal>
              <Card className="h-full border-border/50">
                <CardContent className="p-8">
                  <h3 className="font-serif text-xl font-medium">
                    Come and Meet Me!
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Bringing joy to others lives brings me so much joy in MY
                    life. Promoting self love and mindfulness is a way I am
                    helpful. I look forward to meeting you and helping you on
                    your healing journey.
                  </p>
                  <p className="mt-2 text-sm font-medium">
                    — Victoria Enriquez
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card className="h-full border-border/50">
                <CardContent className="space-y-4 p-8">
                  <h3 className="font-serif text-xl font-medium">
                    What to Expect
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    When you reach out, Victoria typically responds within 24
                    hours. Whether you&apos;re booking your first session or
                    have questions about which healing modality is right for
                    you, she&apos;s happy to guide you. First-time clients
                    often start with a brief phone consultation to discuss
                    their goals and any areas they&apos;d like to focus on
                    during the session.
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Sessions are held at the Chandler, Arizona studio by
                    appointment. Walk-ins are not available — please book
                    ahead to reserve your time. Wear comfortable clothing and
                    arrive a few minutes early to settle in.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="h-full border-border/50">
                <CardContent className="space-y-4 p-8">
                  <h3 className="font-serif text-xl font-medium">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-3 text-sm">
                    {faqItems.map((item) => (
                      <div key={item.question}>
                        <p className="font-medium">{item.question}</p>
                        <p className="mt-1 text-muted-foreground">
                          {item.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card className="h-full border-border/50 border-dashed">
                <CardContent className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <div className="rounded-full bg-muted p-3">
                    <svg className="size-6 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-medium text-muted-foreground/70">
                    Coming Soon
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground/50">
                    More content on the way
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
