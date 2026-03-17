import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Book } from "@/types/navigation"

interface BookCardProps {
  book: Book
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Card className="overflow-hidden border-border/50 bg-card">
      <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:p-8">
        <div className="relative aspect-[2/3] w-full shrink-0 overflow-hidden rounded-lg border border-border/60 bg-secondary md:w-48">
          {book.imageSrc ? (
            <Image
              src={book.imageSrc}
              alt={book.imageAlt ?? `${book.title} book cover`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 192px"
            />
          ) : (
            <div className="flex h-full items-center justify-center px-4 text-center">
              <div>
                <p className="font-serif text-xl font-medium leading-snug">
                  {book.title}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {book.subtitle}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col">
          <h2 className="font-serif text-2xl font-medium">{book.title}</h2>
          <p className="mt-1 text-sm text-muted-foreground italic">
            {book.subtitle}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {book.description}
          </p>
          <div className="mt-6 flex gap-3">
            <Button
              size="lg"
              render={
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Buy on Amazon
            </Button>
            {book.previewUrl && book.previewUrl !== "#" && (
              <Button
                variant="outline"
                size="lg"
                render={
                  <a
                    href={book.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Book Preview
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
