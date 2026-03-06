"use client"

import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import type { IconSvgObject } from "@hugeicons/react"
import {
  Home01Icon,
  UserCircleIcon,
  SparklesIcon,
  ShoppingBag01Icon,
  Note01Icon,
  Mail01Icon,
  Calendar03Icon,
} from "@hugeicons/core-free-icons"
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { mainNavItems, siteConfig } from "@/config/navigation"

const navIcons: Record<string, IconSvgObject> = {
  "/": Home01Icon,
  "/about": UserCircleIcon,
  "/services": SparklesIcon,
  "/shop": ShoppingBag01Icon,
  "/blog": Note01Icon,
  "/contact": Mail01Icon,
}

interface MobileNavProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className="bg-sidebar text-sidebar-foreground px-5 pt-3"
        showCloseButton={false}
      >
        <SheetTitle className="sr-only">Navigation</SheetTitle>

        {/* Drag handle */}
        <div className="flex justify-center pb-4 pt-1">
          <div className="h-1.5 w-10 rounded-full bg-sidebar-foreground/25" />
        </div>

        {/* 2-column nav grid */}
        <nav className="grid grid-cols-2 gap-3">
          {mainNavItems.map((item) => {
            const icon = navIcons[item.href]
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  onOpenChange(false)
                  window.scrollTo({ top: 0, behavior: "instant" })
                }}
                className="flex flex-col items-center justify-center gap-2 rounded-xl bg-sidebar-accent/60 px-3 py-4 text-sidebar-foreground transition-colors active:bg-sidebar-accent active:scale-[0.97]"
              >
                {icon && (
                  <HugeiconsIcon
                    icon={icon}
                    size={24}
                    className="text-sidebar-primary"
                  />
                )}
                <span className="text-sm font-medium">{item.title}</span>
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="mt-4 pb-10">
          <Button
            size="lg"
            className="w-full bg-white/90 text-sidebar hover:bg-white h-12 text-base font-medium"
            render={
              <Link
                href={siteConfig.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onOpenChange(false)}
              />
            }
          >
            <HugeiconsIcon icon={Calendar03Icon} size={18} className="mr-2" />
            Book a Session
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
