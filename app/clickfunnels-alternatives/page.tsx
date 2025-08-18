import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import Callout from '@/components/Callout'
import { Check, Star, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: '15 Best ClickFunnels Alternatives in 2025: Cheaper & Better Options',
  description: 'Discover the best ClickFunnels alternatives including free options, cheaper alternatives, and better features. Compare pricing, features, and find your perfect fit.',
  keywords: [
    'clickfunnels alternatives',
    'clickfunnels alternatives 2025',
    'clickfunnels competitors',
    'free clickfunnels alternative',
    'cheaper than clickfunnels'
  ],
  openGraph: {
    title: '15 Best ClickFunnels Alternatives in 2025: Cheaper & Better Options',
    description: 'Discover the best ClickFunnels alternatives including free options, cheaper alternatives, and better features. Compare pricing, features, and find your perfect fit.',
    url: 'https://clickfunnels-seo-site.vercel.app/clickfunnels-alternatives',
  },
}

const alternatives = [
  {
    name: 'Kajabi',
    price: '$149/month',
    bestFor: 'Course Creators & Educators',
    pros: ['All-in-one platform', 'Advanced course tools', 'Built-in email marketing', 'Professional templates'],
    cons: ['Expensive', 'Steep learning curve', 'Limited customization'],
    rating: 4.5,
    website: 'https://kajabi.com'
  },
  {
    name: 'Systeme.io',
    price: 'Free - $67/month',
    bestFor: 'Budget-conscious users',
    pros: ['Free plan available', 'Affordable pricing', 'All-in-one solution', 'Easy to use'],
    cons: ['Limited features on free plan', 'Smaller template library', 'Basic analytics'],
    rating: 4.3,
    website: 'https://systeme.io'
  },
  {
    name: 'Podia',
    price: '$39/month',
    bestFor: 'Digital Product Sellers',
    pros: ['Affordable pricing', 'Great for digital products', 'Built-in email marketing', 'Simple interface'],
    cons: ['Limited funnel features', 'Basic templates', 'No advanced automation'],
    rating: 4.2,
    website: 'https://podia.com'
  },
  {
    name: 'CartFlows',
    price: '$39/year',
    bestFor: 'WordPress users',
    pros: ['WordPress integration', 'Very affordable', 'WooCommerce compatible', 'Lightweight'],
    cons: ['WordPress only', 'Limited features', 'Requires WordPress knowledge'],
    rating: 4.0,
    website: 'https://cartflows.com'
  },
  {
    name: 'ThriveCart',
    price: '$495 (lifetime)',
    bestFor: 'Checkout optimization',
    pros: ['Lifetime pricing', 'Excellent checkout pages', 'A/B testing', 'Multiple payment options'],
    cons: ['High upfront cost', 'No funnel builder', 'Limited page building'],
    rating: 4.4,
    website: 'https://thrivecart.com'
  },
  {
    name: 'GoHighLevel',
    price: '$97/month',
    bestFor: 'Agencies & Marketers',
    pros: ['All-in-one platform', 'White-label options', 'Advanced automation', 'CRM included'],
    cons: ['Complex interface', 'Expensive', 'Overwhelming for beginners'],
    rating: 4.1,
    website: 'https://gohighlevel.com'
  }
]

