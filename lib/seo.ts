import { siteConfig } from "@/config/navigation"
import type { BlogPost, Service } from "@/types/navigation"

const SITE_URL = "https://meditationtimehome.com"
const BUSINESS_NAME = "Meditation TIME Home"
const BUSINESS_ID = `${SITE_URL}/#localbusiness`

const parsedPhone = siteConfig.phone.replace(/\D/g, "")
const internationalPhone =
  parsedPhone.length === 10 ? `+1${parsedPhone}` : siteConfig.phone

function normalizePath(path: string) {
  if (!path || path === "/") return "/"
  const withSlash = path.startsWith("/") ? path : `/${path}`
  return withSlash.endsWith("/") ? withSlash.slice(0, -1) : withSlash
}

export function canonicalFor(path: string) {
  return `${SITE_URL}${normalizePath(path)}`
}

export function buildMetaDescription(
  baseDescription: string,
  cta = "Book your Chandler, AZ session today."
) {
  const clean = baseDescription.replace(/\s+/g, " ").trim()
  const withCta = clean.length < 130 ? `${clean} ${cta}`.trim() : clean

  if (withCta.length <= 160) return withCta
  return `${withCta.slice(0, 157).trimEnd()}...`
}

export function localBusinessSchema(path = "/", description?: string) {
  const serviceCatalog = [
    "USUI Reiki Session",
    "Signature Energy Session",
    "Healing Sound Bath Session",
    "Guided Meditation",
  ]

  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": BUSINESS_ID,
    name: BUSINESS_NAME,
    url: canonicalFor(path),
    description:
      description ??
      "Meditation TIME Home offers Reiki, meditation, and sound healing services in Chandler, Arizona.",
    telephone: internationalPhone,
    email: siteConfig.email,
    image: [canonicalFor("/opengraph-image")],
    address: {
      "@type": "PostalAddress",
      streetAddress: "2845 N Price Rd unit 33",
      addressLocality: "Chandler",
      addressRegion: "AZ",
      postalCode: "85224",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Chandler" },
      { "@type": "State", name: "Arizona" },
    ],
    sameAs: Object.values(siteConfig.social),
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Healing Services",
      itemListElement: serviceCatalog.map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
        },
      })),
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: internationalPhone,
        email: siteConfig.email,
        areaServed: "US",
        availableLanguage: "English",
      },
    ],
  }
}

export function serviceSchema(service: Service) {
  const amount = Number(service.price.replace(/[^0-9.]/g, ""))
  const durationMatch = service.duration.match(/\d+/)
  const durationMinutes = durationMatch ? Number(durationMatch[0]) : undefined

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.longDescription ?? service.description,
    serviceType: "Energy healing and meditation service",
    provider: {
      "@id": BUSINESS_ID,
      "@type": "HealthAndBeautyBusiness",
      name: BUSINESS_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: "Chandler",
    },
    url: canonicalFor(`/${service.slug}`),
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: Number.isFinite(amount) ? amount : undefined,
      url: service.calendlyUrl,
      availability: "https://schema.org/InStock",
      eligibleRegion: {
        "@type": "State",
        name: "Arizona",
      },
      ...(durationMinutes
        ? { eligibleDuration: `PT${durationMinutes}M` }
        : {}),
    },
  }
}

export function blogPostingSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: buildMetaDescription(post.excerpt),
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_NAME,
      logo: {
        "@type": "ImageObject",
        url: canonicalFor("/opengraph-image"),
      },
    },
    mainEntityOfPage: canonicalFor(`/blog/${post.slug}`),
    image: [canonicalFor("/opengraph-image")],
    articleSection: post.category ?? "Wellness",
  }
}

export interface FaqItem {
  question: string
  answer: string
}

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}
