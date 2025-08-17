import { ArrowRight } from 'lucide-react'

interface HeroProps {
  headline: string
  subtext: string
  ctaText?: string
  ctaUrl?: string
  showGradient?: boolean
}

export default function Hero({ 
  headline, 
  subtext, 
  ctaText = "Try ClickFunnels Free", 
  ctaUrl = "https://www.clickfunnels.com/signup-flow?aff=36738480f0374bbe21a0d263c8b707ef738b7c7b7eb67bda8f16f741f9edca5a",
  showGradient = true 
}: HeroProps) {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-1/5 via-brand-2/5 to-brand-3/5"></div>
      )}
      <div className="relative container-custom text-center">
        <h1 className="text-fluid-4xl md:text-fluid-5xl font-bold text-gray-900 mb-6">
          {headline.includes('ClickFunnels') ? (
            <>
              {headline.split('ClickFunnels').map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <span className="gradient-text">ClickFunnels</span>
                  )}
                </span>
              ))}
            </>
          ) : (
            headline
          )}
        </h1>
        <p className="text-fluid-lg md:text-fluid-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
