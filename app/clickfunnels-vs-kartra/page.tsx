import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import Callout from '@/components/Callout'
import { Check, X, Minus } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ClickFunnels vs Kartra 2025: Which Sales Funnel Builder Wins?',
  description: 'Compare ClickFunnels vs Kartra in 2025. See pricing, features, pros & cons, and find which platform is better for your business needs.',
  keywords: [
    'clickfunnels vs kartra',
    'clickfunnels vs kartra 2025',
    'kartra vs clickfunnels',
    'clickfunnels vs kartra comparison',
    'which is better clickfunnels or kartra'
  ],
  openGraph: {
    title: 'ClickFunnels vs Kartra 2025: Which Sales Funnel Builder Wins?',
    description: 'Compare ClickFunnels vs Kartra in 2025. See pricing, features, pros & cons, and find which platform is better for your business needs.',
    url: 'https://clickfunnels-seo-site.vercel.app/clickfunnels-vs-kartra',
  },
}

const faqItems = [
  {
    question: "Which platform is better for beginners?",
    answer: "ClickFunnels is generally better for beginners due to its simpler interface and extensive template library. Kartra has more features but a steeper learning curve. If you're new to funnel building, ClickFunnels' drag-and-drop editor and proven templates make it easier to get started quickly."
  },
  {
    question: "Does Kartra have better email marketing than ClickFunnels?",
    answer: "Yes, Kartra has superior email marketing capabilities. It includes both broadcasts and sequences with advanced automation, behavioral triggers, and segmentation. ClickFunnels only offers basic broadcast emails and requires third-party integrations for advanced email marketing features."
  },
  {
    question: "Which platform offers better templates?",
    answer: "ClickFunnels has a larger and more diverse template library with proven conversion rates. Their templates are created by successful entrepreneurs and marketers. Kartra has fewer templates but they're well-designed and cover most common use cases. ClickFunnels wins for template variety and proven results."
  },
  {
    question: "Can I migrate from one platform to the other?",
    answer: "Migration between platforms is possible but not seamless. You'll need to rebuild your funnels and pages, though you can copy content and design elements. Email lists and customer data can usually be exported and imported. Consider using a migration service for complex setups."
  },
  {
    question: "Which platform has better customer support?",
    answer: "Both platforms offer good support, but ClickFunnels has more extensive resources including Funnel Flix, weekly hackathons, and a large community. Kartra provides 24/7 support with live chat and comprehensive documentation. ClickFunnels wins for educational resources, while Kartra wins for immediate support availability."
  },
  {
    question: "Are there any hidden costs with either platform?",
    answer: "ClickFunnels pricing is transparent with no hidden fees. All features within your plan are included. Kartra also has transparent pricing, but you may need to pay extra for certain integrations or advanced features. Both platforms include most essential features in their base plans."
  }
]

