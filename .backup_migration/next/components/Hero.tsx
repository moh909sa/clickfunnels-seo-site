import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  headline: string
  subtext: string
  ctaText?: string
  ctaHref?: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
}

export default function Hero({ 
  headline, 
  subtext, 
  ctaText = "Start Free Trial",
  ctaHref = "https://www.clickfunnels.com/signup-flow?aff=36738480f0374bbe21a0d263c8b707ef738b7c7b7eb67bda8f16f741f9edca5a",
  secondaryCtaText,
  secondaryCtaHref
}: HeroProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom text-center">
        <h1 className="mb-6">
          {headline.split('ClickFunnels').map((part, index, array) => (
            index === array.length - 1 ? (
              <span key={index}>
                {part}
              </span>
            ) : (
              <span key={index}>
                {part}
                <span className="gradient-text">ClickFunnels</span>
              </span>
            )
          ))}
        </h1>
        <p className="text-fluid-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href={ctaHref}
            className="btn-primary inline-flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {ctaText}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          {secondaryCtaText && secondaryCtaHref && (
            <Link 
              href={secondaryCtaHref}
              className="btn-secondary inline-flex items-center justify-center"
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
