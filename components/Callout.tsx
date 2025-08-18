import Link from 'next/link'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'

interface CalloutProps {
  title: string
  subtitle?: string
  ctaText: string
  ctaHref: string
  variant?: 'primary' | 'secondary' | 'success'
  showTrustIndicators?: boolean
}

export default function Callout({ 
  title, 
  subtitle, 
  ctaText, 
  ctaHref, 
  variant = 'primary',
  showTrustIndicators = true
}: CalloutProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-brand-1 via-brand-2 to-brand-3'
      case 'secondary':
        return 'bg-gradient-to-r from-gray-700 to-gray-900'
      case 'success':
        return 'bg-gradient-to-r from-green-600 to-green-700'
      default:
        return 'bg-gradient-to-r from-brand-1 via-brand-2 to-brand-3'
    }
  }

  return (
    <section className={`py-16 px-4 ${getVariantClasses()}`}>
      <div className="container-custom text-center">
        <h2 className="text-white mb-4">{title}</h2>
        {subtitle && (
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            {subtitle}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href={ctaHref}
            className="bg-white text-gray-900 font-semibold py-4 px-8 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {ctaText}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {showTrustIndicators && (
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>14-Day Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-300" />
              <span>30-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span>No Credit Card Required</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
