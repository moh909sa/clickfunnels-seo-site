# ClickFunnels SEO Site - Astro Edition

A programmatic SEO site built with Astro to promote ClickFunnels through affiliate marketing. This site provides comprehensive information about ClickFunnels pricing, comparisons, and money-making strategies.

## 🚀 Features

- **3 High-Converting Pages**: Homepage, comparison page, and how-to guide
- **SEO Optimized**: Meta tags, structured data, sitemap, and robots.txt
- **Affiliate Integration**: ClickFunnels affiliate links throughout
- **Responsive Design**: Mobile-first approach with modern UI
- **Fast Performance**: Built with Astro for optimal speed
- **Content-Rich**: 2,000+ words per page with actionable insights

## 📁 Project Structure

```
src/
├── components/
│   └── CTA.astro          # Reusable call-to-action button
├── layouts/
│   └── BaseLayout.astro   # Base layout with SEO and navigation
└── pages/
    ├── index.mdx          # Homepage with overview
    ├── clickfunnels-vs-kartra.mdx    # Comparison page
    └── how-to-make-money-with-clickfunnels.mdx  # How-to guide

public/
├── robots.txt             # Search engine instructions
└── sitemap.xml           # XML sitemap for SEO
```

## 🛠️ Tech Stack

- **Framework**: Astro 4.0
- **Styling**: TailwindCSS (utility classes)
- **Content**: MDX with YAML frontmatter
- **SEO**: Schema.org structured data, Open Graph, Twitter Cards
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/clickfunnels-seo-site.git
cd clickfunnels-seo-site
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📊 Content Overview

### Homepage (`/`)
- **Word Count**: 2,500+ words
- **Focus**: ClickFunnels overview, pricing, alternatives
- **SEO Keywords**: clickfunnels pricing, alternatives, reviews
- **CTA Strategy**: Multiple CTAs throughout the page

### Comparison Page (`/clickfunnels-vs-kartra`)
- **Word Count**: 2,000+ words
- **Focus**: Detailed ClickFunnels vs Kartra comparison
- **SEO Keywords**: clickfunnels vs kartra, comparison, which is better
- **CTA Strategy**: Strategic placement after key insights

### How-To Guide (`/how-to-make-money-with-clickfunnels`)
- **Word Count**: 2,500+ words
- **Focus**: Money-making strategies with ClickFunnels
- **SEO Keywords**: make money with clickfunnels, online income
- **CTA Strategy**: Action-oriented CTAs for each strategy

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
PUBLIC_AFFILIATE_URL=https://www.clickfunnels.com/signup-flow?aff=YOUR_AFFILIATE_ID
```

### Customization

#### Affiliate Links
Update affiliate links in:
- `src/components/CTA.astro`
- `src/layouts/BaseLayout.astro`
- Individual page frontmatter

#### Branding
Modify colors and styling in:
- `src/layouts/BaseLayout.astro`
- `src/components/CTA.astro`

#### Content
Update content in the MDX files:
- `src/pages/index.mdx`
- `src/pages/clickfunnels-vs-kartra.mdx`
- `src/pages/how-to-make-money-with-clickfunnels.mdx`

## 📈 SEO Features

### Meta Tags
- Title tags (50-60 characters)
- Meta descriptions (140-160 characters)
- Open Graph tags
- Twitter Card tags
- Keywords meta tags

### Structured Data
- BreadcrumbList schema
- WebPage schema
- FAQ schema (where applicable)

### Technical SEO
- XML sitemap
- Robots.txt
- Canonical URLs
- Internal linking structure

## 🎨 Design System

### Color Palette
- **Primary**: Purple (#6D28D9)
- **Secondary**: Blue (#22D3EE)
- **Accent**: Orange (#F59E0B)
- **Neutral**: Gray scale

### Typography
- **Headings**: Inter font family
- **Body**: Inter font family
- **Hierarchy**: H1, H2, H3 structure

### Components
- **CTA Button**: Primary and secondary variants
- **Layout**: Responsive container with max-width
- **Navigation**: Clean header with navigation links

## 📱 Responsive Design

- **Mobile-First**: Designed for mobile devices first
- **Breakpoints**: TailwindCSS responsive utilities
- **Navigation**: Collapsible mobile navigation
- **Images**: Responsive image handling

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

1. Build the project: `npm run build`
2. Upload `dist/` folder to your hosting provider
3. Configure your domain and SSL

## 📊 Analytics & Tracking

### Google Analytics
Add your GA4 tracking ID to the BaseLayout component.

### Conversion Tracking
Track affiliate link clicks and form submissions.

## 🔍 Performance Optimization

- **Astro**: Zero JavaScript by default
- **Image Optimization**: Optimized image delivery
- **CSS**: Purged unused CSS
- **Lazy Loading**: Images and components load on demand

## 📚 Content Strategy

### Target Audience
- Entrepreneurs looking for funnel building tools
- Marketers comparing ClickFunnels alternatives
- Beginners wanting to make money online

### Content Pillars
1. **Education**: How ClickFunnels works
2. **Comparison**: vs competitors
3. **Implementation**: How to use for income

### Internal Linking
- Cross-linking between all pages
- Related articles sections
- Breadcrumb navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⚠️ Disclaimer

This site contains affiliate links to ClickFunnels. We may earn a commission if you sign up through our links at no additional cost to you.

## 🆘 Support

For support or questions:
- Create an issue in this repository
- Contact the development team
- Check the ClickFunnels documentation

---

**Built with ❤️ using Astro for optimal performance and SEO**
