import { ArrowRight, Star, CheckCircle } from 'lucide-react'

interface CalloutProps {
  title: string
  subtitle?: string
  ctaText?: string
  ctaUrl?: string
  variant?: 'primary' | 'secondary' | 'success'
  showTrustIndicators?: boolean
}

export default function Callout({ 
  title, 
  subtitle, 
  ctaText = "Get Started Now", 
  ctaUrl = "https://www.clickfunnels.com/signup-flow?aff=36738480f0374bbe21a0d263c8b707ef738b7c7b7eb67bda8f16f741f9edca5a",
  variant = 'primary',
  showTrustIndicators = true
}: CalloutProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gradient-to-r from-gray-800 to-gray-900'
      case 'success':
        return 'bg-gradient-to-r from-green-600 to-green-700'
      default:
        return 'bg-gradient-to-r from-brand-1 to-brand-2'
    }
  }

  return (
    <section className={`py-16 ${getVariantClasses()}`}>
      <div className="container-custom text-center">
        <h2 className="text-fluid-2xl md:text-fluid-3xl font-bold text-white mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-fluid-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-1 font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {showTrustIndicators && (
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>14-Day Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>4.8/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>30-Day Money-Back Guarantee</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
