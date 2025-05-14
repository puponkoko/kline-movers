import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "K-Line Movers | Professional Moving Services in Bay Area, CA",
  description:
      "K-Line Movers provides professional residential and commercial moving services in the Bay Area, California. Get a free quote today!",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png" }],
  },
  generator: "v0.dev",
  keywords: ["moving", "Bay Area", "K-Line Movers", "residential moving", "commercial moving"]
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <head>
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-WVL7LR3W1W"
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WVL7LR3W1W');
          `}
        </Script>
      </head>
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
      </body>
      </html>
  )
}
