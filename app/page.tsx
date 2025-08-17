import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, Zap, Users, TrendingUp } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-1 to-brand-2 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">ClickFunnels Guide</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/clickfunnels-pricing" className="text-gray-600 hover:text-brand-1 transition-colors">
                Pricing
              </Link>
              <Link href="/clickfunnels-vs-kartra" className="text-gray-600 hover:text-brand-1 transition-colors">
                vs Kartra
              </Link>
              <Link href="/clickfunnels-alternatives" className="text-gray-600 hover:text-brand-1 transition-colors">
                Alternatives
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-1/5 via-brand-2/5 to-brand-3/5"></div>
        <div className="relative container-custom text-center">
          <h1 className="text-fluid-4xl md:text-fluid-5xl font-bold text-gray-900 mb-6">
            The Complete{' '}
            <span className="gradient-text">ClickFunnels Guide</span>
          </h1>
          <p className="text-fluid-lg md:text-fluid-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover ClickFunnels pricing, alternatives, and comparisons. Get detailed insights on plans, features, and find the best sales funnel builder for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="https://www.clickfunnels.com/signup-flow?aff=36738480f0374bbe21a0d263c8b707ef738b7c7b7eb67bda8f16f741f9edca5a"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Try ClickFunnels Free
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link href="/clickfunnels-pricing" className="btn-secondary">
              View Pricing Plans
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>14-Day Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span>4.8/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" />
              <span>150K+ Users</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-fluid-3xl font-bold text-gray-900 mb-4">
              Everything You Need to Know About ClickFunnels
            </h2>
            <p className="text-fluid-lg text-gray-600 max-w-2xl mx-auto">
              From pricing plans to competitor comparisons, we've got you covered with comprehensive guides and insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-1 to-brand-2 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pricing & Plans</h3>
              <p className="text-gray-600 mb-4">
                Detailed breakdown of all ClickFunnels pricing plans, features, and which one is right for your business.
              </p>
              <Link href="/clickfunnels-pricing" className="text-brand-1 hover:text-brand-2 font-medium inline-flex items-center gap-1">
                View Pricing
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-2 to-brand-3 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">vs Kartra</h3>
              <p className="text-gray-600 mb-4">
                Head-to-head comparison of ClickFunnels vs Kartra to help you choose the best platform.
              </p>
              <Link href="/clickfunnels-vs-kartra" className="text-brand-1 hover:text-brand-2 font-medium inline-flex items-center gap-1">
                Compare Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-3 to-brand-1 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Alternatives</h3>
              <p className="text-gray-600 mb-4">
                Discover 15+ ClickFunnels alternatives that might be better suited for your needs and budget.
              </p>
              <Link href="/clickfunnels-alternatives" className="text-brand-1 hover:text-brand-2 font-medium inline-flex items-center gap-1">
                Explore Alternatives
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-1 to-brand-2">
        <div className="container-custom text-center">
          <h2 className="text-fluid-3xl font-bold text-white mb-6">
            Ready to Build High-Converting Sales Funnels?
          </h2>
          <p className="text-fluid-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who are already using ClickFunnels to grow their businesses and increase conversions.
          </p>
          <a 
            href="https://www.clickfunnels.com/signup-flow?aff=36738480f0374bbe21a0d263c8b707ef738b7c7b7eb67bda8f16f741f9edca5a"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-1 font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
          >
            Start Your Free Trial
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-white/70 text-sm mt-4">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-brand-1 to-brand-2 rounded-lg"></div>
                <span className="text-xl font-bold">ClickFunnels Guide</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your comprehensive resource for ClickFunnels pricing, alternatives, and comparisons.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/clickfunnels-pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/clickfunnels-vs-kartra" className="hover:text-white transition-colors">vs Kartra</Link></li>
                <li><Link href="/clickfunnels-alternatives" className="hover:text-white transition-colors">Alternatives</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://www.clickfunnels.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Official Site</a></li>
                <li><a href="https://www.clickfunnels.com/pricing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Pricing Page</a></li>
                <li><a href="https://www.clickfunnels.com/start-trial-step-1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Free Trial</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 ClickFunnels Guide. All rights reserved. This site contains affiliate links.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
