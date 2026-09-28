# Meridian Georgia (React)

Vite + React 18 multi-page site (7 static pages, 3 languages: ka/en/ru).

## Scripts

- `npm run dev` — dev server (`http://127.0.0.1:5183`)
- `npm run build` — typecheck + production build into `build/`
- `npm run preview` — preview the production build
- `npm run typecheck` — `tsc --noEmit`

## Structure

- `*.html` — page shells (hand-maintained; `.gen.mjs` holds the template for regeneration)
- `src/entries/` — one mount entry per page
- `src/content/` — page copy as typed `Block[]` data (`text.ts` holds the shared `L()` helper)
- `src/blocks/parts.tsx` — shared block primitives (`Actions`, `DataTable`, `CardBody`)
- `src/Blocks.tsx` — block-kind switch (exhaustive via `assertNever`)
- `src/Layout.tsx` — header/nav/footer shell
- `src/i18n.tsx` — `ka/en/ru` provider (`?lang=` URL param + `localStorage`)
- `src/site.ts` — deployment/contact constants (single source of truth)
- `src/hooks.ts` — shared hooks (`useEscapeKey`)
- `public/` — static assets, `robots.txt`, `sitemap.xml`, `404.html`

## Conventions

- Trilingual copy uses `Text = Record<Lang, string>` — every string exists in all 3 languages.
- Contact details and the site URL live in `src/site.ts`; do not hardcode emails/phones in content or layout.
- New block kinds: extend the `Block` union in `src/content/types.ts`; the switch in `src/Blocks.tsx` will fail to compile until handled.

## Before going live

1. Replace `https://meridian-georgia.example` with the production domain (`*.html`, `public/robots.txt`, `public/sitemap.xml`, `.gen.mjs`, `src/site.ts` contacts).
2. Replace placeholder addresses/numbers/statistics with real data.
3. Consider prerendering/SSR so crawlers see content without JS.
