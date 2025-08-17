import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'ClickFunnels SEO Site - Pricing, Alternatives & Comparisons',
    template: '%s | ClickFunnels Guide'
  },
  description: 'Discover ClickFunnels pricing, alternatives, and comparisons. Get detailed insights on plans, features, and find the best sales funnel builder for your business.',
  keywords: ['clickfunnels', 'sales funnel', 'landing page builder', 'clickfunnels pricing', 'clickfunnels alternatives', 'clickfunnels vs kartra'],
  authors: [{ name: 'ClickFunnels Guide' }],
  creator: 'ClickFunnels Guide',
  publisher: 'ClickFunnels Guide',
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
    title: 'ClickFunnels SEO Site - Pricing, Alternatives & Comparisons',
    description: 'Discover ClickFunnels pricing, alternatives, and comparisons. Get detailed insights on plans, features, and find the best sales funnel builder for your business.',
    url: 'https://clickfunnels-seo-site.vercel.app',
    siteName: 'ClickFunnels Guide',
    images: [
      {
        url: '/api/og?title=ClickFunnels%20Guide',
        width: 1200,
        height: 630,
        alt: 'ClickFunnels Guide - Pricing, Alternatives & Comparisons',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClickFunnels SEO Site - Pricing, Alternatives & Comparisons',
    description: 'Discover ClickFunnels pricing, alternatives, and comparisons. Get detailed insights on plans, features, and find the best sales funnel builder for your business.',
    images: ['/api/og?title=ClickFunnels%20Guide'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#6D28D9" />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
