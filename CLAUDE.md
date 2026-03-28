# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Artist portfolio website for Gesine Grundmann. Full-stack Next.js 15 + PayloadCMS 3.75 application with SQLite database. The admin panel manages art objects, biography sections, and media uploads; the frontend renders public-facing pages with server-side rendering.

## Commands

| Task | Command |
|------|---------|
| Dev server | `pnpm dev` (http://localhost:3000, admin at /admin) |
| Dev server (clean) | `pnpm devsafe` (deletes .next first) |
| Build | `pnpm build` |
| Start production | `pnpm start` |
| Lint | `pnpm lint` |
| Type check | `tsc --noEmit` |
| Generate Payload types | `pnpm generate:types` (run after schema changes) |
| Generate import map | `pnpm generate:importmap` (run after creating/modifying components) |
| All tests | `pnpm test` |
| Integration tests | `pnpm test:int` (Vitest) |
| E2E tests | `pnpm test:e2e` (Playwright, chromium) |
| Single integration test | `pnpm test:int -- tests/int/api.int.spec.ts` |
| Single E2E test | `pnpm test:e2e -- tests/e2e/admin.e2e.spec.ts` |

Package manager is **pnpm** (v9 or v10). Node >= 18.20.2 or >= 20.9.0.

## Architecture

**Two route groups** under `src/app/`:
- `(frontend)/` — Public pages (server components fetching data via Payload Local API with `getPayload()`)
- `(payload)/` — Admin panel (`/admin`), REST API (`/api/[...slug]`), GraphQL (`/api/graphql`)

**Collections** in `src/collections/`:
- `Users` — Authentication (email-based)
- `Media` — Image/video uploads (stored in `/media/`)
- `ArtObjects` — Portfolio items (images array, description, ordering, featured flag)
- `VitaSections` — Biography entries (teaching, grants, shows, collections)

**Key config**: `src/payload.config.ts` — SQLite adapter, Lexical rich text editor, Sharp for image processing.

**Generated file**: `src/payload-types.ts` — auto-generated from collection schemas. Never edit manually; regenerate with `pnpm generate:types`.

**Data fetching pattern** (server components):
```typescript
const payload = await getPayload({ config: await config })
const result = await payload.find({ collection: 'artObjects' })
```

The Local API bypasses access control by default. Public collections use `access: { read: () => true }`.

**Client components** are marked with `'use client'` and are limited to interactive elements (BackArrow, ScrollToTop, ViewsPage carousel).

## Environment

Copy `.env.example` to `.env`. Required variables:
- `DATABASE_URL` — SQLite path (e.g., `file:./local.db`)
- `PAYLOAD_SECRET` — Any secret string for Payload auth

## Code Style

- Prettier: single quotes, no semicolons, trailing commas, 100 char width
- ESLint: next/core-web-vitals + next/typescript, unused vars prefixed with `_`
- TypeScript strict mode, path aliases: `@/*` → `./src/*`, `@payload-config` → `./src/payload.config.ts`

## Important Patterns

- Always pass `req` to nested operations in Payload hooks (transaction safety)
- Run `pnpm generate:types` after changing any collection schema
- Run `pnpm generate:importmap` after creating or modifying custom admin components
- Rich text uses Lexical format (JSON tree structure)
- Components are colocated with their CSS files (e.g., `BackArrow/BackArrow.tsx` + `BackArrow.css`)
