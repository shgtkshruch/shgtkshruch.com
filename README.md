[![Netlify Status](https://api.netlify.com/api/v1/badges/b5bc590c-bb26-4ee2-be21-64df7bb8f866/deploy-status)](https://app.netlify.com/projects/condescending-dubinsky-142049/deploys)
[![Biome Check](https://github.com/shgtkshruch/shgtkshruch.com/actions/workflows/biome.yml/badge.svg)](https://github.com/shgtkshruch/shgtkshruch.com/actions/workflows/biome.yml)
[![CodeQL](https://github.com/shgtkshruch/shgtkshruch.com/actions/workflows/codeql-analysis.yml/badge.svg?branch=master)](https://github.com/shgtkshruch/shgtkshruch.com/actions/workflows/codeql-analysis.yml)
[![Lighthouse CI](https://github.com/shgtkshruch/shgtkshruch.com/actions/workflows/lighthouse.yml/badge.svg?branch=master)](https://github.com/shgtkshruch/shgtkshruch.com/actions/workflows/lighthouse.yml)

[![shgtkshruch com_(Laptop with HiDPI screen) ](https://user-images.githubusercontent.com/5207601/83959269-d4259080-a8b5-11ea-8584-74917e365ffa.png)](https://shgtkshruch.com)

# shgtkshruch.com

A modern portfolio website built with Next.js App Router, TypeScript, and microCMS. Features progressive section reveal, typing animations, and responsive design with light/dark theme support.

## Tech Stack

- **Next.js** with App Router and static export for optimal performance
- **TypeScript** for type safety with strict mode
- **Emotion** for CSS-in-JS styling
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
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
yarn build
```

Generates static files in the `out/` directory.

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

## Project Structure

```
app/
├── page.tsx         # Server component for data fetching
├── HomeClient.tsx   # Client component for interactive UI
└── layout.tsx       # Root layout

components/
├── common/          # Shared UI components
├── intro/           # Landing section
├── work/            # Portfolio projects
├── history/         # Work experience
├── skill/           # Technical skills
├── contact/         # Contact information
├── footer/          # Footer section
├── layout/          # Layout components
└── variables.ts     # Design tokens

types/
└── api.ts          # TypeScript interfaces for API data
```
