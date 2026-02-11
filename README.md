[![Netlify Status](https://api.netlify.com/api/v1/badges/b5bc590c-bb26-4ee2-be21-64df7bb8f866/deploy-status)](https://app.netlify.com/projects/condescending-dubinsky-142049/deploys)
[![Biome Check](https://github.com/shgtkshruch/shgtkshruch.com/actions/workflows/biome.yml/badge.svg)](https://github.com/shgtkshruch/shgtkshruch.com/actions/workflows/biome.yml)
[![CodeQL](https://github.com/shgtkshruch/shgtkshruch.com/actions/workflows/codeql-analysis.yml/badge.svg?branch=master)](https://github.com/shgtkshruch/shgtkshruch.com/actions/workflows/codeql-analysis.yml)
[![Lighthouse CI](https://github.com/shgtkshruch/shgtkshruch.com/actions/workflows/lighthouse.yml/badge.svg?branch=master)](https://github.com/shgtkshruch/shgtkshruch.com/actions/workflows/lighthouse.yml)

[![shgtkshruch com_(Laptop with HiDPI screen) ](https://user-images.githubusercontent.com/5207601/83959269-d4259080-a8b5-11ea-8584-74917e365ffa.png)](https://shgtkshruch.com)

# shgtkshruch.com

A modern portfolio website built with Astro, TypeScript, and microCMS. Features progressive section reveal, typing animations, responsive design, and zero-runtime CSS with light/dark theme support.

## Tech Stack

- **Astro 5** with static output and Islands Architecture for optimal performance
- **@astrojs/react** for React Islands (interactive components)
- **@astrojs/sitemap** for SEO optimization
- **TypeScript** for type safety with strict mode
- **Panda CSS** for zero-runtime CSS-in-JS styling with atomic CSS generation
- **Biome** for linting and formatting (replaces ESLint/Prettier)
- **microCMS** as headless CMS for content management
- **React libraries**: react-typist-component, @floating-ui/react, react-intersection-observer

## Getting Started

### Prerequisites

- Node.js >= 22
- Yarn package manager
- `MICRO_CMS_API_KEY` environment variable

### Development

```bash
yarn dev           # Start Astro dev server with Panda CSS watch mode
```

Open [http://localhost:4321](http://localhost:4321) to view the site.

### Build

```bash
yarn build         # Generate Panda CSS, run type checks, and build static site
yarn preview       # Preview production build locally
```

Generates static files in the `dist/` directory with optimized CSS.

### Panda CSS

```bash
yarn panda         # Generate Panda CSS utilities and tokens
```

The `styled-system/` directory contains auto-generated CSS utilities and design tokens.

### Code Quality

```bash
yarn lint          # Run Biome linting checks
yarn lint:fix      # Fix auto-fixable issues
yarn format        # Format code
yarn lighthouce:ci # Run Lighthouse CI (requires build first)
```

## Architecture

The site uses **Astro's Islands Architecture** with selective hydration for optimal performance:

- **Astro Components** (`.astro`): Static components rendered at build time
- **React Islands** (`.tsx`): Interactive components with client-side hydration

Progressive section reveal pattern:

1. **Intro** - Landing section with typing animation
2. **Works** - Portfolio projects (index > 0)
3. **History** - Work experience (index > 1)
4. **Skills** - Technical skills (index > 2)
5. **Contacts** - Contact information (index > 3)

Each section is conditionally rendered based on the `index` state managed in `HomeClient.tsx` React Island. Content is fetched from microCMS API during build time with TypeScript interfaces for all data models.

## Styling System

The project uses **Panda CSS** for zero-runtime styling with build-time optimization:

- **Zero Runtime**: All styles are generated at build time, eliminating CSS-in-JS runtime overhead
- **Type Safety**: Full TypeScript integration with design tokens and utilities
- **Design Tokens**: Centralized theme system with responsive breakpoints, colors, and typography
- **Tree Shaking**: Unused styles are automatically removed from the final bundle
- **Theme Switching**: Dynamic light/dark mode using CSS custom properties
- **PostCSS Integration**: Seamless integration with Astro build pipeline

### Configuration Files

- `panda.config.ts` - Panda CSS configuration with design tokens and theme settings
- `postcss.config.cjs` - PostCSS configuration for Panda CSS integration
- `src/styles/index.css` - Global styles and CSS layer imports
- `styled-system/` - Auto-generated CSS utilities and design tokens (gitignored)

## Project Structure

```
src/
├── pages/
│   └── index.astro       # Main page with data fetching
├── layouts/
│   └── BaseLayout.astro  # Base layout with HTML structure
├── components/
│   ├── islands/          # React Islands (interactive components)
│   │   ├── ColorTheme.tsx
│   │   ├── Hgroup.tsx
│   │   └── HomeClient.tsx
│   ├── common/           # Shared UI components (GitHubCorner, Link, Section, Text)
│   ├── intro/            # Landing section with typing animation
│   ├── work/             # Portfolio projects showcase
│   ├── history/          # Work experience timeline
│   ├── skill/            # Technical skills with tooltips
│   ├── contact/          # Contact information with social links
│   ├── footer/           # Footer section
│   ├── layout/           # Layout components (Container)
│   └── variables.ts      # Design tokens (breakpoints, theme, media queries)
├── lib/
│   ├── gtag.ts           # Google Analytics utilities
│   └── microcms.ts       # microCMS API client
├── styles/
│   └── index.css         # Global styles
└── types/
    └── api.ts            # TypeScript interfaces for API data

styled-system/            # Auto-generated (gitignored)
├── css/                  # CSS utilities and functions
├── tokens/               # Design tokens
└── patterns/             # Layout patterns

dist/                     # Build output (gitignored)

panda.config.ts           # Panda CSS configuration
astro.config.mjs          # Astro configuration
```

## Performance Features

- **Static Site Generation**: Pre-rendered at build time with Astro for optimal loading speed
- **Islands Architecture**: Selective hydration with zero JavaScript by default
- **Zero-Runtime CSS**: No CSS-in-JS runtime overhead with Panda CSS atomic classes
- **Code Splitting**: Automatic code splitting for React Islands
- **Tree Shaking**: Unused code and styles automatically removed
- **Lighthouse CI**: Automated performance testing in CI/CD pipeline
