import Link from "next/link"
import { JsonLd } from "@/components/seo/json-ld"
import { breadcrumbSchema, type BreadcrumbItem } from "@/lib/seo"

interface BreadcrumbsProps {
  id: string
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ id, items, className }: BreadcrumbsProps) {
  if (items.length < 2) return null

  return (
    <>
      <JsonLd id={`breadcrumb-schema-${id}`} data={breadcrumbSchema(items)} />
      <nav
        aria-label="Breadcrumb"
        className={`mx-auto max-w-screen-2xl px-4 pt-6 md:px-8 md:pt-8 ${className ?? ""}`}
      >
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <li key={`${item.name}-${index}`} className="flex items-center gap-2">
                {index > 0 && (
                  <span aria-hidden="true" className="text-muted-foreground/50">
                    /
                  </span>
                )}
                {isLast || !item.path ? (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className="text-foreground/80"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
