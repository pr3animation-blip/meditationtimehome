import type { NavItem, FooterSection, SiteConfig } from "@/types/navigation"

export const siteConfig: SiteConfig = {
  name: "Meditation TIME",
  description:
    "Discover Reiki, sound healing, and meditation sessions with Victoria Enriquez in Chandler, Arizona to relieve stress, restore balance, and support your wellness journey.",
  phone: "602-754-6739",
  email: "meditationtimehome@gmail.com",
  address: "2845 N Price Rd unit 33, Chandler, AZ 85224",
  calendlyUrl: "https://calendly.com/meditationtimehome",
  social: {
    facebook: "https://www.facebook.com/meditationtimehome",
    twitter: "https://twitter.com/Me_time_Reset",
    instagram: "https://www.instagram.com/meditationtimehome",
    youtube: "https://www.youtube.com/@meditationtimehome",
  },
}

export const mainNavItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Shop", href: "/shop" },
  { title: "Gallery", href: "/gallery" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
]

export const footerSections: FooterSection[] = [
  {
    title: "Services",
    links: [
      { title: "Reiki Session", href: "/services#reiki-session" },
      { title: "Signature Energy Session", href: "/services#signature-session" },
      { title: "Healing Sound Bath", href: "/services#sound-bath" },
    ],
  },
  {
    title: "Explore",
    links: [
      { title: "About", href: "/about" },
      { title: "Gallery", href: "/gallery" },
      { title: "Blog", href: "/blog" },
      { title: "Shop", href: "/shop" },
    ],
  },
  {
    title: "Support",
    links: [
      { title: "Contact", href: "/contact" },
      { title: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
]
