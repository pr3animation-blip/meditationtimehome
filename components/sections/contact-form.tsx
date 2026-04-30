"use client"

import Link from "next/link"
import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { sendContactEmail } from "@/app/contact/action"
import { siteConfig } from "@/config/navigation"

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, {
    success: false,
  })

  if (state.success) {
    return (
      <div className="rounded-lg border border-border/50 bg-muted/30 p-8 text-center">
        <p className="font-serif text-lg font-medium">Thank you!</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Victoria will respond within 24 hours. We&apos;ve sent a confirmation
          to your inbox.
        </p>
        <div className="mt-6 flex flex-col items-center gap-2">
          <Button
            render={
              <Link
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Book a session now →
          </Button>
          <p className="text-xs text-muted-foreground">
            Skip the wait and reserve your time directly.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form action={formAction} className="space-y-5">
      {state.error && (
        <p className="text-sm text-destructive">{state.error}</p>
      )}
      {/* Honeypot — hidden from real users, often filled by bots. */}
      <div aria-hidden="true" className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="Your name…"
          autoComplete="name"
          maxLength={200}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com…"
          autoComplete="email"
          spellCheck={false}
          maxLength={254}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(602) 000-0000…"
          autoComplete="tel"
          maxLength={50}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help you…"
          rows={5}
          maxLength={5000}
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? "Sending…" : "Send Message"}
      </Button>
    </form>
  )
}
