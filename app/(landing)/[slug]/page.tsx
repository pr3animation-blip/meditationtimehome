import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/sections/page-hero"
import { JsonLd } from "@/components/seo/json-ld"
import { siteConfig } from "@/config/navigation"
import { services } from "@/config/site-data"
import {
  buildMetaDescription,
  localBusinessSchema,
  serviceSchema,
} from "@/lib/seo"

interface LandingPageProps {
  params: Promise<{ slug: string }>
}

const stillNotSure = {
  slug: "still-not-sure",
  name: "Still Not Sure?",
  description:
    "Your intuition always knows what you need and will direct you to what can fulfill these needs.",
  longDescription:
    "Your intuition always knows what you need and will direct you to what can fulfill these needs.\n\nI have heard many times over how amazing my energy session makes my clients feel. The human body has so much potential to relax its muscles, and to heal itself if we just give the human body enough time to heal.\n\nThe need to be touched. Being scratched over the whole body for any amount of time is truly heavenly. It connects to childhood comfort and nurturing through touch.\n\nCome experience the difference that intentional healing energy can make in your life.",
  price: "",
  duration: "",
  calendlyUrl: siteConfig.calendlyUrl,
  icon: "energy",
}

export async function generateStaticParams() {
  return [
    ...services.map((s) => ({ slug: s.slug })),
    { slug: "still-not-sure" },
  ]
}

export async function generateMetadata({
  params,
}: LandingPageProps): Promise<Metadata> {
  const { slug } = await params
  const service =
    slug === "still-not-sure"
      ? stillNotSure
      : services.find((s) => s.slug === slug)
  if (!service) return {}

  const canonicalPath = slug === "still-not-sure" ? "/still-not-sure" : `/${slug}`
  const metaDescription = buildMetaDescription(
    service.description,
    "Book your healing session in Chandler, AZ today."
  )

  return {
    title: service.name,
    description: metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: service.name,
      description: metaDescription,
      type: "website",
      url: canonicalPath,
      images: ["/opengraph-image"],
    },
  }
}

export default async function LandingPage({ params }: LandingPageProps) {
  const { slug } = await params
  const service =
    slug === "still-not-sure"
      ? stillNotSure
      : services.find((s) => s.slug === slug)

  if (!service) notFound()

  const content = service.longDescription ?? service.description

  return (
    <>
      {slug !== "still-not-sure" && (
        <JsonLd
          id={`service-schema-${service.slug}`}
          data={serviceSchema(service)}
        />
      )}
      <JsonLd
        id={`service-local-business-schema-${service.slug}`}
        data={localBusinessSchema(
          slug === "still-not-sure" ? "/still-not-sure" : `/${slug}`,
          service.description
        )}
      />

      <PageHero title={service.name} subtitle={service.duration ? `${service.duration} ${service.price ? `· ${service.price}` : ""}` : undefined} />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          {service.imageSrc && (
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-xl border border-border/60">
              <Image
                src={service.imageSrc}
                alt={service.imageAlt ?? `${service.name} image`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 768px"
                priority
              />
            </div>
          )}
          <div className="prose prose-lg mx-auto max-w-none">
            {content.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Signature session modalities */}
          {slug === "1-5-hour-signature-energy-session-by-victoria" && (
            <div className="mt-12 space-y-8">
              <h2 className="font-serif text-2xl font-light">
                The Three Modalities
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-border/50 bg-card p-6">
                  <h3 className="font-serif text-lg font-medium">
                    Body Rub Session
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Therapeutic massage using signature techniques. Beginning at
                    the head, working through shoulders, scalp, face, and
                    pressure points before progressing to arms, legs, and feet.
                    Session concludes with back and neck work while face-down.
                    You will feel my thumbs, and knuckles as well as heels or my
                    palms, but nothing uncomfortable.
                  </p>
                </div>
                <div className="rounded-xl border border-border/50 bg-card p-6">
                  <h3 className="font-serif text-lg font-medium">
                    Dermal Session
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Having your whole body scratched is one decadent royal
                    experience. Using fingernails across the entire body without
                    leaving physical marks — just traces of emotion. Stimulates
                    the middle skin layer and requires relaxation and
                    communication if sensitivity arises.
                  </p>
                </div>
                <div className="rounded-xl border border-border/50 bg-card p-6">
                  <h3 className="font-serif text-lg font-medium">
                    Fingertip Session
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Light, feather-like touches across the skin to soothe the
                    epidermis. Light as a feather moving across your skin.
                    Clients may experience tickling sensations and awakened nerve
                    endings.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <Button
              size="lg"
              className="px-8"
              render={
                <Link
                  href={service.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              aria-label={`Book ${service.name}`}
            >
              Book Now
            </Button>
            <div className="text-sm text-muted-foreground">
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.email}</p>
            </div>
          </div>

          {/* Other Services */}
          {slug !== "still-not-sure" && (
            <div className="mt-16 border-t border-border pt-12">
              <h2 className="text-center font-serif text-2xl font-light">
                Explore Other Services
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {services
                  .filter((s) => s.slug !== slug)
                  .map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}`}
                      className="rounded-xl border border-border/50 bg-card p-5 transition-colors hover:border-primary/30"
                    >
                      <p className="font-serif text-lg font-medium">{s.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {s.duration} · {s.price}
                      </p>
                    </Link>
                  ))}
                <Link
                  href="/still-not-sure"
                  className="rounded-xl border border-border/50 bg-card p-5 transition-colors hover:border-primary/30"
                >
                  <p className="font-serif text-lg font-medium">Still Not Sure?</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Let your intuition guide you
                  </p>
                </Link>
              </div>
              <p className="mt-6 text-center text-sm text-muted-foreground">
                <Link href="/services" className="underline underline-offset-4 hover:text-primary">
                  View all services
                </Link>
              </p>
            </div>
          )}

          {/* Still Not Sure back-link */}
          {slug === "still-not-sure" && (
            <div className="mt-16 border-t border-border pt-12 text-center">
              <h2 className="font-serif text-2xl font-light">
                Ready to Explore?
              </h2>
              <p className="mt-2 text-muted-foreground">
                Browse our full range of healing services to find the right fit for you.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button variant="outline" render={<Link href="/services" />}>
                  View All Services
                </Button>
                <Button variant="outline" render={<Link href="/about" />}>
                  About Victoria
                </Button>
                <Button variant="outline" render={<Link href="/contact" />}>
                  Contact Us
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
