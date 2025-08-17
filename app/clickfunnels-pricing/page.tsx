import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import PricingTable from '@/components/PricingTable'
import FAQ from '@/components/FAQ'
import Callout from '@/components/Callout'
import { CheckCircle, Star, TrendingUp, Zap, Users, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ClickFunnels Pricing 2025: Complete Plans & Cost Breakdown',
  description: 'Discover ClickFunnels pricing plans for 2025. Compare Launch ($81), Scale ($164), Optimize ($248), and Dominate plans. Includes free trial and money-back guarantee.',
  keywords: ['clickfunnels pricing', 'clickfunnels cost', 'clickfunnels plans', 'clickfunnels pricing 2025', 'clickfunnels monthly cost'],
  openGraph: {
    title: 'ClickFunnels Pricing 2025: Complete Plans & Cost Breakdown',
    description: 'Discover ClickFunnels pricing plans for 2025. Compare Launch ($81), Scale ($164), Optimize ($248), and Dominate plans.',
    url: 'https://clickfunnels-seo-site.vercel.app/clickfunnels-pricing',
  },
}

const faqItems = [
  {
    question: "How much does ClickFunnels cost per month?",
    answer: "ClickFunnels offers four main pricing tiers: Launch at $81/month (annual billing), Scale at $164/month, Optimize at $248/month, and Dominate at $5,997/year. Monthly billing costs more: Launch ($97), Scale ($197), and Optimize ($297)."
  },
  {
    question: "What's the difference between ClickFunnels plans?",
    answer: "The main differences are in workspace limits, team members, contacts, email limits, courses, and advanced features. Launch is for startups, Scale adds more workspaces and features, Optimize includes affiliate management, and Dominate is for enterprise users with VIP support."
  },
  {
    question: "Can I cancel ClickFunnels anytime?",
    answer: "Yes, you can cancel ClickFunnels at any time. There are no long-term contracts, and you can cancel through your account settings. However, be aware that you'll lose access to your funnels and data immediately upon cancellation."
  },
  {
    question: "Does ClickFunnels offer a free trial?",
    answer: "Yes, ClickFunnels offers a 14-day free trial for all plans. You can test all features without providing credit card information. After the trial, you'll need to choose a plan to continue using the platform."
  },
  {
    question: "Which ClickFunnels plan is best for beginners?",
    answer: "The Launch plan ($81/month) is ideal for beginners and small businesses. It includes unlimited funnels, 1 workspace, 2 team members, and essential features to get started. You can always upgrade as your business grows."
  },
  {
    question: "Are there any hidden fees with ClickFunnels?",
    answer: "No, ClickFunnels pricing is transparent with no hidden fees. The monthly/annual subscription covers all features within your plan. However, you may incur additional costs for third-party integrations, custom domains, or advanced features not included in your plan."
  }
]

