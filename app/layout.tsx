import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
    title: "K-Line Movers | Professional Moving Services in Bay Area, CA",
    description:
        "K-Line Movers provides professional residential and commercial moving services in the Bay Area, California. Get a free quote today!",
    keywords: [
        "moving",
        "Bay Area",
        "K-Line Movers",
        "residential moving",
        "commercial moving",
    ],
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <Head>
            {/* Favicons */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

            {/* Structured Data for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        url: "https://www.kline-movers.com/",
                        name: "K-Line Movers",
                        potentialAction: {
                            "@type": "SearchAction",
                            target: "https://www.kline-movers.com/search?q={search_term_string}",
                            "query-input": "required name=search_term_string",
                        },
                    }),
                }}
            />

            {/* Google Analytics */}
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
        </Head>
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
