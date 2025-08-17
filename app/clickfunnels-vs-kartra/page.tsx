import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import FAQ from '@/components/FAQ'
import Callout from '@/components/Callout'
import { CheckCircle, XCircle, Star, Zap, Users, Shield, TrendingUp, Mail, CreditCard, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ClickFunnels vs Kartra 2025: Which Sales Funnel Builder Wins?',
  description: 'Compare ClickFunnels vs Kartra head-to-head. See pricing, features, ease of use, and which platform is better for your business needs.',
  keywords: ['clickfunnels vs kartra', 'clickfunnels vs kartra comparison', 'clickfunnels vs kartra 2025', 'sales funnel builder comparison'],
  openGraph: {
    title: 'ClickFunnels vs Kartra 2025: Which Sales Funnel Builder Wins?',
    description: 'Compare ClickFunnels vs Kartra head-to-head. See pricing, features, ease of use, and which platform is better for your business needs.',
    url: 'https://clickfunnels-seo-site.vercel.app/clickfunnels-vs-kartra',
  },
}

const faqItems = [
  {
    question: "Is ClickFunnels better than Kartra?",
    answer: "It depends on your needs. ClickFunnels excels at funnel building and has a larger template library, while Kartra offers better email marketing automation and CRM features. ClickFunnels is better for pure funnel building, while Kartra is better for all-in-one marketing automation."
  },
  {
    question: "Which platform is easier to use?",
    answer: "ClickFunnels has a steeper learning curve but offers more advanced funnel building capabilities. Kartra is generally easier to use for beginners, especially for email marketing and automation. Both platforms have drag-and-drop interfaces, but Kartra's is more intuitive."
  },
  {
    question: "Does Kartra have better email marketing?",
    answer: "Yes, Kartra has superior email marketing features including advanced automation workflows, behavioral targeting, and better segmentation. ClickFunnels has basic email marketing, but Kartra is specifically designed for comprehensive marketing automation."
  },
  {
    question: "Can I migrate from ClickFunnels to Kartra?",
    answer: "Yes, you can migrate, but it's not seamless. You'll need to rebuild your funnels in Kartra and export/import your contact lists. Kartra does offer migration assistance, but expect to spend time recreating your funnel structure."
  },
  {
    question: "Which platform has better templates?",
    answer: "ClickFunnels has a larger and more diverse template library with over 100+ funnel templates. Kartra has fewer templates but they're more modern and mobile-optimized. ClickFunnels templates are better for sales funnels, while Kartra excels at marketing pages."
  },
  {
    question: "Is ClickFunnels more expensive than Kartra?",
    answer: "ClickFunnels is generally more expensive, starting at $97/month vs Kartra's $99/month. However, ClickFunnels offers more advanced funnel building features, while Kartra provides better value for marketing automation and CRM functionality."
  }
]

