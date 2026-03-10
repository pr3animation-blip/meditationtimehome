import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { BookCard } from "@/components/sections/book-card"
import { CtaBanner } from "@/components/sections/cta-banner"
import { books } from "@/config/site-data"
import { buildMetaDescription } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Books on Wellness and Sound Healing",
  description: buildMetaDescription(
    "Browse wellness books by Victoria Enriquez on touch, sound healing, and mindful living. Order on Amazon and deepen your healing practice at home."
  ),
  alternates: {
    canonical: "/shop",
  },
}

export default function ShopPage() {
  return (
    <>
      <PageHero
        title="Shop"
        subtitle="Explore deeper connections through Victoria's published works"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Victoria&apos;s books draw from years of personal experience in
              energy healing, meditation, and holistic wellness. Each title
              offers practical guidance and heartfelt stories designed to help
              you deepen your connection to yourself and the people you love.
              Whether you are new to mindfulness or looking to enrich an
              existing practice, these reads will inspire reflection and
              positive change.
            </p>
          </div>

          <div className="space-y-8">
            {books.map((book) => (
              <BookCard key={book.title} book={book} />
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="text-center font-serif text-2xl font-light md:text-3xl">
              Why Read About Wellness?
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Reading about wellness and healing modalities helps reinforce
                the benefits of your sessions long after you leave the studio.
                Books give you the space to explore concepts at your own pace,
                revisit ideas that resonate, and integrate new practices into
                your daily routine.
              </p>
              <p>
                Victoria wrote these books to share the insights she has
                gathered from working with clients and from her own journey of
                self-discovery. They complement the hands-on healing work she
                offers at Meditation TIME Home, providing a bridge between
                in-studio sessions and everyday life.
              </p>
              <p>
                All titles are available through Amazon in both print and
                digital formats, making them easy to access wherever you are
                on your healing journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
