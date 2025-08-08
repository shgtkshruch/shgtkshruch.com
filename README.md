[![Netlify Status](https://api.netlify.com/api/v1/badges/b5bc590c-bb26-4ee2-be21-64df7bb8f866/deploy-status)](https://app.netlify.com/projects/condescending-dubinsky-142049/deploys)
[![Biome Check](https://github.com/shgtkshruch/shgtkshruch.com/actions/workflows/biome.yml/badge.svg)](https://github.com/shgtkshruch/shgtkshruch.com/actions/workflows/biome.yml)
[![CodeQL](https://github.com/shgtkshruch/shgtkshruch.com/actions/workflows/codeql-analysis.yml/badge.svg?branch=master)](https://github.com/shgtkshruch/shgtkshruch.com/actions/workflows/codeql-analysis.yml)
[![Lighthouse CI](https://github.com/shgtkshruch/shgtkshruch.com/actions/workflows/lighthouse.yml/badge.svg?branch=master)](https://github.com/shgtkshruch/shgtkshruch.com/actions/workflows/lighthouse.yml)

[![shgtkshruch com_(Laptop with HiDPI screen) ](https://user-images.githubusercontent.com/5207601/83959269-d4259080-a8b5-11ea-8584-74917e365ffa.png)](https://shgtkshruch.com)

# shgtkshruch.com

A modern portfolio website built with Next.js App Router, TypeScript, and microCMS. Features progressive section reveal, typing animations, responsive design, and zero-runtime CSS with light/dark theme support.

## Tech Stack

- **Next.js** with App Router and static export for optimal performance
- **TypeScript** for type safety with strict mode
- **Panda CSS** for zero-runtime CSS-in-JS styling with build-time optimization
- **Biome** for linting and formatting
- **microCMS** as headless CMS for content management
- **React libraries**: react-typist-component, @floating-ui/react, react-intersection-observer

## Getting Started

### Prerequisites

- Node.js >= 22
- Yarn package manager
- `MICRO_CMS_API_KEY` environment variable

### Development

```bash
yarn dev           # Start dev server with Panda CSS watch mode
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
yarn build         # Generate Panda CSS and build static export
```

Generates static files in the `out/` directory with optimized CSS.

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

The site uses Next.js App Router with server/client component separation and progressive section reveal:

1. **Intro** - Landing section with typing animation
2. **Works** - Portfolio projects 
3. **History** - Work experience
4. **Skills** - Technical skills
5. **Contacts** - Contact information

Content is fetched from microCMS API during build time with TypeScript interfaces for all data models.

## Styling System

The project uses **Panda CSS** for zero-runtime styling with build-time optimization:

- **Zero Runtime**: All styles are generated at build time, eliminating CSS-in-JS runtime overhead
- **Type Safety**: Full TypeScript integration with design tokens and utilities
- **Design Tokens**: Centralized theme system with responsive breakpoints, colors, and typography
- **Tree Shaking**: Unused styles are automatically removed from the final bundle
- **Theme Switching**: Dynamic light/dark mode using CSS custom properties
- **PostCSS Integration**: Seamless integration with Next.js build pipeline

### Configuration Files

- `panda.config.ts` - Panda CSS configuration with design tokens and theme settings
- `postcss.config.cjs` - PostCSS configuration for Panda CSS integration
- `styles/index.css` - CSS layer imports for Panda CSS utilities
- `styled-system/` - Auto-generated CSS utilities and design tokens (gitignored)

## Project Structure

```
app/
├── page.tsx         # Server component for data fetching
├── HomeClient.tsx   # Client component for interactive UI
└── layout.tsx       # Root layout

components/
├── common/          # Shared UI components (ColorTheme, Text, Link, etc.)
├── intro/           # Landing section with typing animation
├── work/            # Portfolio projects showcase
├── history/         # Work experience timeline
├── skill/           # Technical skills with tooltips
├── contact/         # Contact information with social links
├── footer/          # Footer section
├── layout/          # Layout components (Container)
└── variables.ts     # Design token utilities

styles/
└── index.css        # Panda CSS layer imports

styled-system/       # Auto-generated (gitignored)
├── css/             # CSS utilities and functions
├── tokens/          # Design tokens
└── patterns/        # Layout patterns

types/
└── api.ts          # TypeScript interfaces for API data

panda.config.ts      # Panda CSS configuration
postcss.config.cjs   # PostCSS configuration
```

## Performance Features

- **Static Generation**: Pre-rendered at build time for optimal loading speed
- **Zero-Runtime CSS**: No CSS-in-JS runtime overhead with Panda CSS
- **Code Splitting**: Automatic code splitting with Next.js App Router
- **Image Optimization**: Optimized images with Next.js Image component
- **Tree Shaking**: Unused code and styles automatically removed
