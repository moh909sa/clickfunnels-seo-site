'use client'

import { useState } from 'react'
import { Check, Star } from 'lucide-react'
import Link from 'next/link'

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: 'Launch',
      monthlyPrice: 97,
      annualPrice: 81,
      description: 'Best for Startups',
      features: [
        'Unlimited Funnels',
        '1 Workspace',
        '2 Team Members',
        '10K Contacts',
        '50K Emails/Mo',
        '3 Courses',
        '5 Custom Domains',
        'Unlimited Visitors',
        'Group Onboarding Calls',
        'AI Tools 1M Words',
        'Standard Support'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Scale',
      monthlyPrice: 197,
      annualPrice: 164,
      description: 'Most Popular Choice',
      features: [
        'Everything in Launch',
        '5 Workspaces',
        '5 Team Members',
        '75K Contacts',
        '300K Emails/Mo',
        '6 Courses',
        'Unlimited Custom Domains',
        'Appointments',
        'Conversion Boosters',
        'Countdown Funnels',
        'AI Tools 2M Words',
        'Priority + Live Chat Support',
        'Custom Code Editor',
        'Webhooks/Full API Access'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Optimize',
      monthlyPrice: 297,
      annualPrice: 248,
      description: 'For Growing Businesses',
      features: [
        'Everything in Scale',
        '10 Workspaces',
        '10 Team Members',
        '150K Contacts',
        '750K Emails/Mo',
        '10 Courses',
        'Affiliate Center',
        'AI Tools 5M Words'
      ],
      popular: false,
      cta: 'Start Free Trial'
    }
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-4">Choose Your ClickFunnels Plan</h2>
          <p className="text-gray-600 mb-8">
            All plans include a 14-day free trial and 30-day money-back guarantee
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm ${!isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
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
            <span className={`text-sm ${isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
              Annual
              <span className="ml-1 text-xs text-green-600">(Save 17%)</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`card relative ${
                plan.popular 
                  ? 'ring-2 ring-brand-1 shadow-xl scale-105' 
                  : 'hover:shadow-xl transition-shadow'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-brand-1 to-brand-2 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-gray-500">
                    Billed annually (${plan.annualPrice * 12})
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="https://www.clickfunnels.com/signup-flow?aff=36738480f0374bbe21a0d263c8b707ef738b7c7b7eb67bda8f16f741f9edca5a"
                className={`w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-200 inline-block ${
                  plan.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need more? Check out our{' '}
            <Link href="/clickfunnels-alternatives" className="text-brand-1 hover:underline font-semibold">
              ClickFunnels alternatives
            </Link>{' '}
            for other options.
          </p>
        </div>
      </div>
    </section>
  )
}
