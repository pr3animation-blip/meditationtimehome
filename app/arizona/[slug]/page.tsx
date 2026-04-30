import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/sections/page-hero"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { CtaBanner } from "@/components/sections/cta-banner"
import { JsonLd } from "@/components/seo/json-ld"
import { Breadcrumbs } from "@/components/seo/breadcrumbs"
import { siteConfig } from "@/config/navigation"
import { arizonaPages } from "@/config/site-data"
import {
  arizonaPageServiceSchema,
  buildMetaDescription,
  faqSchema,
  localBusinessSchema,
} from "@/lib/seo"

interface ArizonaPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return arizonaPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({
  params,
}: ArizonaPageProps): Promise<Metadata> {
  const { slug } = await params
  const page = arizonaPages.find((p) => p.slug === slug)
  if (!page) return {}

  const canonicalPath = `/arizona/${slug}`
  const metaDescription = buildMetaDescription(
    page.description,
    "Book your personalized session in Chandler, AZ today."
  )

  return {
    title: page.title,
    description: metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: page.title,
      description: metaDescription,
      url: canonicalPath,
      images: ["/opengraph-image"],
    },
  }
}

export default async function ArizonaPage({ params }: ArizonaPageProps) {
  const { slug } = await params
  const page = arizonaPages.find((p) => p.slug === slug)

  if (!page) notFound()

  return (
    <>
      <JsonLd
        id={`arizona-local-business-schema-${page.slug}`}
        data={localBusinessSchema(`/arizona/${page.slug}`, page.description)}
      />
      <JsonLd
        id={`arizona-service-schema-${page.slug}`}
        data={arizonaPageServiceSchema(page)}
      />
      {page.faqs && page.faqs.length > 0 && (
        <JsonLd
          id={`arizona-faq-schema-${page.slug}`}
          data={faqSchema(page.faqs)}
        />
      )}

      <Breadcrumbs
        id={`arizona-${page.slug}`}
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: page.title },
        ]}
      />

      <PageHero title={page.heading} subtitle={page.title} />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {page.description}
          </p>
        </div>
      </section>

      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="text-center font-serif text-3xl font-light tracking-tight md:text-4xl">
            Benefits
          </h2>
          <div className="mt-12">
            <FeatureGrid items={page.benefits} columns={2} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="font-serif text-2xl font-light md:text-3xl">
            About Victoria Enriquez
          </h2>
          <p className="mt-4 text-muted-foreground">
            Certified Practitioner of REIKI Energy, Sound Healing, and Tuning
            Fork sessions with background in the medical field and experience
            with healing past trauma &amp; healing modalities.
          </p>
          <div className="mt-6 space-y-1 text-sm text-muted-foreground">
            <p>{siteConfig.address}</p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.email}</p>
          </div>
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
            aria-label={`Book a session for ${page.title}`}
          >
            Book a Session
          </Button>
        </div>
      </section>

      {page.faqs && page.faqs.length > 0 && (
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-center font-serif text-3xl font-light tracking-tight md:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-10 space-y-4">
              {page.faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-xl border border-border/50 bg-card p-5 transition-colors open:border-primary/30"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-medium">
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className="text-2xl font-light text-muted-foreground transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  )
}
