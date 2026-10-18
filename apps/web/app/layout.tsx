import { Inter } from "next/font/google"
import "@workspace/ui/globals.css"
import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/shared/Footer"
import { TooltipProvider } from "@workspace/ui/components/tooltip"
import { SITE_CONFIG } from "@/data/site"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata = {
  title: SITE_CONFIG.seo.title,
  description: SITE_CONFIG.seo.description,
  keywords: SITE_CONFIG.seo.keywords,
  authors: [{ name: SITE_CONFIG.company.name }],
  creator: SITE_CONFIG.company.name,
  publisher: SITE_CONFIG.company.name,
  metadataBase: new URL("https://www.websoftbd.net"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.websoftbd.net",
    title: SITE_CONFIG.seo.title,
    description: SITE_CONFIG.seo.description,
    siteName: SITE_CONFIG.company.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.seo.title,
    description: SITE_CONFIG.seo.description,
    creator: "@websoftbd",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans antialiased`}>
      <body suppressHydrationWarning>
        <TooltipProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  )
}
