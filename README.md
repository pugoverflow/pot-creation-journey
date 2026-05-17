# Pot Creation Journey

A responsive Next.js app: marketing homepage → multi-step pot creation → dashboard preview.

## Features

- Multi-step pot creation flow
- Simulated cross-domain routing (`/` vs `/dashboard/*`)
- Client-side persistence via `localStorage`
- Accessible UI (Base UI + Tailwind)
- Storybook for component docs
- Vitest + Testing Library component tests (header, logo)

## Tech Stack

**App:** [Next.js](https://nextjs.org/) (App Router), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)

**UI:** [Tailwind CSS](https://tailwindcss.com/), [CVA](https://cva.style/docs), [Base UI](https://base-ui.com/), [Lucide](https://lucide.dev/), [Motion](https://motion.dev/)

**Tooling:** [Storybook](https://storybook.js.org/)

**Testing:** [Vitest](https://vitest.dev/), [Vite](https://vite.dev/), [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react), [jsdom](https://github.com/jsdom/jsdom), [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) ([React](https://www.npmjs.com/package/@testing-library/react), [jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom))

**Linting:** [ESLint](https://eslint.org/), [eslint-config-next](https://nextjs.org/docs/app/api-reference/config/eslint) (Core Web Vitals + TypeScript)

## Getting Started

```bash
npm install
npm run dev
```

Start at [http://localhost:3000](http://localhost:3000) and complete the pot creation flow—on submit you are redirected to `/dashboard/pots/{id}`. The preview only works for pots already saved in `localStorage` in that browser; visiting a dashboard URL directly (or after clearing storage) will not load a pot.

## Scripts

All `npm run` commands defined in `package.json`:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js dev server ([http://localhost:3000](http://localhost:3000)) |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build (run after `build`) |
| `npm run storybook` | Start Storybook ([http://localhost:6006](http://localhost:6006)) |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest in watch mode |
| `npm run test:run` | Run Vitest once (CI) |
| `npm run check` | Run lint, tests, and build |

## Architecture

The challenge simulates `collctiv.com` vs `app.collctiv.com` using App Router routes:

```txt
/              → homepage (create pot)
/dashboard/*   → dashboard (preview by potId)
```

Pots are stored in `localStorage` keyed by `potId` so the dashboard route loads independently—no shared React state across the simulated domain boundary. The dashboard reads pots via `usePot` in `lib/pot-storage.ts` (hydration-safe `useSyncExternalStore` over the stored JSON string). In production this would be an API; `localStorage` is a lightweight stand-in.

## Trade-offs

- **`localStorage` for persistence** — Chosen over `sessionStorage` so pots survive refresh and remain available when opening the dashboard route (including in another tab), and over encoding state in the URL because that felt unnecessarily complex for this scope. The dashboard reads pots by `potId` from storage (`lib/pot-storage.ts`) rather than shared React context, which mirrors fetching from an API on a separate subdomain.

- **Base UI for interactions** — Headless primitives give accessible focus, keyboard, and ARIA behaviour without fighting a pre-styled kit. Styling stays in Tailwind + CVA so the UI matches the design closely.

- **Token-based utility classes** — Reusable classes on primitive colour tokens kept styling fast and consistent during the challenge. In a larger product, these would likely become semantic design tokens plus dedicated typography and spacing components.

- **Journey before polish** — The full create → preview path was prioritised early so functionality and information architecture were proven before investing in animation and visual refinement under time pressure.

## Approach

- **Content-led development** — The multi-step flow and routing logic were implemented first with minimal styling, so the core journey worked end-to-end before polish. That reduced the risk of over-investing in UI before the architecture was sound.

- **Semantic HTML, then components** — Screens started as semantic markup aligned to the design. As patterns repeated, shared pieces moved into `components/ui` (primitives + CVA variants) and `components/custom` (app-specific), with Base UI replacing ad-hoc interactive markup where it helped.

- **Incremental commits** — [Gitmoji](https://gitmoji.dev/) conventions keep the history scannable for reviewers and reflect how I’d slice work in a team setting (small, focused changes). See [commit history](https://github.com/pugoverflow/pot-creation-journey/commits/main/).

## Quality checks

Run lint, tests, and a production build in one step with `npm run check` (see [Scripts](#scripts)).

## Linting

[ESLint](https://eslint.org/) runs via `eslint.config.mjs`, extending Next.js [Core Web Vitals](https://nextjs.org/docs/app/api-reference/config/eslint#core-web-vitals) and [TypeScript](https://nextjs.org/docs/app/api-reference/config/eslint#typescript) presets. Build output (`.next`, `out`, `build`) and `next-env.d.ts` are ignored.

| Package | Role |
| --- | --- |
| `eslint` | Linter |
| `eslint-config-next` | Next.js recommended rules (React, hooks, a11y, TypeScript) |

Run with `npm run lint` (see [Scripts](#scripts)).

## Testing

Component tests live next to source (`**/*.{test,spec}.{ts,tsx}`), run in [jsdom](https://github.com/jsdom/jsdom) via [Vitest](https://vitest.dev/). [Vite](https://vite.dev/) and [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) power the test runner; [@testing-library/react](https://www.npmjs.com/package/@testing-library/react) and [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom) provide queries and DOM matchers. Global setup (`vitest.setup.ts`) registers jest-dom, cleans up after each test, and mocks `next/image`.

| Package | Role |
| --- | --- |
| `vitest` | Test runner and assertions |
| `vite` | Bundler used by Vitest |
| `@vitejs/plugin-react` | React/JSX support in tests |
| `jsdom` | Browser-like DOM environment |
| `@testing-library/react` | Render components and query the DOM |
| `@testing-library/jest-dom` | Extra matchers (e.g. `toBeVisible`) |

Run with `npm run test` (watch) or `npm run test:run` (single run) — see [Scripts](#scripts).

## Storybook

Personal stretch goal—documents UI primitives and custom components in isolation from the app flow. Stories live under `components/**/*.stories.{ts,tsx}` and `storybook/documentation/` (see `.storybook/main.ts`). The [Next.js + Vite](https://storybook.js.org/docs/get-started/frameworks/nextjs-vite) framework serves static assets from `public/`.

| Package | Role |
| --- | --- |
| `storybook` | Storybook CLI and UI |
| `@storybook/nextjs-vite` | Next.js + Vite integration |
| `@storybook/addon-docs` | Autodocs and MDX |

Run with `npm run storybook` (see [Scripts](#scripts)).
