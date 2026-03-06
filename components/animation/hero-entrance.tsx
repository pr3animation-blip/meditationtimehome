import type { ReactNode } from "react"

interface HeroEntranceProps {
  children: ReactNode
  className?: string
  index?: number
}

export function HeroEntrance({
  children,
  className,
  index = 0,
}: HeroEntranceProps) {
  return (
    <div
      className={className}
      style={{
        animation: "var(--animate-hero-fade-up)",
        animationDelay: `${index * 200}ms`,
      }}
    >
      {children}
    </div>
  )
}
