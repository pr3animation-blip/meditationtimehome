import { cn } from "@/lib/utils"

interface FloatingCircleProps {
  className?: string
  size?: "md" | "lg"
  speed?: "default" | "slow"
}

const sizeMap = {
  md: "h-40 w-40",
  lg: "h-64 w-64",
}

export function FloatingCircle({
  className,
  size = "lg",
  speed = "default",
}: FloatingCircleProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("rounded-full blur-3xl", sizeMap[size], className)}
      style={{
        animation:
          speed === "slow"
            ? "var(--animate-float-slow)"
            : "var(--animate-float)",
      }}
    />
  )
}