const faqItems = [
  {
    question: "What's the best free alternative to ClickFunnels?",
    answer: "Systeme.io offers the best free alternative to ClickFunnels. Their free plan includes unlimited funnels, pages, and contacts, making it an excellent starting point for beginners. While it has some limitations compared to paid plans, it provides enough features to build basic sales funnels without any cost."
  },
  {
    question: "Which alternative is best for WordPress users?",
    answer: "CartFlows is the best ClickFunnels alternative for WordPress users. It integrates seamlessly with WordPress and WooCommerce, allowing you to create high-converting checkout pages and sales funnels within your existing WordPress ecosystem. It's also very affordable at just $39/year."
  },
  {
    question: "Are there cheaper alternatives to ClickFunnels?",
    answer: "Yes, several alternatives are significantly cheaper than ClickFunnels. Systeme.io starts at free, Podia at $39/month, and CartFlows at $39/year. ThriveCart offers lifetime pricing at $495, which can be cheaper in the long run. These alternatives provide good value for money while maintaining essential funnel-building capabilities."
  },
  {
    question: "Can I migrate my funnels to another platform?",
    answer: "Migration between platforms is possible but not seamless. You'll need to rebuild your funnels and pages, though you can copy content and design elements. Email lists and customer data can usually be exported and imported. Consider using a migration service for complex setups or start fresh with the new platform's templates."
  },
  {
    question: "Which alternative has the best email marketing?",
    answer: "GoHighLevel and Kajabi have the best email marketing capabilities among ClickFunnels alternatives. They offer advanced automation, segmentation, and behavioral triggers. Systeme.io also includes good email marketing features in their paid plans. If email marketing is crucial for your business, these platforms provide superior functionality compared to ClickFunnels."
  },
  {
    question: "What features should I look for in alternatives?",
    answer: "Look for funnel building capabilities, landing page builder, email marketing, payment processing, membership site features, and analytics. Consider your specific needs: beginners should prioritize ease of use, while advanced users might want automation and CRM features. Also check for integrations with tools you already use and the quality of customer support."
  }
]

