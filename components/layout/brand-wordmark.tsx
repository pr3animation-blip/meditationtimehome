import { cn } from "@/lib/utils"

interface BrandWordmarkProps {
  className?: string
}

export function BrandWordmark({ className }: BrandWordmarkProps) {
  return (
    <span className={cn("brand-wordmark whitespace-nowrap", className)}>
      <span className="brand-wordmark-me">ME</span>
      <span>ditation Time</span>
    </span>
  )
}
