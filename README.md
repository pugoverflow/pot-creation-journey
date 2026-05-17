# Pot Creation Journey

A responsive Next.js app: marketing homepage → multi-step pot creation → dashboard preview.

## Features

- Multi-step pot creation flow
- Simulated cross-domain routing (`/` vs `/dashboard/*`)
- Client-side persistence via `localStorage`
- Accessible UI (Base UI + Tailwind)
- Storybook for component docs

## Tech Stack

**App:** [Next.js](https://nextjs.org/) (App Router), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)

**UI:** [Tailwind CSS](https://tailwindcss.com/), [CVA](https://cva.style/docs), [Base UI](https://base-ui.com/), [Lucide](https://lucide.dev/), [Motion](https://motion.dev/)

**Tooling:** [Storybook](https://storybook.js.org/), [Vitest](https://vitest.dev/), [ESLint](https://eslint.org/)

## Getting Started

```bash
npm install
npm run dev          # http://localhost:3000
npm run storybook    # http://localhost:6006
```

Start at [http://localhost:3000](http://localhost:3000) and complete the pot creation flow—on submit you are redirected to `/dashboard/pots/{id}`. The preview only works for pots already saved in `localStorage` in that browser; visiting a dashboard URL directly (or after clearing storage) will not load a pot.

## Architecture

The challenge simulates `collctiv.com` vs `app.collctiv.com` using App Router routes:

```txt
/              → homepage (create pot)
/dashboard/*   → dashboard (preview by potId)
```

Pots are stored in `localStorage` keyed by `potId` so the dashboard route loads independently—no shared React state across the simulated domain boundary. In production this would be an API; `localStorage` is a lightweight stand-in.

## Trade-offs

- **`localStorage` for persistence** — Chosen over `sessionStorage` because it is tab-specific, and over encoding state in the URL because that felt unnecessarily complex for this scope. The dashboard reads pots by `potId` from storage (`lib/pot-storage.ts`, hydration-safe via `useSyncExternalStore`) rather than shared React context, which mirrors fetching from an API on a separate subdomain.

- **Base UI for interactions** — Headless primitives give accessible focus, keyboard, and ARIA behaviour without fighting a pre-styled kit. Styling stays in Tailwind + CVA so the UI matches the design closely.

- **Token-based utility classes** — Reusable classes on primitive colour tokens kept styling fast and consistent during the challenge. In a larger product, these would likely become semantic design tokens plus dedicated typography and spacing components.

- **Journey before polish** — The full create → preview path was prioritised early so functionality and information architecture were proven before investing in animation and visual refinement under time pressure.

## Approach

- **Content-led development** — The multi-step flow and routing logic were implemented first with minimal styling, so the core journey worked end-to-end before polish. That reduced the risk of over-investing in UI before the architecture was sound.

- **Semantic HTML, then components** — Screens started as semantic markup aligned to the design. As patterns repeated, shared pieces moved into `components/ui` (primitives + CVA variants) and `components/custom` (app-specific), with Base UI replacing ad-hoc interactive markup where it helped.

- **Incremental commits** — [Gitmoji](https://gitmoji.dev/) conventions keep the history scannable for reviewers and reflect how I’d slice work in a team setting (small, focused changes). See [commit history](https://github.com/pugoverflow/pot-creation-journey/commits/main/).

## Storybook

Personal stretch goal—documents UI primitives and custom components in isolation from the app flow.
