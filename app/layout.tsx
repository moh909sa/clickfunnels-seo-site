import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'ClickFunnels SEO Site - Pricing, Alternatives & Comparisons',
    template: '%s | ClickFunnels SEO Site'
  },
  description: 'Discover ClickFunnels pricing, alternatives, and comparisons. Find the best sales funnel builder for your business needs in 2025.',
  keywords: [
    'clickfunnels',
    'clickfunnels pricing',
    'clickfunnels alternatives',
    'clickfunnels vs kartra',
    'sales funnel builder',
    'landing page builder',
    'marketing automation'
  ],
  authors: [{ name: 'ClickFunnels SEO Site' }],
  creator: 'ClickFunnels SEO Site',
  publisher: 'ClickFunnels SEO Site',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://clickfunnels-seo-site.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://clickfunnels-seo-site.vercel.app',
    title: 'ClickFunnels SEO Site - Pricing, Alternatives & Comparisons',
    description: 'Discover ClickFunnels pricing, alternatives, and comparisons. Find the best sales funnel builder for your business needs in 2025.',
    siteName: 'ClickFunnels SEO Site',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ClickFunnels SEO Site',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClickFunnels SEO Site - Pricing, Alternatives & Comparisons',
    description: 'Discover ClickFunnels pricing, alternatives, and comparisons. Find the best sales funnel builder for your business needs in 2025.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
