import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/animation/scroll-reveal"
import { SectionHero } from "@/components/sections/section-hero"
import { ServiceCard } from "@/components/sections/service-card"
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel"
import { BookCard } from "@/components/sections/book-card"
import { BlogPreviewCard } from "@/components/sections/blog-preview-card"
import { CtaBanner } from "@/components/sections/cta-banner"
import { services, testimonials, books } from "@/config/site-data"
import { blogPosts } from "@/config/blog-data"
import { siteConfig } from "@/config/navigation"
import { JsonLd } from "@/components/seo/json-ld"
import { buildMetaDescription, localBusinessSchema } from "@/lib/seo"

const homeDescription = buildMetaDescription(
  "Experience personalized Reiki, meditation, and sound healing sessions with Victoria Enriquez in Chandler, Arizona."
)

export const metadata: Metadata = {
  title: "Sound Healing and Reiki in Chandler, AZ",
  description: homeDescription,
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <>
      <JsonLd
        id="homepage-local-business-schema"
        data={localBusinessSchema("/", homeDescription)}
      />

      {/* Hero */}
      <SectionHero
        heading="Energy Flows Where the Attention Goes"
        subheading="Meditation &middot; Reiki &middot; Sound Healing &middot; Energy Sessions"
        ctaText="Book a Session"
        secondaryCtaText="Explore Services"
        secondaryCtaHref="/services"
      />

      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="relative mx-auto aspect-[16/9] max-w-5xl overflow-hidden rounded-2xl border border-border/60 shadow-sm">
            <Image
              src="/images/generated/home-intro-healing.webp"
              alt="Healing and meditation studio atmosphere at Meditation TIME Home in Chandler, Arizona"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1120px"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="font-serif text-2xl font-light leading-relaxed text-foreground/80 italic md:text-3xl">
              &ldquo;Guide me and heal me so I may be of greater service to
              others&rdquo;
            </p>
            <p className="mt-6 text-muted-foreground">
              Most of my life I have worked in the medical field. I am grateful
              on my life journey and am so proud that no matter what I have
              always been true to myself and faithful to my intuition. I embrace
              meditation and desire to help more people learn how to meditate or
              to strengthen their meditation practice.
            </p>
            <Button
              variant="outline"
              className="mt-8"
              render={<Link href="/about" />}
            >
              Learn More About Victoria
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <ScrollReveal className="text-center">
            <h2 className="font-serif text-3xl font-light tracking-tight md:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Come meet me and select what modality you are drawn to.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <ScrollReveal key={service.slug} delay={index * 120} className="h-full">
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Book Promo */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-center font-serif text-3xl font-light tracking-tight md:text-4xl">
              From Victoria
            </h2>
            <div className="mt-12">
              <BookCard book={books[0]} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Special Offer */}
      <section className="bg-primary/5 py-16 md:py-24">
        <ScrollReveal className="mx-auto max-w-screen-2xl px-4 text-center md:px-8">
          <Badge variant="outline" className="border-primary/30 text-primary">
            Free Introductory Offer
          </Badge>
          <h2 className="mt-4 font-serif text-3xl font-light tracking-tight md:text-4xl">
            Tuning Fork Chakra Session
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            15 min. Very gentle, yet powerful modality to treat the body and mind
            that helps restore inner balance and assists in your sense of well
            being.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="text-sm text-muted-foreground line-through">
              US$75.00
            </span>
            <span className="text-2xl font-semibold text-primary">FREE</span>
          </div>
          <Button
            size="lg"
            className="mt-6 px-8"
            render={
              <Link
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            aria-label="Book a Free Tuning Fork Chakra Session"
          >
            Book Now
          </Button>
        </ScrollReveal>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel testimonials={testimonials} />

      {/* Blog Preview */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <ScrollReveal className="flex items-end justify-between">
            <div>
              <h2 className="font-serif text-3xl font-light tracking-tight md:text-4xl">
                From the Blog
              </h2>
              <p className="mt-2 text-muted-foreground">
                Get updated articles directly from the blog.
              </p>
            </div>
            <Button
              variant="outline"
              className="hidden md:inline-flex"
              render={<Link href="/blog" />}
            >
              View All Posts
            </Button>
          </ScrollReveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {latestPosts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 120} className="h-full">
                <BlogPreviewCard post={post} />
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" render={<Link href="/blog" />}>
              View All Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CtaBanner />
    </>
  )
}
