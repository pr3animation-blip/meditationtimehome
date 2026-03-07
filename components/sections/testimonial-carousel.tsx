"use client"

import { useEffect, useState } from "react"
import { ScrollReveal } from "@/components/animation/scroll-reveal"
import type { Testimonial } from "@/types/navigation"

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<"left" | "right">("right")

  useEffect(() => {
    if (testimonials.length <= 1) return

    const timer = setInterval(() => {
      setDirection("right")
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  function goTo(index: number) {
    setDirection(index > current ? "right" : "left")
    setCurrent(index)
  }

  return (
    <section className="bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <ScrollReveal>
          <h2 className="text-center font-serif text-3xl font-light tracking-tight md:text-4xl">
            What Clients Say
          </h2>
        </ScrollReveal>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="absolute -left-4 -top-4 font-serif text-8xl leading-none text-primary/10 select-none" aria-hidden="true">
            &ldquo;
          </div>

          <div className="relative min-h-[200px]" aria-live="polite" aria-atomic="true">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-[transform,opacity] duration-700 ${
                  index === current
                    ? "translate-x-0 opacity-100"
                    : direction === "right"
                      ? "pointer-events-none -translate-x-4 opacity-0"
                      : "pointer-events-none translate-x-4 opacity-0"
                }`}
              >
                <blockquote className="text-center text-lg leading-relaxed text-foreground/80 italic md:text-xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {testimonial.initials}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {testimonial.author}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-1">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className="flex min-h-[44px] min-w-[44px] items-center justify-center"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <span
                  className={`block h-2 rounded-full transition-[width,background-color] ${
                    index === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/20"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