export default function ClickFunnelsVsKartraPage() {
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
              <a href="/clickfunnels-alternatives" className="text-gray-600 hover:text-brand-1 transition-colors">Alternatives</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Hero
        headline="ClickFunnels vs Kartra 2025: Which Sales Funnel Builder Wins?"
        subtext="Compare ClickFunnels vs Kartra head-to-head. See pricing, features, ease of use, and which platform is better for your business needs and marketing goals."
        ctaText="Try ClickFunnels Free"
      />

      {/* Quick Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-fluid-3xl font-bold text-gray-900 mb-4">
              ClickFunnels vs Kartra: At a Glance
            </h2>
            <p className="text-fluid-lg text-gray-600 max-w-2xl mx-auto">
              Here's a quick overview of how these two platforms stack up against each other.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* ClickFunnels */}
            <div className="card text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-brand-1 to-brand-2 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ClickFunnels</h3>
              <div className="text-3xl font-bold text-brand-1 mb-2">$97/month</div>
              <p className="text-gray-600 mb-6">Starting price</p>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Unlimited funnels & pages</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">100+ funnel templates</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Advanced funnel analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">A/B testing tools</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Membership site builder</span>
                </div>
              </div>
            </div>

            {/* Kartra */}
            <div className="card text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kartra</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">$99/month</div>
              <p className="text-gray-600 mb-6">Starting price</p>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Advanced email automation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Built-in CRM system</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Behavioral targeting</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Video hosting & streaming</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Affiliate management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-fluid-3xl font-bold text-gray-900 mb-4">
              Detailed Feature Comparison
            </h2>
            <p className="text-fluid-lg text-gray-600 max-w-2xl mx-auto">
              See exactly how ClickFunnels and Kartra compare across all major features and capabilities.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg border border-gray-100">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-6 font-semibold text-gray-900">Feature</th>
                  <th className="text-center p-6 font-semibold text-gray-900">ClickFunnels</th>
                  <th className="text-center p-6 font-semibold text-gray-900">Kartra</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-6 font-medium text-gray-900">Starting Price</td>
                  <td className="p-6 text-center text-gray-900">$97/month</td>
                  <td className="p-6 text-center text-gray-900">$99/month</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900">Funnel Builder</td>
                  <td className="p-6 text-center text-green-600 font-semibold">⭐⭐⭐⭐⭐</td>
                  <td className="p-6 text-center text-blue-600 font-semibold">⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900">Email Marketing</td>
                  <td className="p-6 text-center text-gray-600">⭐⭐⭐</td>
                  <td className="p-6 text-center text-green-600 font-semibold">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900">CRM Features</td>
                  <td className="p-6 text-center text-gray-600">⭐⭐⭐</td>
                  <td className="p-6 text-center text-green-600 font-semibold">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900">Template Library</td>
                  <td className="p-6 text-center text-green-600 font-semibold">⭐⭐⭐⭐⭐</td>
                  <td className="p-6 text-center text-gray-600">⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900">Ease of Use</td>
                  <td className="p-6 text-center text-gray-600">⭐⭐⭐</td>
                  <td className="p-6 text-center text-green-600 font-semibold">⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900">Analytics</td>
                  <td className="p-6 text-center text-green-600 font-semibold">⭐⭐⭐⭐⭐</td>
                  <td className="p-6 text-center text-gray-600">⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900">Mobile Optimization</td>
                  <td className="p-6 text-center text-gray-600">⭐⭐⭐⭐</td>
                  <td className="p-6 text-center text-green-600 font-semibold">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900">Customer Support</td>
                  <td className="p-6 text-center text-green-600 font-semibold">⭐⭐⭐⭐⭐</td>
                  <td className="p-6 text-center text-gray-600">⭐⭐⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ClickFunnels Strengths */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-fluid-3xl font-bold text-gray-900 mb-4">
              ClickFunnels Strengths
            </h2>
            <p className="text-fluid-lg text-gray-600 max-w-2xl mx-auto">
              What makes ClickFunnels the go-to choice for serious funnel builders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-1 to-brand-2 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Superior Funnel Building</h3>
              <p className="text-gray-600">
                ClickFunnels was built specifically for creating high-converting sales funnels with advanced features like A/B testing, conversion tracking, and optimization tools.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-2 to-brand-3 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Extensive Template Library</h3>
              <p className="text-gray-600">
                Access to 100+ professionally designed funnel templates that have been proven to convert across various industries and use cases.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-3 to-brand-1 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Track Record</h3>
              <p className="text-gray-600">
                Used by over 150,000 entrepreneurs and businesses, with a proven track record of helping companies increase conversions and sales.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Analytics</h3>
              <p className="text-gray-600">
                Comprehensive funnel analytics and conversion tracking to help you optimize your sales funnels for maximum performance.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Team Collaboration</h3>
              <p className="text-gray-600">
                Built-in team collaboration features that make it easy to work with designers, copywriters, and marketing teams.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Integration</h3>
              <p className="text-gray-600">
                Seamless integration with popular email marketing platforms and built-in email automation capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kartra Strengths */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-fluid-3xl font-bold text-gray-900 mb-4">
              Kartra Strengths
            </h2>
            <p className="text-fluid-lg text-gray-600 max-w-2xl mx-auto">
              What makes Kartra a powerful all-in-one marketing platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Email Marketing</h3>
              <p className="text-gray-600">
                Superior email automation with behavioral targeting, advanced segmentation, and sophisticated workflow capabilities.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Built-in CRM</h3>
              <p className="text-gray-600">
                Comprehensive CRM system with lead scoring, pipeline management, and advanced customer relationship tools.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Automation</h3>
              <p className="text-gray-600">
                Powerful marketing automation with behavioral triggers, conditional logic, and multi-channel campaign management.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Video Hosting</h3>
              <p className="text-gray-600">
                Built-in video hosting and streaming capabilities with advanced video marketing features and analytics.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Affiliate Management</h3>
              <p className="text-gray-600">
                Comprehensive affiliate management system with tracking, payouts, and performance analytics.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ease of Use</h3>
              <p className="text-gray-600">
                More intuitive interface and easier learning curve, especially for beginners in digital marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        items={faqItems}
        title="ClickFunnels vs Kartra FAQ"
        subtitle="Get answers to the most common questions about choosing between ClickFunnels and Kartra."
      />

      {/* Final CTA */}
      <Callout
        title="Ready to Choose Your Platform?"
        subtitle="Both ClickFunnels and Kartra offer free trials. Test them out and see which one fits your business needs better!"
        ctaText="Try ClickFunnels Free"
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
