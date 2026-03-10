import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PageHero } from "@/components/sections/page-hero"
import { BlogPreviewCard } from "@/components/sections/blog-preview-card"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/config/blog-data"
import { buildMetaDescription } from "@/lib/seo"

const POSTS_PER_PAGE = 6

interface BlogPageProps {
  params: Promise<{ page: string }>
}

export async function generateStaticParams() {
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)
  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: String(i + 2),
  }))
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { page } = await params
  return {
    title: `Meditation and Wellness Blog - Page ${page}`,
    description: buildMetaDescription(
      `Browse page ${page} of meditation, sound healing, and Reiki articles from Meditation TIME Home.`
    ),
    alternates: {
      canonical: `/blog/page/${page}`,
    },
  }
}

export default async function BlogPaginatedPage({ params }: BlogPageProps) {
  const { page } = await params
  const pageNum = parseInt(page, 10)
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE)

  if (isNaN(pageNum) || pageNum < 2 || pageNum > totalPages) {
    notFound()
  }

  const startIndex = (pageNum - 1) * POSTS_PER_PAGE
  const posts = blogPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)

  return (
    <>
      <PageHero
        title="Blog"
        subtitle={`Page ${pageNum} of ${totalPages}`}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogPreviewCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-2">
            <Button
              variant="outline"
              className="h-10 min-w-[40px]"
              render={<Link href="/blog" />}
            >
              1
            </Button>
            {Array.from({ length: totalPages - 1 }, (_, i) => i + 2).map(
              (p) => (
                <Button
                  key={p}
                  variant={p === pageNum ? "default" : "outline"}
                  className="h-10 min-w-[40px]"
                  render={<Link href={`/blog/page/${p}`} />}
                >
                  {p}
                </Button>
              )
            )}
          </div>
        </div>
      </section>
    </>
  )
}