export default function ClickFunnelsPricingPage() {
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
              <a href="/clickfunnels-vs-kartra" className="text-gray-600 hover:text-brand-1 transition-colors">vs Kartra</a>
              <a href="/clickfunnels-alternatives" className="text-gray-600 hover:text-brand-1 transition-colors">Alternatives</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Hero
        headline="ClickFunnels Pricing 2025: Complete Plans & Cost Breakdown"
        subtext="Discover the perfect ClickFunnels plan for your business. Compare Launch ($81), Scale ($164), Optimize ($248), and Dominate plans with detailed feature breakdowns and pricing analysis."
        ctaText="Start Free Trial"
      />

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-fluid-3xl font-bold text-gray-900 mb-4">
              Why Choose ClickFunnels?
            </h2>
            <p className="text-fluid-lg text-gray-600 max-w-2xl mx-auto">
              ClickFunnels has helped over 150,000 entrepreneurs build high-converting sales funnels and grow their businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-1 to-brand-2 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Unlimited Funnels</h3>
              <p className="text-gray-600">
                Create as many sales funnels as you need without worrying about limits or restrictions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-2 to-brand-3 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Drag & Drop Builder</h3>
              <p className="text-gray-600">
                No coding required. Build professional funnels with our intuitive drag-and-drop interface.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-3 to-brand-1 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Team Collaboration</h3>
              <p className="text-gray-600">
                Work together with your team members on funnels, courses, and marketing campaigns.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Templates</h3>
              <p className="text-gray-600">
                Access hundreds of pre-built funnel templates that have been proven to convert.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security and 99.9% uptime guarantee for your business-critical funnels.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Award-Winning Support</h3>
              <p className="text-gray-600">
                Get help when you need it with our award-winning customer support team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <PricingTable />

      {/* Plan Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-fluid-3xl font-bold text-gray-900 mb-4">
              Detailed Plan Comparison
            </h2>
            <p className="text-fluid-lg text-gray-600 max-w-2xl mx-auto">
              See exactly what's included in each plan to make the best choice for your business.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg border border-gray-100">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-6 font-semibold text-gray-900">Feature</th>
                  <th className="text-center p-6 font-semibold text-gray-900">Launch</th>
                  <th className="text-center p-6 font-semibold text-gray-900 bg-brand-1/5">Scale</th>
                  <th className="text-center p-6 font-semibold text-gray-900">Optimize</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="p-6 font-medium text-gray-900">Monthly Price</td>
                  <td className="p-6 text-center text-2xl font-bold text-gray-900">$97</td>
                  <td className="p-6 text-center text-2xl font-bold text-brand-1 bg-brand-1/5">$197</td>
                  <td className="p-6 text-center text-2xl font-bold text-gray-900">$297</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900">Annual Price</td>
                  <td className="p-6 text-center text-gray-600">$81/mo</td>
                  <td className="p-6 text-center text-gray-600 bg-brand-1/5">$164/mo</td>
                  <td className="p-6 text-center text-gray-600">$248/mo</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900">Workspaces</td>
                  <td className="p-6 text-center text-gray-600">1</td>
                  <td className="p-6 text-center text-gray-600 bg-brand-1/5">5</td>
                  <td className="p-6 text-center text-gray-600">10</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900">Team Members</td>
                  <td className="p-6 text-center text-gray-600">2</td>
                  <td className="p-6 text-center text-gray-600 bg-brand-1/5">5</td>
                  <td className="p-6 text-center text-gray-600">10</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900">Contacts</td>
                  <td className="p-6 text-center text-gray-600">10,000</td>
                  <td className="p-6 text-center text-gray-600 bg-brand-1/5">75,000</td>
                  <td className="p-6 text-center text-gray-600">150,000</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900">Email Limit</td>
                  <td className="p-6 text-center text-gray-600">50K/month</td>
                  <td className="p-6 text-center text-gray-600 bg-brand-1/5">300K/month</td>
                  <td className="p-6 text-center text-gray-600">750K/month</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900">Courses</td>
                  <td className="p-6 text-center text-gray-600">3</td>
                  <td className="p-6 text-center text-gray-600 bg-brand-1/5">6</td>
                  <td className="p-6 text-center text-gray-600">10</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900">Custom Domains</td>
                  <td className="p-6 text-center text-gray-600">5</td>
                  <td className="p-6 text-center text-gray-600 bg-brand-1/5">Unlimited</td>
                  <td className="p-6 text-center text-gray-600">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900">Appointments</td>
                  <td className="p-6 text-center text-gray-400">❌</td>
                  <td className="p-6 text-center text-green-500 bg-brand-1/5">✅</td>
                  <td className="p-6 text-center text-green-500">✅</td>
                </tr>
                <tr>
                  <td className="p-6 font-medium text-gray-900">Affiliate Center</td>
                  <td className="p-6 text-center text-gray-400">❌</td>
                  <td className="p-6 text-center text-gray-400 bg-brand-1/5">❌</td>
                  <td className="p-6 text-center text-green-500">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        items={faqItems}
        title="ClickFunnels Pricing FAQ"
        subtitle="Get answers to the most common questions about ClickFunnels pricing and plans."
      />

      {/* Final CTA */}
      <Callout
        title="Ready to Start Building High-Converting Funnels?"
        subtitle="Join thousands of entrepreneurs who are already using ClickFunnels to grow their businesses. Start your free trial today!"
        ctaText="Start Your Free Trial"
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
