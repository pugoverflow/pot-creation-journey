# Pot Creation Journey

A responsive Next.js app: marketing homepage → multi-step pot creation → dashboard preview.

## Features

- Multi-step pot creation flow
- Simulated cross-domain routing (`/` vs `/dashboard/*`)
- Client-side persistence via `localStorage`
- Accessible UI (Base UI + Tailwind)
- Storybook for component docs
- Vitest + Testing Library component tests (header, logo)
- Pre-commit formatting and lint fixes via Husky + lint-staged

## Tech Stack

**App:** [Next.js](https://nextjs.org/) (App Router), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)

**UI:** [Tailwind CSS](https://tailwindcss.com/), [CVA](https://cva.style/docs), [Base UI](https://base-ui.com/), [Lucide](https://lucide.dev/), [Motion](https://motion.dev/)

**Tooling:** [Storybook](https://storybook.js.org/)

**Testing:** [Vitest](https://vitest.dev/), [Vite](https://vite.dev/), [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react), [jsdom](https://github.com/jsdom/jsdom), [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) ([React](https://www.npmjs.com/package/@testing-library/react), [jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom))

**Linting & formatting:** [ESLint](https://eslint.org/), [eslint-config-next](https://nextjs.org/docs/app/api-reference/config/eslint) (Core Web Vitals + TypeScript), [Prettier](https://prettier.io/), [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged) (pre-commit)

## Getting Started

```bash
npm install   # also runs `prepare` → sets up Husky git hooks
npm run dev
```

Start at [http://localhost:3000](http://localhost:3000) and complete the pot creation flow—on submit you are redirected to `/dashboard/pots/{id}`. The preview only works for pots already saved in `localStorage` in that browser. A dashboard URL for a missing or unknown `potId` (or after clearing storage) triggers `notFound()` and the generic 404 page (`app/not-found.tsx`).

## Scripts

All `npm run` commands defined in `package.json`:

| Command                | Description                                                                   |
| ---------------------- | ----------------------------------------------------------------------------- |
| `npm run dev`          | Start the Next.js dev server ([http://localhost:3000](http://localhost:3000)) |
| `npm run build`        | Create an optimized production build                                          |
| `npm run start`        | Serve the production build (run after `build`)                                |
| `npm run storybook`    | Start Storybook ([http://localhost:6006](http://localhost:6006))              |
| `npm run lint`         | Run ESLint                                                                    |
| `npm run format`       | Format the repo with Prettier                                                 |
| `npm run format:check` | Check formatting without writing files                                        |
| `npm run test`         | Run Vitest in watch mode                                                      |
| `npm run test:run`     | Run Vitest once (CI)                                                          |
| `npm run check`        | Run lint, tests, and build                                                    |

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

- **No TDD, thin test coverage** — Tests were added after the core journey worked, not test-first. Coverage is limited to two component test files (header, logo): render, props, and interaction assertions—not test-first or full-journey coverage. Pot creation, `localStorage`, dashboard routing, and 404 handling were checked manually.

## Approach

- **Content-led development, journey before polish** — The multi-step flow and routing logic were implemented first with minimal styling so the create → preview path worked end-to-end before animation and visual refinement. That proved functionality and information architecture under time pressure and reduced the risk of over-investing in UI before the architecture was sound.

- **Semantic HTML, then components** — Screens started as semantic markup aligned to the design. As patterns repeated, shared pieces moved into `components/ui` (primitives + CVA variants) and `components/custom` (app-specific), with Base UI replacing ad-hoc interactive markup where it helped.

- **Incremental commits** — [Gitmoji](https://gitmoji.dev/) conventions keep the history scannable for reviewers and reflect how I’d slice work in a team setting (small, focused changes). See [commit history](https://github.com/pugoverflow/pot-creation-journey/commits/main/).

## Quality checks

On each commit, Husky runs lint-staged on staged files (Prettier + ESLint `--fix` — see [Code quality](#code-quality)). For a full pass before pushing, run `npm run check` (lint, tests, and production build). Commands are listed in [Scripts](#scripts).

## Code quality

- **ESLint** — `eslint.config.mjs` with Next.js Core Web Vitals + TypeScript presets; build output and `next-env.d.ts` ignored. Manual run: `npm run lint`.
- **Prettier** — `.prettierrc.json` (2-space indent, semicolons, double quotes); `.prettierignore` skips build artifacts and the lockfile. `npm run format` / `npm run format:check`.
- **Pre-commit** — `npm install` runs `prepare` → Husky (`.husky/pre-commit`) → lint-staged on staged paths: JS/TS/MJS get Prettier then ESLint `--fix`; CSS/JSON/MD get Prettier only. Config in `package.json` under `lint-staged`.

## Testing

Component tests live next to source as `**/*.test.tsx` files (currently `header.test.tsx`, `logo.test.tsx` — thin coverage by design, see [Trade-offs](#trade-offs)). They run in [jsdom](https://github.com/jsdom/jsdom) via [Vitest](https://vitest.dev/); [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) queries the DOM and asserts render output, props, and clicks (e.g. header modals and `router.back`). Global setup (`vitest.setup.ts`) registers jest-dom, cleans up after each test, and mocks `next/image` and `next/navigation` where needed.

Run with `npm run test` (watch) or `npm run test:run` (single run) — see [Scripts](#scripts).

## Storybook

Personal stretch goal—documents UI primitives and custom components in isolation from the app flow. Stories live under `components/**/*.stories.{ts,tsx}` and `storybook/documentation/` (see `.storybook/main.ts`). The [Next.js + Vite](https://storybook.js.org/docs/get-started/frameworks/nextjs-vite) framework serves static assets from `public/`.

| Package                  | Role                       |
| ------------------------ | -------------------------- |
| `storybook`              | Storybook CLI and UI       |
| `@storybook/nextjs-vite` | Next.js + Vite integration |
| `@storybook/addon-docs`  | Autodocs and MDX           |

Run with `npm run storybook` (see [Scripts](#scripts)).
