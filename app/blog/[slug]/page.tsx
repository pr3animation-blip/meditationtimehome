import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BlogPreviewCard } from "@/components/sections/blog-preview-card"
import { CtaBanner } from "@/components/sections/cta-banner"
import { JsonLd } from "@/components/seo/json-ld"
import { blogPosts } from "@/config/blog-data"
import { blogPostingSchema, buildMetaDescription } from "@/lib/seo"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}

  const canonicalPath = `/blog/${post.slug}`
  const metaDescription = buildMetaDescription(
    post.excerpt,
    "Read the full article and book a wellness session in Chandler, AZ."
  )

  return {
    title: post.title,
    description: metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: post.title,
      description: metaDescription,
      type: "article",
      url: canonicalPath,
      publishedTime: post.date,
      authors: [post.author],
      images: ["/opengraph-image"],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) notFound()

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3)
  const paragraphs = post.content.split("\n\n").filter(Boolean)
  const leadParagraph = paragraphs[0] ?? ""
  const bodyParagraphs = paragraphs.slice(1)
  const sectionHeadings = [
    "How This Supports Healing",
    "What to Expect in Practice",
    "Tips to Apply This Daily",
    "When to Book a Session",
  ]

  return (
    <>
      <JsonLd
        id={`blog-posting-schema-${post.slug}`}
        data={blogPostingSchema(post)}
      />

      <article className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <div className="mb-8">
            <Button
              variant="ghost"
              size="default"
              render={<Link href="/blog" />}
            >
              &larr; Back to Blog
            </Button>
          </div>

          <header className="mb-10">
            <div className="flex items-center gap-3">
              <Badge variant="outline">
                <time dateTime={post.date}>{formattedDate}</time>
              </Badge>
              {post.category && (
                <Badge variant="secondary">{post.category}</Badge>
              )}
            </div>
            <h1 className="mt-4 font-serif text-3xl font-light leading-snug tracking-tight md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-foreground/70">
              By <span className="font-medium text-foreground">{post.author}</span> · Certified Reiki Practitioner &amp; Sound Healer
            </p>
          </header>

          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-xl border border-border/60">
            <Image
              src="/images/blog/featured-wellness.webp"
              alt={`Featured image for article: ${post.title}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 768px"
              priority
            />
          </div>

          <div className="space-y-6">
            {leadParagraph && (
              <p className="text-base leading-relaxed text-muted-foreground">
                {leadParagraph}
              </p>
            )}
            {bodyParagraphs.map((paragraph, index) => (
              <section key={`${post.slug}-section-${index}`} className="space-y-3">
                <h2 className="font-serif text-2xl font-light tracking-tight">
                  {sectionHeadings[index] ??
                    `Meditation Insight ${index + 1}`}
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              </section>
            ))}
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-border bg-secondary/30 py-16 md:py-24">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <h2 className="font-serif text-2xl font-light tracking-tight md:text-3xl">
              More Articles
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedPosts.map((p) => (
                <BlogPreviewCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  )
}
