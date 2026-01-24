# Etomidate API - Pharmaceutical Website

A modern, luxurious pharmaceutical website for Etomidate Active Pharmaceutical Ingredient (API) built with Next.js 16, React 19, and GSAP animations.

## Features

- 🎨 **Modern Design**: Luxurious Awwwards-winning inspired layout with light mode
- 🌐 **Comprehensive SEO**: Full metadata optimization with programmatic OG images
- ⚡ **GSAP Animations**: Smooth scroll-triggered animations with no layout shift
- 📱 **Responsive Design**: Fully responsive across all devices
- 🎯 **Accessibility**: WCAG compliant with semantic HTML
- 🔍 **Search Optimized**: Sitemap, robots.txt, and structured data
- 🖼️ **Dynamic Images**: Programmatically generated icons and social media cards
- 💚 **Medical Theme**: Calm, composing color palette with sage greens

## Tech Stack

- **Framework**: Next.js 16.1.4 with App Router
- **React**: React 19.2.3
- **Animations**: GSAP with ScrollTrigger
- **Styling**: Tailwind CSS 4 with custom theme
- **Typography**: Inter, Playfair Display, JetBrains Mono
- **Language**: TypeScript 5

## Getting Started

1. **Clone the repository**

```bash
git clone <repository-url>
cd etomediate
```

2. **Install dependencies**

```bash
bun install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

Edit `.env.local` and update:

- `NEXT_PUBLIC_BASE_URL`: Your production domain
- `NEXT_PUBLIC_GOOGLE_VERIFICATION`: Google Search Console verification code
- `NEXT_PUBLIC_YANDEX_VERIFICATION`: Yandex Webmaster verification code

4. **Run the development server**

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## SEO Implementation

### Metadata & Social Cards

The website includes comprehensive SEO optimization:

- **Meta Tags**: Title, description, keywords, authors, robots
- **Open Graph**: Programmatically generated OG images (1200x630)
- **Twitter Cards**: Custom Twitter card images with proper sizing
- **Icons**: Dynamic favicon, icon, and apple-icon generation
- **Manifest**: PWA-ready web app manifest
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Dynamic robots configuration

### Programmatic Image Generation

All social media images and icons are generated programmatically using Next.js ImageResponse API:

- `/icon` - 32x32 favicon with brand colors
- `/apple-icon` - 180x180 iOS home screen icon
- `/opengraph-image` - 1200x630 Open Graph image
- `/twitter-image` - 1200x630 Twitter card image

Images feature consistent branding with:

- Sage green gradient (#7FB069 → #5A8F50)
- Medical-themed design
- Tailwind-inspired styling
- Proper sizing for each platform

### SEO Files Location

```
src/app/
├── layout.tsx           # Comprehensive metadata configuration
├── icon.tsx            # Dynamic favicon generation
├── apple-icon.tsx      # iOS icon generation
├── opengraph-image.tsx # OG image generation
├── twitter-image.tsx   # Twitter card generation
├── robots.ts           # Robots.txt configuration
├── sitemap.ts          # XML sitemap generation
└── page.tsx           # Main page content
```

## Project Structure

```
etomediate/
├── public/
│   └── manifest.json           # PWA manifest
├── src/
│   ├── app/
│   │   ├── icon.tsx           # Favicon generation
│   │   ├── apple-icon.tsx     # iOS icon
│   │   ├── opengraph-image.tsx # OG image
│   │   ├── twitter-image.tsx   # Twitter card
│   │   ├── robots.ts          # Robots.txt
│   │   ├── sitemap.ts         # Sitemap
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles & theme
│   ├── components/
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Hero.tsx           # Hero section
│   │   ├── About.tsx          # About section
│   │   ├── Benefits.tsx       # Benefits grid
│   │   ├── Mechanism.tsx      # Mechanism timeline
│   │   ├── Specifications.tsx # Tech specs
│   │   └── Footer.tsx         # Footer
│   └── lib/
│       └── utils.ts           # Utility functions
├── .env.example               # Environment variables template
└── package.json
```

## GSAP Animation Best Practices

This project follows GSAP best practices to prevent layout shift:

✅ **CSS-first initial states** - All animated elements have initial CSS classes
✅ **gsap.to() over fromTo()** - Avoids immediateRender issues
✅ **once: true** - One-time animations for better performance
✅ **invalidateOnRefresh: true** - Responsive recalculation
✅ **No transition-all** - Specific transitions to avoid conflicts

Learn more in [.github/skills/gsap-scrolltrigger-no-layout-shift/](./.github/skills/gsap-scrolltrigger-no-layout-shift/)

## Color Palette

The medical-themed color system:

- **Sage Green**: Primary brand color (#7FB069 - #E8F3E4)
- **Warm Neutrals**: Natural warmth (#FAF9F7 - #1F1E1D)
- **Accent Teal**: Highlight color (#48A9A6 - #E0F5F5)
- **Primary Blues**: Trust and professionalism (#1A73E8 - #E3F2FD)

## Typography

- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-serif)
- **Code/Data**: JetBrains Mono (Monospace)

## Deployment

### Environment Variables

Set these in your deployment platform:

```bash
NEXT_PUBLIC_BASE_URL=https://your-domain.com
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
NEXT_PUBLIC_YANDEX_VERIFICATION=your-verification-code
```

### Vercel Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import project to Vercel
3. Configure environment variables
4. Deploy

### Build for Production

```bash
bun run build
bun run start
```

## SEO Checklist

After deployment, verify:

- [ ] Update `NEXT_PUBLIC_BASE_URL` in environment variables
- [ ] Replace Google/Yandex verification codes in layout.tsx
- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt is accessible
- [ ] Test OG images with [OpenGraph.xyz](https://www.opengraph.xyz/)
- [ ] Test Twitter cards with [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Verify icons with [RealFaviconGenerator](https://realfavicongenerator.net/)
- [ ] Check mobile experience with Google PageSpeed Insights
- [ ] Verify structured data with [Schema.org Validator](https://validator.schema.org/)

## Performance

- ✅ Static generation for optimal performance
- ✅ Image optimization with Next.js Image
- ✅ Font optimization with next/font
- ✅ Code splitting and lazy loading
- ✅ GSAP animations optimized for 60fps

## License

Proprietary - All rights reserved

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [GSAP Documentation](https://greensock.com/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Next.js Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
