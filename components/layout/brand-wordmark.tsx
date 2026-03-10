import { cn } from "@/lib/utils"

interface BrandWordmarkProps {
  className?: string
}

export function BrandWordmark({ className }: BrandWordmarkProps) {
  return (
    <span className={cn("brand-wordmark whitespace-nowrap", className)}>
      <span className="brand-wordmark-accent">ME</span>
      <span>ditation TIME</span>
    </span>
  )
}
