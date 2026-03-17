import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { MasonryGallery } from "@/components/sections/masonry-gallery"
import { galleryPhotos } from "@/config/site-data"
import { buildMetaDescription } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Gallery",
  description: buildMetaDescription(
    "Browse photos of Victoria Enriquez, her sound healing sessions, crystal singing bowls, and the journey behind MEditation TIME in Chandler, Arizona."
  ),
  alternates: {
    canonical: "/gallery",
  },
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A glimpse into the practice, the journey, and the person behind it"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <MasonryGallery photos={galleryPhotos} />
        </div>
      </section>
    </>
  )
}