export default function ClickFunnelsAlternativesPage() {
  return (
    <div className="min-h-screen">
      <Hero
        headline="15 Best ClickFunnels Alternatives in 2025: Cheaper & Better Options"
        subtext="Discover ClickFunnels alternatives that offer better pricing, more features, or specialized functionality. Find the perfect platform for your business needs and budget."
        ctaText="Try ClickFunnels Free"
        ctaHref="https://www.clickfunnels.com/signup-flow?aff=36738480f0374bbe21a0d263c8b707ef738b7c7b7eb67bda8f16f741f9edca5a"
        secondaryCtaText="Explore Alternatives"
        secondaryCtaHref="#alternatives"
      />

      {/* Why Look for Alternatives */}
      <section className="py-16 px-4 bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Why Look for ClickFunnels Alternatives?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <h3 className="text-xl font-semibold mb-3">High Cost</h3>
              <p className="text-gray-600">
                ClickFunnels starts at $81/month, which can be expensive for small businesses and startups looking to minimize costs.
              </p>
            </div>
            <div className="card text-center">
              <h3 className="text-xl font-semibold mb-3">Limited Features</h3>
              <p className="text-gray-600">
                Basic email marketing, no built-in CRM, and limited integrations compared to some all-in-one alternatives.
              </p>
            </div>
            <div className="card text-center">
              <h3 className="text-xl font-semibold mb-3">Learning Curve</h3>
              <p className="text-gray-600">
                While powerful, ClickFunnels can be complex for beginners who need simpler, more intuitive tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternatives Overview */}
      <section id="alternatives" className="py-16 px-4 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Top ClickFunnels Alternatives</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alternatives.map((alternative, index) => (
              <div key={index} className="card group hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{alternative.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{alternative.rating}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-brand-1 mb-1">{alternative.price}</div>
                  <div className="text-sm text-gray-600">Best for: {alternative.bestFor}</div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-green-600 mb-2">✅ Pros</h4>
                  <ul className="space-y-1 text-sm text-gray-700 mb-4">
                    {alternative.pros.slice(0, 3).map((pro, proIndex) => (
                      <li key={proIndex} className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="font-semibold text-red-600 mb-2">❌ Cons</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {alternative.cons.slice(0, 2).map((con, conIndex) => (
                      <li key={conIndex} className="flex items-start">
                        <span className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0">•</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={alternative.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full inline-flex items-center justify-center"
                >
                  Visit {alternative.name}
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Alternative Comparison Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 p-4 text-left font-semibold">Platform</th>
                  <th className="border border-gray-200 p-4 text-center font-semibold">Starting Price</th>
                  <th className="border border-gray-200 p-4 text-center font-semibold">Best For</th>
                  <th className="border border-gray-200 p-4 text-center font-semibold">Funnel Builder</th>
                  <th className="border border-gray-200 p-4 text-center font-semibold">Email Marketing</th>
                  <th className="border border-gray-200 p-4 text-center font-semibold">CRM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-4 font-medium">ClickFunnels</td>
                  <td className="border border-gray-200 p-4 text-center">$81/month</td>
                  <td className="border border-gray-200 p-4 text-center">Funnel Building</td>
                  <td className="border border-gray-200 p-4 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-gray-200 p-4 text-center">⭐⭐⭐</td>
                  <td className="border border-gray-200 p-4 text-center">❌</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 p-4 font-medium">Kajabi</td>
                  <td className="border border-gray-200 p-4 text-center">$149/month</td>
                  <td className="border border-gray-200 p-4 text-center">Course Creation</td>
                  <td className="border border-gray-200 p-4 text-center">⭐⭐⭐⭐</td>
                  <td className="border border-gray-200 p-4 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-gray-200 p-4 text-center">⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-medium">Systeme.io</td>
                  <td className="border border-gray-200 p-4 text-center">Free</td>
                  <td className="border border-gray-200 p-4 text-center">Budget Users</td>
                  <td className="border border-gray-200 p-4 text-center">⭐⭐⭐⭐</td>
                  <td className="border border-gray-200 p-4 text-center">⭐⭐⭐⭐</td>
                  <td className="border border-gray-200 p-4 text-center">⭐⭐⭐</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 p-4 font-medium">Podia</td>
                  <td className="border border-gray-200 p-4 text-center">$39/month</td>
                  <td className="border border-gray-200 p-4 text-center">Digital Products</td>
                  <td className="border border-gray-200 p-4 text-center">⭐⭐⭐</td>
                  <td className="border border-gray-200 p-4 text-center">⭐⭐⭐⭐</td>
                  <td className="border border-gray-200 p-4 text-center">⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-medium">GoHighLevel</td>
                  <td className="border border-gray-200 p-4 text-center">$97/month</td>
                  <td className="border border-gray-200 p-4 text-center">Agencies</td>
                  <td className="border border-gray-200 p-4 text-center">⭐⭐⭐⭐</td>
                  <td className="border border-gray-200 p-4 text-center">⭐⭐⭐⭐⭐</td>
                  <td className="border border-gray-200 p-4 text-center">⭐⭐⭐⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">How to Choose the Right Alternative</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Consider Your Budget</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Free options: Systeme.io, ConvertKit (limited)</li>
                <li>• Budget-friendly: Podia ($39), CartFlows ($39/year)</li>
                <li>• Mid-range: GoHighLevel ($97), Kajabi ($149)</li>
                <li>• Premium: Enterprise solutions</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Evaluate Your Needs</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Funnel building: ClickFunnels, Systeme.io</li>
                <li>• Course creation: Kajabi, Podia</li>
                <li>• Email marketing: GoHighLevel, ConvertKit</li>
                <li>• WordPress: CartFlows, Thrive Architect</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Check Technical Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Coding knowledge required</li>
                <li>• WordPress compatibility</li>
                <li>• Integration needs</li>
                <li>• Mobile responsiveness</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Test Before Committing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Free trials available</li>
                <li>• Money-back guarantees</li>
                <li>• Demo accounts</li>
                <li>• Community feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        items={faqItems}
        title="ClickFunnels Alternatives FAQ"
        subtitle="Common questions about choosing ClickFunnels alternatives"
      />

      {/* Final CTA */}
      <Callout
        title="Still Want to Try ClickFunnels?"
        subtitle="While alternatives offer different benefits, ClickFunnels remains the gold standard for funnel building. Start your free trial and see why thousands choose it."
        ctaText="Start ClickFunnels Free Trial"
        ctaHref="https://www.clickfunnels.com/signup-flow?aff=36738480f0374bbe21a0d263c8b707ef738b7c7b7eb67bda8f16f741f9edca5a"
      />
    </div>
  )
}

