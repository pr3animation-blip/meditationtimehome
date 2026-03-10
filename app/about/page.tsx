import type { Metadata } from "next"
import Image from "next/image"
import { ScrollReveal } from "@/components/animation/scroll-reveal"
import { PageHero } from "@/components/sections/page-hero"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { CtaBanner } from "@/components/sections/cta-banner"
import { servicesAddressed } from "@/config/site-data"
import { buildMetaDescription } from "@/lib/seo"

export const metadata: Metadata = {
  title: "About Victoria Enriquez - Energy Healer in Chandler, AZ",
  description: buildMetaDescription(
    "Meet Victoria Enriquez, a certified Reiki and sound healing practitioner in Chandler, Arizona, and learn the mission behind Meditation TIME Home."
  ),
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Victoria"
        subtitle="Guide me and heal me so I may be of greater service to others"
      />

      {/* Bio Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <ScrollReveal className="mx-auto mb-12 max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/60 shadow-sm">
              <Image
                src="/images/new images/about-photo.webp"
                alt="Portrait illustration of Victoria Enriquez, energy healer in Chandler, Arizona"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 420px"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal className="mx-auto max-w-3xl">
            <p className="font-serif text-2xl font-light leading-relaxed text-foreground/80 italic md:text-3xl">
              &ldquo;Guide me and heal me so I may be of greater service to
              others&rdquo;
            </p>
            <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Most of my life I have worked in the medical field. I am
                grateful on my life journey and am so proud that no matter what I
                have always been true to myself and faithful to my intuition. I
                will continue learning more about myself and my life&apos;s
                purpose with every experience.
              </p>
              <p>
                I embrace meditation and desire to help more people learn how to
                meditate or to strengthen their meditation practice. I also love
                to share Reiki and Sound Healing.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Three Column Grid */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <ScrollReveal delay={0} className="h-full">
              <div className="h-full rounded-xl border border-border/50 border-l-[3px] border-l-[#7a8c6e] bg-card p-8 shadow-sm">
                <h2 className="font-serif text-xl font-medium">My Mission</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  There are many different reasons to come for Reiki and different
                  intentions you may have for the sessions. I love the energy and
                  initial impressions of a first time participant. Every session is
                  unique and tailored to your needs.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120} className="h-full">
              <div className="h-full rounded-xl border border-border/50 border-l-[3px] border-l-[#7a8c6e] bg-card p-8 shadow-sm">
                <h2 className="font-serif text-xl font-medium">
                  Who Should Come
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Anyone who is curious — follow your intuition, it is guiding you
                  to a possible awakening in your life journey! That is so
                  exciting to me and I am looking forward to serve, help, and
                  assist you.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={240} className="h-full">
              <div className="h-full rounded-xl border border-border/50 border-l-[3px] border-l-[#7a8c6e] bg-card p-8 shadow-sm">
                <h2 className="font-serif text-xl font-medium">My Goal</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Most people want to live their life their own way — not how
                  anyone says they should. My goal is to help you connect with
                  your inner self and find the balance you seek through healing
                  energy work.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Addressed */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <ScrollReveal>
            <h2 className="text-center font-serif text-3xl font-light tracking-tight md:text-4xl">
              What We Can Help With
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
              Our healing modalities address a wide range of physical, emotional,
              and spiritual needs.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="mt-12">
              <FeatureGrid items={servicesAddressed} columns={4} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
