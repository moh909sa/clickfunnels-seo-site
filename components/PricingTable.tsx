'use client'

import { useState } from 'react'
import { Check, Star, ArrowRight } from 'lucide-react'

interface PricingPlan {
  name: string
  monthlyPrice: number
  annualPrice: number
  features: string[]
  popular?: boolean
  cta: string
}

const plans: PricingPlan[] = [
  {
    name: 'Launch',
    monthlyPrice: 97,
    annualPrice: 81,
    features: [
      'Unlimited Funnels',
      '1 Workspace',
      '2 Team Members',
      '10K Contacts',
      '50K Emails/Month',
      '3 Courses',
      '5 Custom Domains',
      'Unlimited Visitors',
      'Group Onboarding Calls',
      'AI Tools (1M Words)',
      'Standard Support'
    ],
    cta: 'Start Free Trial'
  },
  {
    name: 'Scale',
    monthlyPrice: 197,
    annualPrice: 164,
    features: [
      'Unlimited Funnels',
      '5 Workspaces',
      '5 Team Members',
      '75K Contacts',
      '300K Emails/Month',
      '6 Courses',
      'Unlimited Custom Domains',
      'Unlimited Visitors',
      'Group Onboarding Calls',
      'AI Tools (2M Words)',
      'Priority + Live Chat Support',
      'Custom Code Editor',
      'Webhooks/Full API Access',
      'Appointments',
      'Conversion Boosters',
      'Countdown Funnels'
    ],
    popular: true,
    cta: 'Start Free Trial'
  },
  {
    name: 'Optimize',
    monthlyPrice: 297,
    annualPrice: 248,
    features: [
      'Unlimited Funnels',
      '10 Workspaces',
      '10 Team Members',
      '150K Contacts',
      '750K Emails/Month',
      '10 Courses',
      'Unlimited Custom Domains',
      'Unlimited Visitors',
      'Group Onboarding Calls',
      'AI Tools (5M Words)',
      'Priority + Live Chat Support',
      'Custom Code Editor',
      'Webhooks/Full API Access',
      'Appointments',
      'Conversion Boosters',
      'Countdown Funnels',
      'Affiliate Center'
    ],
    cta: 'Start Free Trial'
  }
]

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-fluid-3xl font-bold text-gray-900 mb-4">
            ClickFunnels Pricing Plans
          </h2>
          <p className="text-fluid-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include a 14-day free trial and 30-day money-back guarantee.
          </p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-brand-1' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
              <span className="ml-1 text-xs text-green-600 font-semibold">(Save 17%)</span>
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative card ${
                plan.popular ? 'ring-2 ring-brand-1 shadow-xl' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-brand-1 to-brand-2 text-white text-xs font-semibold px-4 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500">/month</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-gray-500">
                    Billed annually (${plan.annualPrice * 12})
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://www.clickfunnels.com/signup-flow?aff=36738480f0374bbe21a0d263c8b707ef738b7c7b7eb67bda8f16f741f9edca5a"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full btn-primary inline-flex items-center justify-center gap-2 ${
                  plan.popular ? 'from-brand-1 to-brand-2' : 'from-gray-600 to-gray-700'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include unlimited funnels, pages, and visitors
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>14-Day Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>30-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>No Setup Fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
