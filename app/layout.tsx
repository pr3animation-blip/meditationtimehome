import type { Metadata } from "next"
import { Cormorant_Garamond, Outfit } from "next/font/google"
import "./globals.css"
import { PageShell } from "@/components/layout/page-shell"
import { ScrollToTop } from "@/components/scroll-to-top"
import { siteConfig } from "@/config/navigation"
import { buildMetaDescription } from "@/lib/seo"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://meditationtimehome.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Sound Healing and Reiki in Chandler, AZ | Meditation TIME Home",
    template: `%s | ${siteConfig.name}`,
  },
  description: buildMetaDescription(siteConfig.description),
  openGraph: {
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    title: "Sound Healing and Reiki in Chandler, AZ | Meditation TIME Home",
    description: buildMetaDescription(siteConfig.description),
    url: "https://meditationtimehome.com",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Meditation TIME Home in Chandler, Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sound Healing and Reiki in Chandler, AZ | Meditation TIME Home",
    description: buildMetaDescription(siteConfig.description),
    images: ["/opengraph-image"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorant.variable}`} style={{ colorScheme: "light" }}>
      <head>
        <meta name="theme-color" content="#f9f8f6" />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg focus:ring-2 focus:ring-ring"
        >
          Skip to content
        </a>
        <ScrollToTop />
        <PageShell>{children}</PageShell>
      </body>
    </html>
  )
}
