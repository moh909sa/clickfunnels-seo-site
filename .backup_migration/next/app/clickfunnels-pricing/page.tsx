import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import PricingTable from '@/components/PricingTable'
import FAQ from '@/components/FAQ'
import Callout from '@/components/Callout'

export const metadata: Metadata = {
  title: 'ClickFunnels Pricing 2025: Complete Plans & Cost Breakdown',
  description: 'Get ClickFunnels pricing details for 2025. Compare Launch, Scale, Optimize & Dominate plans. Includes free trial, features, and money-back guarantee.',
  keywords: [
    'clickfunnels pricing',
    'clickfunnels cost',
    'clickfunnels plans 2025',
    'clickfunnels pricing plans',
    'clickfunnels monthly cost',
    'clickfunnels annual pricing'
  ],
  openGraph: {
    title: 'ClickFunnels Pricing 2025: Complete Plans & Cost Breakdown',
    description: 'Get ClickFunnels pricing details for 2025. Compare Launch, Scale, Optimize & Dominate plans. Includes free trial, features, and money-back guarantee.',
    url: 'https://clickfunnels-seo-site.vercel.app/clickfunnels-pricing',
  },
}

const faqItems = [
  {
    question: "How much does ClickFunnels cost per month?",
    answer: "ClickFunnels pricing starts at $81/month for the Launch plan (billed annually) or $97/month (billed monthly). The Scale plan costs $164/month annually or $197/month monthly, while the Optimize plan is $248/month annually or $297/month monthly. The Dominate plan is $5,997/year (annual only)."
  },
  {
    question: "Which ClickFunnels plan is best for beginners?",
    answer: "The Launch plan ($81/month) is ideal for beginners and startups. It includes unlimited funnels, 1 workspace, 2 team members, 10K contacts, 50K emails/month, 3 courses, and 5 custom domains. This plan provides all the essential features to get started with sales funnels."
  },
  {
    question: "Can I cancel my ClickFunnels subscription?",
    answer: "Yes, you can cancel your ClickFunnels subscription at any time. There are no long-term contracts, and you can cancel through your account settings. Your access will continue until the end of your current billing period."
  },
  {
    question: "Does ClickFunnels offer a free trial?",
    answer: "Yes, ClickFunnels offers a 14-day free trial for all plans. You can test all features without providing credit card information. After the trial, you can choose to continue with a paid plan or cancel without any charges."
  },
  {
    question: "What's the difference between monthly and annual billing?",
    answer: "Annual billing offers significant savings - approximately 17% off compared to monthly billing. For example, the Launch plan costs $81/month annually vs $97/month monthly, saving you $194 per year. All plans include the same features regardless of billing cycle."
  },
  {
    question: "Which plan includes unlimited funnels?",
    answer: "All ClickFunnels plans include unlimited funnels, unlimited pages, and unlimited visitors. The main differences between plans are in the number of workspaces, team members, contacts, emails, courses, and advanced features like custom code editor and API access."
  },
  {
    question: "Do ClickFunnels plans include email marketing?",
    answer: "ClickFunnels includes basic email marketing capabilities for broadcasts, but for advanced email automation and sequences, you'll need to integrate with third-party email marketing services like ActiveCampaign, Mailchimp, or ConvertKit."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can upgrade or downgrade your ClickFunnels plan at any time. Upgrades take effect immediately, while downgrades take effect at the end of your current billing cycle. You can manage plan changes through your account dashboard."
  }
]

