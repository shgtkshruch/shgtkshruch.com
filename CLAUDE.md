# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `yarn dev` - Start Next.js development server at http://localhost:3000
- `yarn build` - Build static export for production (outputs to `out/` directory)
- `yarn start` - Start production server

### Quality Assurance
- `yarn lighthouce:ci` - Run Lighthouse CI performance tests (requires build first)

## Architecture

This is a portfolio website built with Next.js and TypeScript, using static site generation with export mode.

### Key Technologies
- **Next.js** with static export (`output: 'export'` in next.config.js)
- **Emotion** for CSS-in-JS styling (@emotion/react, @emotion/styled, @emotion/css)
- **microCMS** as headless CMS for content management
- **React libraries**: react-typist-component (typing animations), @floating-ui/react (tooltips), react-intersection-observer

### Application Structure

The site is a single-page application with progressive section reveal:
1. **Intro** - Landing section with typing animation
2. **Works** - Portfolio projects (index > 0)
3. **History** - Work experience (index > 1) 
4. **Skills** - Technical skills (index > 2)
5. **Contacts** - Contact information (index > 3)

Each section is conditionally rendered based on the `index` state managed in `pages/index.tsx`.

### Data Flow
- Content is fetched from microCMS API during build time via `getStaticProps`
- API endpoints follow pattern: `https://shgtkshruch.microcms.io/api/v1/{path}?limit=30&filters=active[equals]true`
- Requires `MICRO_CMS_API_KEY` environment variable
- TypeScript interfaces defined in `types/api.ts` for Work, History, Skill, Contact entities

### Styling System
- Global styles and theme management in `components/common/`
- Responsive breakpoints: mobile (600px), desktop (1200px) defined in `components/variables.ts`
- Light/dark theme support with CSS custom properties
- Theme colors and media queries centralized in `components/variables.ts`

### Component Organization
- `components/common/` - Shared UI components (GlobalStyle, ColorTheme, etc.)
- `components/{section}/` - Section-specific components (work, history, skill, contact, intro, footer)
- `components/layout/` - Layout components (Container)

### Build Output
- Static files exported to `out/` directory
- CSS extracted to static files
- Lighthouse CI configured to test the built output

### Environment Requirements
- Node.js >= 16.13.0
- Yarn package manager
- `MICRO_CMS_API_KEY` environment variable for content fetching
