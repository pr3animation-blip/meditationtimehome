"use client"

import { useEffect, useState } from "react"
import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
  MapControls,
} from "@/components/ui/map"
import { siteConfig } from "@/config/navigation"

const COORDINATES = { lng: -111.8891, lat: 33.3475 }

export function LocationMap() {
  const [mounted, setMounted] = useState(false)
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex h-[300px] w-full items-center justify-center overflow-hidden rounded-xl bg-muted/50">
        <div className="flex gap-1">
          <span className="size-1.5 animate-pulse rounded-full bg-muted-foreground/60" />
          <span className="size-1.5 animate-pulse rounded-full bg-muted-foreground/60 [animation-delay:150ms]" />
          <span className="size-1.5 animate-pulse rounded-full bg-muted-foreground/60 [animation-delay:300ms]" />
        </div>
      </div>
    )
  }

  return (
    <div className="h-[300px] w-full overflow-hidden rounded-xl">
      <Map center={[COORDINATES.lng, COORDINATES.lat]} zoom={14}>
        <MapControls />
        <MapMarker longitude={COORDINATES.lng} latitude={COORDINATES.lat}>
          <MarkerContent>
            <div className="size-4 rounded-full border-2 border-white bg-primary shadow-lg" />
          </MarkerContent>
          <MarkerTooltip>Meditation Time</MarkerTooltip>
          <MarkerPopup>
            <div className="space-y-1.5">
              <p className="font-semibold text-foreground">{siteConfig.name}</p>
              <p className="text-xs text-muted-foreground">{siteConfig.address}</p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="block text-xs text-muted-foreground hover:text-primary"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-xs text-muted-foreground hover:text-primary"
              >
                {siteConfig.email}
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xs font-medium text-primary hover:underline"
              >
                View on Google Maps
              </a>
            </div>
          </MarkerPopup>
        </MapMarker>
      </Map>
    </div>
  )
}
