"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Menu01Icon } from "@hugeicons/core-free-icons"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { BrandWordmark } from "@/components/layout/brand-wordmark"
import { mainNavItems, siteConfig } from "@/config/navigation"

const MobileNav = dynamic(() =>
  import("@/components/layout/mobile-nav").then((mod) => mod.MobileNav)
)

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileNavLoaded, setMobileNavLoaded] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sidebar-border bg-sidebar text-sidebar-foreground">
      <div className="container mx-auto grid h-16 max-w-screen-2xl grid-cols-[1fr_auto_1fr] items-center px-4 md:px-8">
        {/* Mobile menu toggle — left on mobile, hidden on desktop */}
        <Button
          variant="ghost"
          size="icon"
          className="size-11 justify-self-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground lg:hidden"
          onClick={() => {
            setMobileNavLoaded(true)
            setMobileOpen(true)
          }}
          aria-label="Open menu"
        >
          <HugeiconsIcon icon={Menu01Icon} size={20} aria-hidden="true" />
        </Button>

        {/* Logo — centered on mobile, left-aligned on desktop */}
        <Link
          href="/"
          className="flex items-center gap-2.5 justify-self-center whitespace-nowrap transition-opacity hover:opacity-80 lg:justify-self-start"
        >
          <Image
            src="/images/logo.svg"
            alt=""
            width={48}
            height={48}
            className="shrink-0"
            aria-hidden="true"
          />
          <BrandWordmark className="font-serif text-xl font-semibold tracking-tight" />
        </Link>

        {/* Center: Navigation — desktop only */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-2 xl:gap-3">
            {mainNavItems.map((item) =>
              item.children ? (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuTrigger className="bg-transparent text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus:bg-sidebar-accent focus:text-sidebar-accent-foreground data-open:bg-sidebar-accent/20 data-open:text-sidebar-accent-foreground data-open:hover:bg-sidebar-accent data-open:focus:bg-sidebar-accent/20 data-popup-open:bg-sidebar-accent/20 data-popup-open:text-sidebar-accent-foreground data-popup-open:hover:bg-sidebar-accent">
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[320px] gap-1 p-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <NavigationMenuLink
                            render={<Link href={child.href} />}
                            className="flex flex-col gap-0.5 rounded-md p-3 hover:bg-muted"
                          >
                            <span className="text-sm font-medium">
                              {child.title}
                            </span>
                            {child.description && (
                              <span className="text-xs text-muted-foreground">
                                {child.description}
                              </span>
                            )}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    render={<Link href={item.href} />}
                    className={navigationMenuTriggerStyle({
                      className:
                        "bg-transparent text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus:bg-sidebar-accent focus:text-sidebar-accent-foreground data-active:bg-sidebar-accent/20 data-active:text-sidebar-accent-foreground data-active:hover:bg-sidebar-accent/20 data-active:focus:bg-sidebar-accent/20",
                    })}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right: CTA (desktop) + balancing spacer (mobile) */}
        <div className="flex items-center gap-2 justify-self-end">
          <Button
            variant="default"
            size="default"
            className="hidden lg:inline-flex bg-white/90 text-sidebar hover:bg-white"
            render={<Link href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer" />}
          >
            Book a Session
          </Button>
          <div className="size-11 lg:hidden" aria-hidden="true" />
        </div>
      </div>

      {mobileNavLoaded && (
        <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />
      )}
    </header>
  )
}
