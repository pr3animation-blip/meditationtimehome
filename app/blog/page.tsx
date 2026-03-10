import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/sections/page-hero"
import { BlogPreviewCard } from "@/components/sections/blog-preview-card"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/config/blog-data"
import { buildMetaDescription } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Meditation and Sound Healing Blog",
  description: buildMetaDescription(
    "Read meditation, Reiki, and sound healing articles by Victoria Enriquez. Get practical wellness tips and guidance for your healing journey in Chandler, Arizona."
  ),
  alternates: {
    canonical: "/blog",
  },
}

const POSTS_PER_PAGE = 6

export default function BlogPage() {
  const posts = blogPosts.slice(0, POSTS_PER_PAGE)
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)

  return (
    <>
      <PageHero
        title="Meditation and Wellness Articles"
        subtitle="Get updated guidance on meditation, sound healing, Reiki, and holistic wellness"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Explore articles on meditation, sound healing, Reiki, chakra
              work, and holistic wellness written by Victoria Enriquez.
              Whether you are just beginning your healing journey or looking
              to deepen your practice, these posts share practical tips,
              personal insights, and the science behind the modalities
              offered at Meditation TIME Home in Chandler, Arizona.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogPreviewCard key={post.slug} post={post} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-12 flex justify-center gap-2">
              <span className="flex h-10 min-w-[40px] items-center justify-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground">
                1
              </span>
              {Array.from({ length: totalPages - 1 }, (_, i) => i + 2).map(
                (page) => (
                  <Button
                    key={page}
                    variant="outline"
                    className="h-10 min-w-[40px]"
                    render={<Link href={`/blog/page/${page}`} />}
                  >
                    {page}
                  </Button>
                )
              )}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
