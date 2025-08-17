import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import Callout from '@/components/Callout'
import { CheckCircle, Star, Zap, Users, Globe, CreditCard } from 'lucide-react'

export const metadata: Metadata = {
  title: '15 Best ClickFunnels Alternatives in 2025: Cheaper & Better Options',
  description: 'Discover the best ClickFunnels alternatives including Kajabi, Systeme.io, Podia, and more. Compare features, pricing, and find the perfect funnel builder for your business.',
  keywords: ['clickfunnels alternatives', 'clickfunnels competitors', 'best funnel builder', 'clickfunnels alternative 2025'],
  openGraph: {
    title: '15 Best ClickFunnels Alternatives in 2025: Cheaper & Better Options',
    description: 'Discover the best ClickFunnels alternatives including Kajabi, Systeme.io, Podia, and more.',
    url: 'https://clickfunnels-seo-site.vercel.app/clickfunnels-alternatives',
  },
}

const alternatives = [
  {
    name: 'Kajabi',
    price: '$149/month',
    bestFor: 'Course Creators',
    pros: ['Advanced course creation', 'Built-in email marketing', 'Professional templates'],
    cons: ['Higher price point', 'Limited funnel flexibility'],
    rating: 4.5
  },
  {
    name: 'Systeme.io',
    price: 'Free - $97/month',
    bestFor: 'Budget-conscious users',
    pros: ['Free plan available', 'All-in-one platform', 'Affordable pricing'],
    cons: ['Smaller template library', 'Limited advanced features'],
    rating: 4.3
  },
  {
    name: 'Podia',
    price: '$39/month',
    bestFor: 'Digital product sellers',
    pros: ['Affordable pricing', 'Easy to use', 'Good customer support'],
    cons: ['Limited funnel building', 'Basic automation'],
    rating: 4.4
  }
]

const faqItems = [
  {
    question: "What are the best free ClickFunnels alternatives?",
    answer: "Systeme.io offers a comprehensive free plan with unlimited funnels, emails, and students. Other free alternatives include ConvertKit (limited), Mailchimp (basic), and HubSpot (free CRM with limited marketing features)."
  },
  {
    question: "Is there a cheaper alternative to ClickFunnels?",
    answer: "Yes, several alternatives are significantly cheaper. Systeme.io starts at free, Podia at $39/month, and ConvertKit at $29/month. These platforms offer similar core functionality at a fraction of ClickFunnels' $97/month starting price."
  },
  {
    question: "Which alternative is best for beginners?",
    answer: "For beginners, I recommend Systeme.io (free plan) or Podia ($39/month). Both have intuitive interfaces, good customer support, and comprehensive tutorials. They're easier to learn than ClickFunnels while offering essential funnel-building capabilities."
  }
]

export default function ClickFunnelsAlternativesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-1 to-brand-2 rounded-lg"></div>
              <a href="/" className="text-xl font-bold text-gray-900">ClickFunnels Guide</a>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-600 hover:text-brand-1 transition-colors">Home</a>
              <a href="/clickfunnels-pricing" className="text-gray-600 hover:text-brand-1 transition-colors">Pricing</a>
              <a href="/clickfunnels-vs-kartra" className="text-gray-600 hover:text-brand-1 transition-colors">vs Kartra</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Hero
        headline="15 Best ClickFunnels Alternatives in 2025: Cheaper & Better Options"
        subtext="Discover ClickFunnels alternatives that offer better pricing, easier use, or more specialized features. Compare options and find the perfect funnel builder for your business needs."
        ctaText="Try ClickFunnels Free"
      />

      {/* Alternatives Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-fluid-3xl font-bold text-gray-900 mb-4">
              Top ClickFunnels Alternatives
            </h2>
            <p className="text-fluid-lg text-gray-600 max-w-2xl mx-auto">
              These platforms offer compelling alternatives to ClickFunnels with different strengths and pricing models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alternatives.map((alt, index) => (
              <div key={index} className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{alt.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{alt.rating}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-brand-1">{alt.price}</span>
                  <span className="text-gray-500 text-sm ml-1">/month</span>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm text-gray-500">Best for:</span>
                  <p className="font-medium text-gray-900">{alt.bestFor}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Pros:</h4>
                  <ul className="space-y-1">
                    {alt.pros.map((pro, proIndex) => (
                      <li key={proIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Cons:</h4>
                  <ul className="space-y-1">
                    {alt.cons.map((con, conIndex) => (
                      <li key={conIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-4 h-4 text-red-500">•</div>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        items={faqItems}
        title="ClickFunnels Alternatives FAQ"
        subtitle="Get answers to common questions about ClickFunnels alternatives and how to choose the right platform."
      />

      {/* Final CTA */}
      <Callout
        title="Still Want to Try ClickFunnels?"
        subtitle="While alternatives exist, ClickFunnels remains the industry leader for a reason. Test it out with our free trial!"
        ctaText="Start Free Trial"
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 ClickFunnels Guide. All rights reserved. This site contains affiliate links.
          </p>
        </div>
      </footer>
    </div>
  )
}
