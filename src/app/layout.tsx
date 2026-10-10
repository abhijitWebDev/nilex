import type { Metadata, Viewport } from "next"
import { img } from "@/lib/images"
import "@fontsource-variable/plus-jakarta-sans"
import "@fontsource-variable/bricolage-grotesque"
import "@fontsource/caveat/500.css"
import "@fontsource/caveat/700.css"
import "./globals.css"

import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { WhatsAppFab } from "@/components/whatsapp-fab"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Holiday Packages, Flights, Visas & Insurance`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Nilex Holidays",
    "holiday packages",
    "Char Dham Yatra",
    "Char Dham helicopter",
    "Kashmir tour",
    "Ladakh tour",
    "Spiti Valley",
    "Japan tour package",
    "Singapore Malaysia package",
    "Scandinavia tour",
    "visa assistance",
    "travel insurance",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: img.kedarnathPeaks }],
  },
  icons: { icon: "/icon-new.png", apple: "/apple-icon-new.png" },
}

export const viewport: Viewport = {
  themeColor: "#0f2a52",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col overflow-x-clip">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  )
}
