import Link from 'next/link'
import { ArrowRight, CheckCircle, Star, TrendingUp } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
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
            <Link 
              href="https://www.clickfunnels.com/signup-flow?aff=36738480f0374bbe21a0d263c8b707ef738b7c7b7eb67bda8f16f741f9edca5a"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container-custom text-center">
          <h1 className="mb-6">
            Find the Perfect{' '}
            <span className="gradient-text">ClickFunnels</span> Plan
          </h1>
          <p className="text-fluid-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover ClickFunnels pricing, compare with competitors like Kartra, and explore alternatives. 
            Make an informed decision for your business with our comprehensive guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/clickfunnels-pricing"
              className="btn-primary inline-flex items-center justify-center"
            >
              View Pricing Plans
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/clickfunnels-vs-kartra"
              className="btn-secondary inline-flex items-center justify-center"
            >
              Compare Platforms
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Everything You Need to Know</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center group hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-1 to-brand-2 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pricing Plans</h3>
              <p className="text-gray-600 mb-4">
                Get detailed breakdowns of all ClickFunnels plans, from Launch to Dominate. 
                Find the perfect plan for your business size and needs.
              </p>
              <Link 
                href="/clickfunnels-pricing"
                className="text-brand-1 font-semibold hover:underline inline-flex items-center"
              >
                View Plans
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="card text-center group hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-2 to-brand-3 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">vs Kartra</h3>
              <p className="text-gray-600 mb-4">
                Detailed comparison between ClickFunnels and Kartra. See which platform 
                offers better features, pricing, and value for your business.
              </p>
              <Link 
                href="/clickfunnels-vs-kartra"
                className="text-brand-1 font-semibold hover:underline inline-flex items-center"
              >
                Compare Now
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="card text-center group hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-3 to-brand-1 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Alternatives</h3>
              <p className="text-gray-600 mb-4">
                Explore 15+ ClickFunnels alternatives including free options. Find cheaper, 
                better, or more specialized solutions for your needs.
              </p>
              <Link 
                href="/clickfunnels-alternatives"
                className="text-brand-1 font-semibold hover:underline inline-flex items-center"
              >
                Explore Alternatives
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-1 via-brand-2 to-brand-3">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Ready to Build Your First Funnel?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who have built successful businesses with ClickFunnels. 
            Start your 14-day free trial today.
          </p>
          <Link 
            href="https://www.clickfunnels.com/signup-flow?aff=36738480f0374bbe21a0d263c8b707ef738b7c7b7eb67bda8f16f741f9edca5a"
            className="bg-white text-brand-1 font-semibold py-4 px-8 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ClickFunnels Guide</h3>
              <p className="text-gray-400">
                Your comprehensive resource for ClickFunnels pricing, comparisons, and alternatives.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/clickfunnels-pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/clickfunnels-vs-kartra" className="hover:text-white transition-colors">vs Kartra</Link></li>
                <li><Link href="/clickfunnels-alternatives" className="hover:text-white transition-colors">Alternatives</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://www.clickfunnels.com" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Official Site</a></li>
                <li><a href="https://www.clickfunnels.com/pricing" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Pricing Page</a></li>
                <li><a href="https://www.clickfunnels.com/support" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ClickFunnels Guide. All rights reserved. This site contains affiliate links.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
