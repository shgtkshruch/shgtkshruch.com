[![Lint and Format Check](https://github.com/shgtkshruch/shgtkshruch.com/actions/workflows/lint.yml/badge.svg)](https://github.com/shgtkshruch/shgtkshruch.com/actions/workflows/lint.yml)
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
- **Oxlint** for fast linting and **Oxfmt** for code formatting
- **microCMS** as headless CMS for content management
- **React libraries**: react-typist-component (typing animations), @floating-ui/react (tooltips)

## Getting Started

### Prerequisites

- Node.js >= 24
- pnpm package manager
- `MICRO_CMS_API_KEY` environment variable

### Development

```bash
pnpm dev           # Start Astro dev server with Panda CSS watch mode
```

Open [http://localhost:4321](http://localhost:4321) to view the site.

### Build

```bash
pnpm build         # Generate Panda CSS, run type checks, and build static site
pnpm preview       # Preview production build locally
```

Generates static files in the `dist/` directory with optimized CSS.

### Panda CSS

```bash
pnpm panda         # Generate Panda CSS utilities and tokens
```

The `styled-system/` directory contains auto-generated CSS utilities and design tokens.

### Code Quality

```bash
pnpm lint          # Run Oxlint checks
pnpm lint:fix      # Fix auto-fixable issues
pnpm format        # Format code with Oxfmt
pnpm lighthouce:ci # Run Lighthouse CI (requires build first)
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
├── pages/          # Astro pages (data fetching at build time)
├── layouts/        # Base HTML layout
├── components/
│   ├── islands/    # React Islands (interactive: color theme, heading, home client)
│   ├── common/     # Shared UI components
│   ├── {section}/  # Section-specific components (intro, work, history, skill, contact, footer)
│   └── layout/     # Layout wrappers
├── hooks/          # React hooks (intersection observer, sibling index)
├── lib/            # API clients (microCMS, Google Analytics)
├── styles/         # Global CSS
└── types/          # TypeScript interfaces for API data
```

## Performance Features

- **Static Site Generation**: Pre-rendered at build time with Astro for optimal loading speed
- **Islands Architecture**: Selective hydration with zero JavaScript by default
- **Zero-Runtime CSS**: No CSS-in-JS runtime overhead with Panda CSS atomic classes
- **Code Splitting**: Automatic code splitting for React Islands
- **Tree Shaking**: Unused code and styles automatically removed
- **Lighthouse CI**: Automated performance testing in CI/CD pipeline
