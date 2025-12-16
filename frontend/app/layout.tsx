import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ParallaxProvider } from "@/components/parallax-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { ChatSupportWidget } from "@/components/chat-support-widget"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Best Loan Provider in India | Finonest",
  description: "Finonest offers a wide range of financial products including personal loans, home loans, and business loans.",
  keywords: "loan, personal loan, home loan, business loan, financial services",
  authors: [{ name: "Finonest Team" }],
  publisher: "Finonest Financial Services",
  metadataBase: new URL('https://finonest.com'),
  alternates: {
    canonical: 'https://finonest.com/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://finonest.com/',
    title: 'Best Loan Provider in India | Finonest',
    description: 'Finonest offers a wide range of financial products including personal loans, home loans, and business loans.',
    siteName: 'Finonest',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Finonest - Best Loan Provider in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Loan Provider in India | Finonest',
    description: 'Finonest offers a wide range of financial products including personal loans, home loans, and business loans.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },

export const dynamic = 'force-dynamic'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0064D6" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ParallaxProvider>
            <Navigation />
            <main>{children}</main>
            <Footer />
            <ChatSupportWidget />
            <Toaster />
          </ParallaxProvider>
        </ThemeProvider>
      </body>
    </html>
  )
