# ClickFunnels SEO Site

A comprehensive, SEO-optimized website providing detailed information about ClickFunnels pricing, alternatives, and comparisons. Built with Next.js 14, TailwindCSS, and modern web technologies.

## 🚀 Features

- **SEO Optimized**: Built-in SEO with meta tags, structured data, and sitemap
- **Responsive Design**: Mobile-first design with TailwindCSS
- **Performance**: Optimized for Core Web Vitals and Lighthouse scores
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Modern UI**: Beautiful gradients, glassy headers, and smooth animations

## 📁 Project Structure

```
clickfunnels-seo-site/
├── app/                          # Next.js 14 App Router
│   ├── globals.css              # Global styles and TailwindCSS
│   ├── layout.tsx               # Root layout with SEO
│   ├── page.tsx                 # Homepage
│   ├── clickfunnels-pricing/    # Pricing page
│   ├── clickfunnels-vs-kartra/  # Comparison page
│   ├── clickfunnels-alternatives/ # Alternatives page
│   └── sitemap.ts              # Dynamic sitemap
├── components/                   # Reusable React components
│   ├── Hero.tsx                # Hero section component
│   ├── PricingTable.tsx        # Pricing table with toggle
│   ├── FAQ.tsx                 # FAQ with JSON-LD schema
│   └── Callout.tsx             # CTA ribbon component
├── data/                        # Data files
│   └── pages.json              # Page configuration
├── public/                      # Static assets
│   └── robots.txt              # Robots file
├── tailwind.config.js           # TailwindCSS configuration
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS with custom design tokens
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **SEO**: Next-SEO
- **TypeScript**: Full type safety
- **Deployment**: Vercel (ready)

## 🎨 Design System

- **Primary Colors**: Purple (#6D28D9), Cyan (#22D3EE), Amber (#F59E0B)
- **Typography**: Inter font family with fluid typography
- **Spacing**: 8pt grid system
- **Border Radius**: 14px (custom CSS variable)
- **Gradients**: Brand color combinations for visual appeal

## 📱 Pages

1. **Homepage** (`/`) - Overview and navigation hub
2. **Pricing** (`/clickfunnels-pricing`) - Detailed pricing plans and comparison
3. **vs Kartra** (`/clickfunnels-vs-kartra`) - Head-to-head comparison
4. **Alternatives** (`/clickfunnels-alternatives`) - 15+ alternative platforms

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd clickfunnels-seo-site
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_AFFILIATE_URL=https://www.clickfunnels.com/signup-flow?aff=YOUR_AFFILIATE_ID
```

### Customization

- **Brand Colors**: Update `tailwind.config.js` brand palette
- **Content**: Modify `data/pages.json` for page structure
- **SEO**: Update metadata in each page component
- **Styling**: Customize `app/globals.css` for global styles

## 📊 SEO Features

- **Meta Tags**: Comprehensive Open Graph and Twitter Card support
- **Structured Data**: JSON-LD schema for FAQ pages
- **Sitemap**: Dynamic XML sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Canonical URLs**: Proper URL canonicalization
- **Performance**: Optimized for Core Web Vitals

## 🎯 Performance Targets

- **Lighthouse Performance**: ≥ 90
- **Lighthouse SEO**: ≥ 95  
- **Lighthouse Accessibility**: ≥ 95
- **Core Web Vitals**: All metrics in green

## 📈 Analytics

- **Vercel Analytics**: Built-in performance monitoring
- **Conversion Tracking**: Affiliate link tracking ready
- **Performance Monitoring**: Real-time performance metrics

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: Compatible with Next.js static export
- **AWS Amplify**: Full Next.js support
- **Docker**: Containerized deployment ready

## 🔍 Content Strategy

- **Keyword Research**: 20+ commercial keywords identified
- **Content Clusters**: Pricing, alternatives, comparisons, use cases
- **Internal Linking**: Strategic page connections
- **CTAs**: Multiple conversion opportunities per page

## 📝 Content Guidelines

- **Word Count**: 2,000-3,000 words per page
- **CTAs**: 2-3 affiliate links per page
- **Images**: Optimized with proper alt text
- **Links**: Internal and external with proper attributes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⚠️ Disclaimer

This site contains affiliate links to ClickFunnels. We may earn a commission when you purchase through these links at no additional cost to you.

## 📞 Support

For questions or support:
- Create an issue in the repository
- Check the documentation
- Review the FAQ sections

---

Built with ❤️ using Next.js 14 and modern web technologies.
