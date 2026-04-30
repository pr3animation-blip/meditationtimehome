"use client"

import { useState, useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { sendReviewEmail } from "@/app/feedback/action"

function StarRating({
  value,
  onChange,
}: {
  value: number
  onChange: (rating: number) => void
}) {
  const [hovered, setHovered] = useState(0)

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className="transition-transform hover:scale-110 focus:outline-none"
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(star)}
          aria-label={`Rate ${star} out of 5 stars`}
        >
          <svg
            className={`size-8 transition-colors ${
              star <= (hovered || value)
                ? "fill-amber-400 text-amber-400"
                : "fill-none text-muted-foreground/40"
            }`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </button>
      ))}
    </div>
  )
}

export function ReviewForm() {
  const [rating, setRating] = useState(0)
  const [state, formAction, isPending] = useActionState(sendReviewEmail, {
    success: false,
  })

  if (state.success) {
    return (
      <div className="rounded-lg border border-border/50 bg-muted/30 p-8 text-center">
        <p className="font-serif text-lg font-medium">
          Thank you for your review!
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Your feedback means the world to us and helps others discover the
          healing power of energy work.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-5">
      {state.error && (
        <p className="text-sm text-destructive">{state.error}</p>
      )}
      <div className="space-y-2">
        <Label htmlFor="name">Your Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your name or initials…"
          autoComplete="name"
          required
        />
      </div>
      <div className="space-y-2">
        <Label>How was your experience?</Label>
        <StarRating value={rating} onChange={setRating} />
        <input type="hidden" name="rating" value={rating} />
        {rating === 0 && (
          <p className="text-xs text-muted-foreground">
            Tap a star to rate your experience
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="review">Your Review</Label>
        <Textarea
          id="review"
          name="review"
          placeholder="Tell us about your experience…"
          rows={5}
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={isPending || rating === 0}>
        {isPending ? "Submitting…" : "Submit Review"}
      </Button>
    </form>
  )
}
