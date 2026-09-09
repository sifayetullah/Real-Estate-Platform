# Premium Real Estate Platform

A premium real-estate developer website built with Next.js (App Router), TypeScript, Tailwind CSS, and ESLint.

## Tech Stack

- **Next.js** (App Router, Server Components by default)
- **TypeScript** (strict mode)
- **Tailwind CSS** v4
- **ESLint**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — run ESLint

## Environment

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the deployed origin.

## Project Structure

- `src/app/` — routes and layout
- `src/components/` — React components (layout, shared, and feature-specific)
- `src/data/` — future content/data (projects, properties, journal)
- `src/lib/` — utilities and site configuration
- `src/types/` — shared TypeScript types
- `public/images/` — future image assets
