# ClickFunnels SEO Site - Deployment Guide

## 🚀 Quick Deploy Options

### Option 1: Vercel Dashboard (Recommended)

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign in with GitHub**
3. **Click "New Project"**
4. **Import your repository**: `clickfunnels-seo-site`
5. **Configure project settings**:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. **Click "Deploy"**

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow prompts to configure
```

## ⚙️ Environment Variables

### Required Variables

Create a `.env.local` file in your project root:

```env
# ClickFunnels Affiliate URL
NEXT_PUBLIC_AFFILIATE_URL=https://www.clickfunnels.com/signup-flow?aff=YOUR_AFFILIATE_ID

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_vercel_analytics_id
```

### Vercel Dashboard Setup

1. **Go to your project dashboard**
2. **Click "Settings" → "Environment Variables"**
3. **Add each variable**:
   - `NEXT_PUBLIC_AFFILIATE_URL`
   - `NEXT_PUBLIC_GA_ID` (optional)
   - `NEXT_PUBLIC_VERCEL_ANALYTICS_ID` (optional)

## 🔧 Build Configuration

### Build Commands

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### Build Output

The build process will create:
- `.next/` directory with optimized files
- Static assets in `public/`
- Optimized images and fonts

## 📱 Domain Configuration

### Custom Domain Setup

1. **Go to Vercel Dashboard → Domains**
2. **Add your domain**: `yourdomain.com`
3. **Configure DNS records**:
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel.com
   ```
4. **Wait for DNS propagation** (up to 48 hours)

### Subdomain Setup

```
Type: CNAME
Name: www
Value: cname.vercel.com
```

## 📊 Analytics Setup

### Google Analytics

1. **Create Google Analytics account**
2. **Add tracking code to `app/layout.tsx`**:

```tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Vercel Analytics

Already configured in the project. No additional setup needed.

## 🔍 SEO Verification

### Search Console Setup

1. **Go to [Google Search Console](https://search.google.com/search-console)**
2. **Add your property** (domain or URL prefix)
3. **Verify ownership** (DNS record or HTML file)
4. **Submit sitemap**: `https://yourdomain.com/sitemap.xml`

### Meta Tag Verification

Verify these are working:
- Open Graph tags
- Twitter Cards
- JSON-LD structured data
- Canonical URLs

## 📈 Performance Monitoring

### Lighthouse Audits

Run regular audits:
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse https://yourdomain.com --view
```

### Core Web Vitals

Monitor in:
- Google Search Console
- PageSpeed Insights
- Vercel Analytics

## 🚨 Common Issues & Solutions

### Build Failures

**Error**: `Module not found`
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

**Error**: `TypeScript compilation failed`
```bash
# Solution: Check type errors
npm run lint
# Fix any type issues in components
```

### Deployment Issues

**Error**: `Environment variables not found`
- Check `.env.local` file exists
- Verify variables in Vercel dashboard
- Redeploy after adding variables

**Error**: `Domain not resolving`
- Wait for DNS propagation
- Check DNS records are correct
- Verify domain in Vercel dashboard

## 🔄 Continuous Deployment

### GitHub Integration

1. **Connect repository to Vercel**
2. **Enable automatic deployments**
3. **Set up preview deployments** for pull requests

### Deployment Triggers

- **Push to main**: Automatic production deployment
- **Pull request**: Preview deployment
- **Manual**: Trigger from Vercel dashboard

## 📱 Mobile Testing

### Device Testing

Test on:
- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)
- Desktop browsers

### Performance Testing

Use:
- Chrome DevTools Device Mode
- PageSpeed Insights Mobile
- Lighthouse Mobile Audit

## 🔒 Security Considerations

### HTTPS

- Automatically enabled on Vercel
- SSL certificate included
- HTTP to HTTPS redirect

### Headers

Add security headers in `next.config.js`:

```js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      }
    ]
  }
}
```

## 📊 Post-Deployment Checklist

- [ ] **Site loads correctly** on all devices
- [ ] **All CTAs work** and link to correct URLs
- [ ] **SEO meta tags** are present
- [ ] **Sitemap accessible** at `/sitemap.xml`
- [ ] **Robots.txt accessible** at `/robots.txt`
- [ ] **Analytics tracking** working
- **Performance scores** meet targets
- [ ] **Mobile responsive** design
- [ ] **Internal links** working
- [ ] **External links** opening correctly

## 🆘 Support Resources

### Vercel Support
- [Documentation](https://vercel.com/docs)
- [Community](https://github.com/vercel/vercel/discussions)
- [Status Page](https://vercel-status.com)

### Next.js Support
- [Documentation](https://nextjs.org/docs)
- [GitHub Issues](https://github.com/vercel/next.js/issues)
- [Discord Community](https://discord.gg/nextjs)

### Project Support
- Check `README.md` for project details
- Review `REPORT.md` for implementation notes
- Create GitHub issues for bugs

---

**Deployment Status**: Ready ✅  
**Next Steps**: Deploy to Vercel and configure domain  
**Estimated Time**: 15-30 minutes
