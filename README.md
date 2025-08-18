# ClickFunnels SEO Site

A comprehensive programmatic SEO website for ClickFunnels affiliate marketing, built with Next.js 14 and TailwindCSS.

## 🚀 Features

- **3 Landing Pages**: Pricing, vs Kartra comparison, and alternatives
- **Modern UI/UX**: Responsive design with gradient backgrounds and smooth animations
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- **Performance Focused**: Optimized for Core Web Vitals and Lighthouse scores
- **Affiliate Integration**: Direct links to ClickFunnels with affiliate tracking

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS with custom design system
- **Language**: TypeScript
- **Components**: React with custom component library
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
clickfunnels-seo-site/
├── app/                          # Next.js app directory
│   ├── clickfunnels-pricing/    # Pricing page
│   ├── clickfunnels-vs-kartra/  # Comparison page
│   ├── clickfunnels-alternatives/ # Alternatives page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   └── sitemap.ts               # Dynamic sitemap
├── components/                   # Reusable components
│   ├── Hero.tsx                 # Hero section component
│   ├── PricingTable.tsx         # Pricing table with toggle
│   ├── FAQ.tsx                  # FAQ accordion with JSON-LD
│   └── Callout.tsx              # CTA component
├── data/                        # Content data
│   └── pages.json               # Page blueprint data
├── public/                      # Static assets
│   └── robots.txt               # Robots file
├── tailwind.config.js           # TailwindCSS configuration
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies
└── README.md                    # This file
```

## 🎨 Design System

### Colors
- **Primary**: #6D28D9 (Purple)
- **Secondary**: #22D3EE (Cyan)
- **Accent**: #F59E0B (Amber)

### Typography
- **Heading Font**: Inter (Bold)
- **Body Font**: Inter (Regular)
- **Fluid Typography**: Responsive font sizes using CSS clamp

### Components
- **Cards**: Rounded corners (14px), subtle shadows
- **Buttons**: Gradient backgrounds, hover animations
- **Spacing**: 8pt grid system
- **Animations**: Fade-in, slide-up, gentle bounce

## 📱 Pages

### 1. Homepage (`/`)
- Hero section with main CTA
- Features overview
- Navigation to all pages
- Footer with quick links

### 2. Pricing Page (`/clickfunnels-pricing`)
- Detailed pricing plans
- Monthly/annual toggle
- Feature comparison table
- FAQ section
- Multiple CTAs

### 3. vs Kartra Page (`/clickfunnels-vs-kartra`)
- Head-to-head comparison
- Feature-by-feature analysis
- Pros and cons
- Decision guide
- FAQ section

### 4. Alternatives Page (`/clickfunnels-alternatives`)
- 15+ alternatives overview
- Pricing comparison
- Feature matrix
- Selection guide
- FAQ section

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/clickfunnels-seo-site.git
   cd clickfunnels-seo-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_AFFILIATE_URL=https://www.clickfunnels.com/signup-flow?aff=YOUR_AFFILIATE_ID
```

### Customization

- **Brand Colors**: Update `tailwind.config.js` colors
- **Content**: Modify `data/pages.json` for page content
- **SEO**: Update metadata in each page component
- **Styling**: Customize `app/globals.css` for global styles

## 🔍 SEO Features

- **Meta Tags**: Title, description, keywords for each page
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **JSON-LD**: Structured data for FAQs and pricing
- **Sitemap**: Dynamic XML sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Canonical URLs**: Prevent duplicate content issues

## 📊 Performance

### Lighthouse Targets
- **Performance**: ≥ 90
- **SEO**: ≥ 95
- **Accessibility**: ≥ 95
- **Best Practices**: ≥ 90

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 📈 Analytics

The site includes Vercel Analytics for:
- Page views and user behavior
- Performance monitoring
- Conversion tracking
- A/B testing insights

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository**
2. **Import project to Vercel**
3. **Set environment variables**
4. **Deploy automatically**

### Other Platforms

- **Netlify**: Compatible with Next.js
- **AWS Amplify**: Full-stack deployment
- **Self-hosted**: Docker or traditional hosting

## 📝 Content Strategy

### Target Keywords
- Primary: "clickfunnels pricing", "clickfunnels alternatives"
- Secondary: "clickfunnels vs kartra", "sales funnel builder"
- Long-tail: "clickfunnels pricing 2025", "best clickfunnels alternative"

### Content Types
- **Comparison Pages**: Detailed feature analysis
- **Pricing Pages**: Transparent cost breakdown
- **Alternative Pages**: Comprehensive platform reviews
- **FAQ Sections**: User question optimization

## 🛠️ Development

### Scripts

```json
{
  "dev": "next dev",           # Development server
  "build": "next build",       # Production build
  "start": "next start",       # Production server
  "lint": "next lint",         # ESLint checking
  "generate-pages": "tsx scripts/generate-pages.ts"  # Page generation
}
```

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended rules
- **Prettier**: Consistent formatting
- **Components**: Functional components with hooks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- **Issues**: GitHub Issues
- **Documentation**: This README
- **Community**: GitHub Discussions

## 🔗 Links

- **Live Site**: [https://clickfunnels-seo-site.vercel.app](https://clickfunnels-seo-site.vercel.app)
- **ClickFunnels**: [https://www.clickfunnels.com](https://www.clickfunnels.com)
- **Repository**: [https://github.com/yourusername/clickfunnels-seo-site](https://github.com/yourusername/clickfunnels-seo-site)

---

**Note**: This site contains affiliate links to ClickFunnels. We may earn a commission if you sign up through our links.
