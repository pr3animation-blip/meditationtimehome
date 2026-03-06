import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/sections/page-hero"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { CtaBanner } from "@/components/sections/cta-banner"
import { JsonLd } from "@/components/seo/json-ld"
import { siteConfig } from "@/config/navigation"
import { arizonaPages } from "@/config/site-data"
import { buildMetaDescription, localBusinessSchema } from "@/lib/seo"

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
            Fork sessions with background in psychology and holistic healing
            practices.
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

      <CtaBanner />
    </>
  )
}
