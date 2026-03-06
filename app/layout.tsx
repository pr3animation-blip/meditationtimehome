import type { Metadata } from "next"
import { Cormorant_Garamond, Outfit } from "next/font/google"
import "./globals.css"
import { PageShell } from "@/components/layout/page-shell"
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
    default: "Sound Healing and Reiki in Chandler, AZ | MEditation Time Home",
    template: `%s | ${siteConfig.name}`,
  },
  description: buildMetaDescription(siteConfig.description),
  openGraph: {
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    title: "Sound Healing and Reiki in Chandler, AZ | MEditation Time Home",
    description: buildMetaDescription(siteConfig.description),
    url: "https://meditationtimehome.com",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "MEditation Time Home in Chandler, Arizona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sound Healing and Reiki in Chandler, AZ | MEditation Time Home",
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
    <html lang="en" className={`${outfit.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  )
}