export default function ClickFunnelsPricingPage() {
  return (
    <div className="min-h-screen">
      <Hero
        headline="ClickFunnels Pricing 2025: Complete Plans & Cost Breakdown"
        subtext="Discover ClickFunnels pricing plans from Launch to Dominate. Get detailed breakdowns of features, costs, and find the perfect plan for your business size and needs."
        ctaText="Start Free Trial"
        ctaHref="https://www.clickfunnels.com/signup-flow?aff=36738480f0374bbe21a0d263c8b707ef738b7c7b7eb67bda8f16f741f9edca5a"
        secondaryCtaText="View All Plans"
        secondaryCtaHref="#pricing"
      />

      {/* Pricing Table */}
      <div id="pricing">
        <PricingTable />
      </div>

      {/* Detailed Plan Comparison */}
      <section className="py-16 px-4 bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Detailed Plan Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 p-4 text-left font-semibold">Feature</th>
                  <th className="border border-gray-200 p-4 text-center font-semibold">Launch</th>
                  <th className="border border-gray-200 p-4 text-center font-semibold">Scale</th>
                  <th className="border border-gray-200 p-4 text-center font-semibold">Optimize</th>
                  <th className="border border-gray-200 p-4 text-center font-semibold">Dominate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-4 font-medium">Monthly Price (Annual)</td>
                  <td className="border border-gray-200 p-4 text-center">$81</td>
                  <td className="border border-gray-200 p-4 text-center">$164</td>
                  <td className="border border-gray-200 p-4 text-center">$248</td>
                  <td className="border border-gray-200 p-4 text-center">$500</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 p-4 font-medium">Workspaces</td>
                  <td className="border border-gray-200 p-4 text-center">1</td>
                  <td className="border border-gray-200 p-4 text-center">5</td>
                  <td className="border border-gray-200 p-4 text-center">10</td>
                  <td className="border border-gray-200 p-4 text-center">20</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-medium">Team Members</td>
                  <td className="border border-gray-200 p-4 text-center">2</td>
                  <td className="border border-gray-200 p-4 text-center">5</td>
                  <td className="border border-gray-200 p-4 text-center">10</td>
                  <td className="border border-gray-200 p-4 text-center">20</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 p-4 font-medium">Contacts</td>
                  <td className="border border-gray-200 p-4 text-center">10K</td>
                  <td className="border border-gray-200 p-4 text-center">75K</td>
                  <td className="border border-gray-200 p-4 text-center">150K</td>
                  <td className="border border-gray-200 p-4 text-center">400K</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-medium">Emails/Month</td>
                  <td className="border border-gray-200 p-4 text-center">50K</td>
                  <td className="border border-gray-200 p-4 text-center">300K</td>
                  <td className="border border-gray-200 p-4 text-center">750K</td>
                  <td className="border border-gray-200 p-4 text-center">1.2M</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 p-4 font-medium">Courses</td>
                  <td className="border border-gray-200 p-4 text-center">3</td>
                  <td className="border border-gray-200 p-4 text-center">6</td>
                  <td className="border border-gray-200 p-4 text-center">10</td>
                  <td className="border border-gray-200 p-4 text-center">20</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-medium">Custom Domains</td>
                  <td className="border border-gray-200 p-4 text-center">5</td>
                  <td className="border border-gray-200 p-4 text-center">Unlimited</td>
                  <td className="border border-gray-200 p-4 text-center">Unlimited</td>
                  <td className="border border-gray-200 p-4 text-center">Unlimited</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 p-4 font-medium">AI Tools</td>
                  <td className="border border-gray-200 p-4 text-center">1M Words</td>
                  <td className="border border-gray-200 p-4 text-center">2M Words</td>
                  <td className="border border-gray-200 p-4 text-center">5M Words</td>
                  <td className="border border-gray-200 p-4 text-center">10M Words</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-4 font-medium">Support</td>
                  <td className="border border-gray-200 p-4 text-center">Standard</td>
                  <td className="border border-gray-200 p-4 text-center">Priority + Chat</td>
                  <td className="border border-gray-200 p-4 text-center">Priority + Chat</td>
                  <td className="border border-gray-200 p-4 text-center">VIP</td>
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
        subtitle="Common questions about ClickFunnels pricing and plans"
      />

      {/* Final CTA */}
      <Callout
        title="Ready to Start Building High-Converting Funnels?"
        subtitle="Join thousands of entrepreneurs who have built successful businesses with ClickFunnels. Start your 14-day free trial today."
        ctaText="Start Free Trial"
        ctaHref="https://www.clickfunnels.com/signup-flow?aff=36738480f0374bbe21a0d263c8b707ef738b7c7b7eb67bda8f16f741f9edca5a"
      />
    </div>
  )
}
