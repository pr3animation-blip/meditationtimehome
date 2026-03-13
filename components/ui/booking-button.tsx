import Link from "next/link"
import { Button } from "@/components/ui/button"

interface BookingButtonProps {
  calendlyUrl: string
  className?: string
}

export function BookingButton({
  calendlyUrl,
  className,
}: BookingButtonProps) {
  return (
    <div className={className}>
      <Button
        size="lg"
        className="w-full"
        render={
          <Link
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
          />
        }
      >
        Schedule a Session
      </Button>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border/50" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-card px-3 text-xs text-muted-foreground">
            within 4 hours?
          </span>
        </div>
      </div>

      <Button
        size="lg"
        variant="outline"
        className="w-full"
        render={<Link href="/contact" />}
      >
        Contact Victoria Directly
      </Button>
      <p className="mt-2 text-center text-[0.7rem] leading-snug text-muted-foreground/70">
        For same-day or short-notice sessions, reach out for fastest response
      </p>
    </div>
  )
}