export default function ClickFunnelsVsKartraPage() {
  return (
    <div className="min-h-screen">
      <Hero
        headline="ClickFunnels vs Kartra 2025: Which Sales Funnel Builder Wins?"
        subtext="Get a detailed comparison of ClickFunnels vs Kartra. Compare pricing, features, ease of use, and find which platform is right for your business goals."
        ctaText="Try ClickFunnels Free"
        ctaHref="https://www.clickfunnels.com/signup-flow?aff=36738480f0374bbe21a0d263c8b707ef738b7c7b7eb67bda8f16f741f9edca5a"
        secondaryCtaText="Learn More About Kartra"
        secondaryCtaHref="https://home.kartra.com"
      />

      {/* Quick Comparison */}
      <section className="py-16 px-4 bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Quick Comparison Overview</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card text-center">
              <h3 className="text-2xl font-bold mb-4">ClickFunnels</h3>
              <div className="text-4xl font-bold text-brand-1 mb-2">$81</div>
              <div className="text-gray-600 mb-4">per month (annual)</div>
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Unlimited funnels & pages
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Extensive template library
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Proven conversion strategies
                </li>
                <li className="flex items-center">
                  <X className="w-5 h-5 text-red-500 mr-2" />
                  Basic email marketing
                </li>
              </ul>
            </div>
            <div className="card text-center">
              <h3 className="text-2xl font-bold mb-4">Kartra</h3>
              <div className="text-4xl font-bold text-brand-2 mb-2">$119</div>
              <div className="text-gray-600 mb-4">per month (annual)</div>
              <ul className="text-left space-y-2">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  All-in-one platform
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Advanced email automation
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Built-in CRM & helpdesk
                </li>
                <li className="flex items-center">
                  <X className="w-5 h-5 text-red-500 mr-2" />
                  Steeper learning curve
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Feature Comparison */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Feature-by-Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden bg-white">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 p-4 text-left font-semibold">Feature</th>
                  <th className="border border-gray-200 p-4 text-center font-semibold">ClickFunnels</th>
                  <th className="border border-gray-200 p-4 text-center font-semibold">Kartra</th>
                  <th className="border border-gray-200 p-4 text-center font-semibold">Winner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-4 font-medium">Starting Price</td>
                  <td className="border border-gray-200 p-4 text-center">$81/month</td>
                  <td className="border border-gray-200 p-4 text-center">$119/month</td>
                  <td className="border border-gray-200 p-4 text-center text-green-600 font-semibold">ClickFunnels</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 p-4 font-medium">Funnel Builder</td>
                  <td className="border border-gray-200 p-4 text-center">
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="border border-gray-200 p-4 text-center text-gray-600">Tie</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-medium">Landing Pages</td>
                  <td className="border border-gray-200 p-4 text-center">
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="border border-gray-200 p-4 text-center text-gray-600">Tie</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 p-4 font-medium">Email Marketing</td>
                  <td className="border border-gray-200 p-4 text-center">
                    <Minus className="w-5 h-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="border border-gray-200 p-4 text-center text-blue-600 font-semibold">Kartra</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-medium">Membership Sites</td>
                  <td className="border border-gray-200 p-4 text-center">
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="border border-gray-200 p-4 text-center text-gray-600">Tie</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 p-4 font-medium">CRM System</td>
                  <td className="border border-gray-200 p-4 text-center">
                    <X className="w-5 h-5 text-red-500 mx-auto" />
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="border border-gray-200 p-4 text-center text-blue-600 font-semibold">Kartra</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-medium">Helpdesk</td>
                  <td className="border border-gray-200 p-4 text-center">
                    <X className="w-5 h-5 text-red-500 mx-auto" />
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="border border-gray-200 p-4 text-center text-blue-600 font-semibold">Kartra</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 p-4 font-medium">Template Library</td>
                  <td className="border border-gray-200 p-4 text-center">
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    <Minus className="w-5 h-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="border border-gray-200 p-4 text-center text-green-600 font-semibold">ClickFunnels</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-medium">Ease of Use</td>
                  <td className="border border-gray-200 p-4 text-center">
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    <Minus className="w-5 h-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="border border-gray-200 p-4 text-center text-green-600 font-semibold">ClickFunnels</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 p-4 font-medium">Customer Support</td>
                  <td className="border border-gray-200 p-4 text-center">
                    <Minus className="w-5 h-5 text-gray-400 mx-auto" />
                  </td>
                  <td className="border border-gray-200 p-4 text-center">
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="border border-gray-200 p-4 text-center text-blue-600 font-semibold">Kartra</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-16 px-4 bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Pros and Cons Analysis</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">ClickFunnels Pros & Cons</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">✅ Pros</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• More affordable starting price</li>
                    <li>• Extensive template library</li>
                    <li>• Easier to use for beginners</li>
                    <li>• Proven conversion strategies</li>
                    <li>• Strong community and training</li>
                    <li>• Unlimited funnels and pages</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">❌ Cons</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Basic email marketing only</li>
                    <li>• No built-in CRM</li>
                    <li>• Limited integrations</li>
                    <li>• Higher learning curve for advanced features</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Kartra Pros & Cons</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">✅ Pros</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• All-in-one platform</li>
                    <li>• Advanced email automation</li>
                    <li>• Built-in CRM system</li>
                    <li>• Helpdesk functionality</li>
                    <li>• Better customer support</li>
                    <li>• More integrations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">❌ Cons</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Higher starting price</li>
                    <li>• Steeper learning curve</li>
                    <li>• Fewer templates</li>
                    <li>• Can be overwhelming for beginners</li>
                    <li>• More expensive for small businesses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Choose What */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Who Should Choose What?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-center">Choose ClickFunnels If:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>You're a beginner to funnel building</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>You want proven, high-converting templates</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>You have a limited budget</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>You need quick setup and deployment</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>You want extensive training resources</span>
                </li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-center">Choose Kartra If:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>You need an all-in-one solution</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Advanced email marketing is crucial</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>You want built-in CRM and helpdesk</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>You're comfortable with complex tools</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>You have a larger budget for tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final Verdict */}
      <section className="py-16 px-4 bg-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Final Verdict</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            <strong>ClickFunnels wins for beginners and budget-conscious users</strong> who want to quickly build proven sales funnels. 
            <strong>Kartra wins for established businesses</strong> who need advanced features and an all-in-one platform.
          </p>
          <p className="text-gray-600 mb-8">
            If you're just starting out or want to focus on funnel building with proven templates, go with ClickFunnels. 
            If you need advanced marketing automation, CRM, and helpdesk features, Kartra is the better choice.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        items={faqItems}
        title="ClickFunnels vs Kartra FAQ"
        subtitle="Common questions about choosing between these platforms"
      />

      {/* Final CTA */}
      <Callout
        title="Ready to Build Your First Funnel?"
        subtitle="Start with ClickFunnels and get access to proven templates, extensive training, and a 14-day free trial."
        ctaText="Start ClickFunnels Free Trial"
        ctaHref="https://www.clickfunnels.com/signup-flow?aff=36738480f0374bbe21a0d263c8b707ef738b7c7b7eb67bda8f16f741f9edca5a"
      />
    </div>
  )
}
