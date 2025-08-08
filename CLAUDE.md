# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `yarn dev` - Start Next.js development server at http://localhost:3000
- `yarn build` - Build static export for production (outputs to `out/` directory)
- `yarn start` - Start production server

### Quality Assurance
- `yarn lint` - Run Biome linting checks
- `yarn lint:fix` - Run Biome and fix auto-fixable issues
- `yarn format` - Format code with Biome
- `yarn lighthouce:ci` - Run Lighthouse CI performance tests (requires build first)

## Architecture

This is a portfolio website built with Next.js App Router and TypeScript, using static site generation with export mode.

### Key Technologies
- **Next.js** with static export (`output: 'export'` in next.config.js) and App Router
- **Panda CSS** for CSS-in-JS styling with atomic CSS generation
- **Biome** for linting and formatting (replaces ESLint/Prettier)
- **microCMS** as headless CMS for content management
- **React libraries**: react-typist-component (typing animations), @floating-ui/react (tooltips), react-intersection-observer

### Application Structure

The site uses Next.js App Router with server/client component separation:
- **Server Components**: Data fetching in `app/page.tsx` using microCMS API
- **Client Components**: Interactive UI in `app/HomeClient.tsx` with progressive reveal

Progressive section reveal pattern:
1. **Intro** - Landing section with typing animation
2. **Works** - Portfolio projects (index > 0)
3. **History** - Work experience (index > 1) 
4. **Skills** - Technical skills (index > 2)
5. **Contacts** - Contact information (index > 3)

Each section is conditionally rendered based on the `index` state managed in `HomeClient.tsx`.

### Data Flow
- Content is fetched from microCMS API during build time in server components
- API endpoints follow pattern: `https://shgtkshruch.microcms.io/api/v1/{path}?limit=30&filters=active[equals]true`
- Requires `MICRO_CMS_API_KEY` environment variable
- TypeScript interfaces defined in `types/api.ts` for Work, History, Skill, Contact entities
- Data flows from server component (`page.tsx`) to client component (`HomeClient.tsx`)

### Styling System
- **Panda CSS** with atomic CSS generation and design tokens
- **Path aliases**: `@/components/*`, `@/types/*`, `@/lib/*`, `@/app/*` configured in tsconfig.json
- **Responsive breakpoints**: mobile (600px), desktop (1200px) defined in `components/variables.ts`
- **Light/dark theme**: Automatic theme detection with CSS custom properties
- **Theme colors and media queries**: Centralized in `components/variables.ts`
- **Code formatting**: Biome configured with double quotes and space indentation

### Component Organization
- **App Router structure**: `app/page.tsx` (server), `app/HomeClient.tsx` (client), `app/layout.tsx`
- `components/common/` - Shared UI components (GlobalStyle, ColorTheme, GitHub-Corner, etc.)
- `components/{section}/` - Section-specific components (work, history, skill, contact, intro, footer)
- `components/layout/` - Layout components (Container)
- `components/variables.ts` - Design tokens (breakpoints, theme, media queries)

### Build Output
- Static files exported to `out/` directory
- CSS extracted to static files
- Lighthouse CI configured to test the built output

### Environment Requirements
- Node.js >= 22
- Yarn package manager
- `MICRO_CMS_API_KEY` environment variable for content fetching

### Code Quality
- **Biome**: Handles linting, formatting, and import organization
- **TypeScript**: Strict mode enabled with path aliases
- **Lighthouse CI**: Performance testing configured for static builds
