# AGENTS.md

This file provides guidance to coding agents working with code in this repository.

## Commands

### Development
- `yarn dev` - Start Astro development server with Panda CSS watch mode at http://localhost:4321
- `yarn build` - Generate Panda CSS, run type checks, and build static site (outputs to `dist/` directory)
- `yarn preview` - Preview production build locally
- `yarn panda` - Generate Panda CSS types and utilities

### Quality Assurance
- `yarn lint` - Run Biome linting checks
- `yarn lint:fix` - Run Biome and fix auto-fixable issues
- `yarn format` - Format code with Biome
- `yarn lighthouce:ci` - Run Lighthouse CI performance tests (requires build first)

## Architecture

This is a portfolio website built with Astro and TypeScript, using static site generation.

### Key Technologies
- **Astro 5** with static output (`output: 'static'`) and Islands Architecture
- **@astrojs/react** for React Islands (interactive components)
- **@astrojs/sitemap** for SEO optimization
- **Panda CSS** for CSS-in-JS styling with atomic CSS generation
- **Biome** for linting and formatting (replaces ESLint/Prettier)
- **microCMS** as headless CMS for content management
- **React libraries**: react-typist-component (typing animations), @floating-ui/react (tooltips), react-intersection-observer

### Application Structure

The site uses Astro's Islands Architecture with selective hydration:
- **Astro Components** (`.astro`): Static components rendered at build time
- **React Islands** (`.tsx`): Interactive components with client-side hydration

Progressive section reveal pattern:
1. **Intro** - Landing section with typing animation
2. **Works** - Portfolio projects (index > 0)
3. **History** - Work experience (index > 1)
4. **Skills** - Technical skills (index > 2)
5. **Contacts** - Contact information (index > 3)

Each section is conditionally rendered based on the `index` state managed in `HomeClient.tsx` React Island.

### Data Flow
- Content is fetched from microCMS API during build time in Astro pages
- API endpoints follow pattern: `https://shgtkshruch.microcms.io/api/v1/{path}?limit=30&filters=active[equals]true`
- Requires `MICRO_CMS_API_KEY` environment variable
- TypeScript interfaces defined in `src/types/api.ts` for Work, History, Skill, Contact entities
- Data flows from Astro page (`src/pages/index.astro`) to React Island (`src/components/islands/HomeClient.tsx`)

### Styling System
- **Panda CSS** with atomic CSS generation and design tokens
- **Responsive breakpoints**: mobile (600px), desktop (1200px) defined in `src/components/variables.ts`
- **Light/dark theme**: Automatic theme detection with CSS custom properties
- **Theme colors and media queries**: Centralized in `src/components/variables.ts`
- **Code formatting**: Biome configured with double quotes and space indentation
- **Global styles**: Defined in `src/styles/index.css`

### Component Organization
- **Pages**: `src/pages/index.astro` - Main page with data fetching
- **Layouts**: `src/layouts/BaseLayout.astro` - Base layout with HTML structure and meta tags
- **React Islands**: `src/components/islands/` - Interactive components (ColorTheme, Hgroup, HomeClient)
- **Astro Components**:
  - `src/components/common/` - Shared UI components (GitHubCorner, Link, Section, Text)
  - `src/components/{section}/` - Section-specific components (work, history, skill, contact, intro, footer)
  - `src/components/layout/` - Layout components (Container)
- **Utilities**: `src/components/variables.ts` - Design tokens (breakpoints, theme, media queries)
- **Libraries**: `src/lib/` - Helper functions (gtag, microcms)
- **Types**: `src/types/api.ts` - TypeScript type definitions

### Build Output
- Static files exported to `dist/` directory
- CSS extracted to static files with Panda CSS atomic classes
- TypeScript type checking with `astro check` before build
- Lighthouse CI configured to test the built output

### Environment Requirements
- Node.js >= 22
- Yarn package manager
- `MICRO_CMS_API_KEY` environment variable for content fetching

### Code Quality
- **Biome**: Handles linting, formatting, and import organization
- **TypeScript**: Strict mode enabled with path aliases
- **Lighthouse CI**: Performance testing configured for static builds
