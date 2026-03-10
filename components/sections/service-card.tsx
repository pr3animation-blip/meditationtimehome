import Link from "next/link"
import Image from "next/image"
import { HugeiconsIcon } from "@hugeicons/react"
import { HandPrayerIcon, Yoga01Icon, MoonIcon } from "@hugeicons/core-free-icons"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Service } from "@/types/navigation"

const iconMap: Record<string, typeof HandPrayerIcon> = {
  reiki: HandPrayerIcon,
  energy: Yoga01Icon,
  sound: MoonIcon,
}

const anchorMap: Record<string, string> = {
  "1-hour-session-with-victoria": "/services#reiki-session",
  "1-5-hour-signature-energy-session-by-victoria": "/services#signature-session",
  "45-min-healing-sound-bath-by-victoria": "/services#sound-bath",
}

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const icon = iconMap[service.icon] ?? HandPrayerIcon

  return (
    <Card className={`group relative flex h-full flex-col overflow-hidden border-border/50 bg-card shadow-sm transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5${service.imageSrc ? " pt-0" : ""}`}>
      {service.imageSrc && (
        <div className="relative aspect-[16/9] w-full border-b border-border/50">
          <Image
            src={service.imageSrc}
            alt={service.imageAlt ?? `${service.name} image`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <CardHeader className="pb-3">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
            <HugeiconsIcon icon={icon} size={24} className="text-primary" aria-hidden="true" />
          </div>
          <Badge variant="secondary" className="font-semibold">
            {service.price}
          </Badge>
        </div>
        <h3 className="font-serif text-xl font-medium leading-snug">
          {service.name}
        </h3>
        <p className="text-sm text-muted-foreground">{service.duration}</p>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          className="w-full"
          render={<Link href={anchorMap[service.slug] ?? `/${service.slug}`} />}
        >
          Learn More<span className="sr-only"> about {service.name}</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
