# AGENTS.md

Portfolio site built with Astro + TypeScript. Fetches content from microCMS at build time and outputs a fully static site.

## Commands

- `pnpm dev` - Start development server (http://localhost:4321)
- `pnpm build` - Type check + static build (outputs to `dist/`)
- `pnpm preview` - Preview production build locally
- `pnpm panda` - Regenerate Panda CSS types and utilities
- `pnpm lint:fix` - Lint and auto-fix with Oxlint
- `pnpm format:fix` - Format code with Oxfmt
- `pnpm test:a11y` - Run accessibility tests with Playwright (runs `pnpm build` internally)
- `pnpm lighthouce:ci` - Run Lighthouse CI (requires `pnpm build` first)

## Gotchas

- **Formatter**: Uses Oxlint + Oxfmt, not ESLint/Prettier. Run `pnpm lint:fix && pnpm format:fix` before committing.
- **Panda CSS**: After changing `panda.config.ts` or CSS patterns, run `pnpm panda` to regenerate types.
- **Static site**: No server-side runtime. All data fetching happens at build time in Astro pages.
- **Env var**: `MICRO_CMS_API_KEY` is required — build fails without it.
- **Node.js**: Version 24 or higher required.
