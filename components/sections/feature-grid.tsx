import { HugeiconsIcon } from "@hugeicons/react"
import {
  Leaf01Icon,
  HeartRemoveIcon,
  HealtcareIcon,
  SparklesIcon,
  BrainIcon,
  HeartAddIcon,
  StarIcon,
  SunriseIcon,
} from "@hugeicons/core-free-icons"

const iconMap: Record<string, typeof Leaf01Icon> = {
  leaf: Leaf01Icon,
  heartRemove: HeartRemoveIcon,
  healthcare: HealtcareIcon,
  sparkles: SparklesIcon,
  brain: BrainIcon,
  heartAdd: HeartAddIcon,
  star: StarIcon,
  sunrise: SunriseIcon,
}

interface FeatureItem {
  title: string
  description: string
  icon?: string
}

interface FeatureGridProps {
  items: FeatureItem[]
  columns?: 2 | 3 | 4
}

export function FeatureGrid({ items, columns = 4 }: FeatureGridProps) {
  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={`grid gap-6 ${gridCols[columns]}`}>
      {items.map((item) => {
        const icon = item.icon ? iconMap[item.icon] : undefined
        return (
          <div
            key={item.title}
            className="rounded-xl border border-border/50 bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            {icon && (
              <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                <HugeiconsIcon icon={icon} size={20} className="text-primary" aria-hidden="true" />
              </div>
            )}
            <p className="font-serif text-lg font-medium">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        )
      })}
    </div>
  )
}
