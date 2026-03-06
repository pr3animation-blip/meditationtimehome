import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { BlogPost } from "@/types/navigation"

interface BlogPreviewCardProps {
  post: BlogPost
}

export function BlogPreviewCard({ post }: BlogPreviewCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Card className="group h-full overflow-hidden border-border/50 bg-card pt-0 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-[16/9] w-full border-b border-border/50">
        <Image
          src="/images/blog/featured-wellness.webp"
          alt={`Featured image for ${post.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <CardContent className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="text-xs">
            <time dateTime={post.date}>{formattedDate}</time>
          </Badge>
          {post.category && (
            <Badge variant="secondary" className="text-xs">
              {post.category}
            </Badge>
          )}
        </div>
        <h3 className="mt-3 font-serif text-lg font-medium leading-snug">
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors hover:text-primary"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-auto inline-block pt-4 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          Read more
          <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </CardContent>
    </Card>
  )
}
