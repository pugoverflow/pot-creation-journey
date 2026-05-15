# Pot Creation Journey

## Overview

A responsive Next.js web application that guides a user from a marketing homepage through a multi-step flow to create a group pot.

---

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Base UI](https://base-ui.com/)
- [Motion](https://motion.dev/)
- [Vitest](https://vitest.dev/)

---

## Instructions

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Open the application

Homepage:

```txt
http://localhost:3000
```

Pot preview screen:

```txt
http://localhost:3000/dashboard/pots/[potId]
```

Example:

```txt
http://localhost:3000/dashboard/pots/example-pot-id
```

---

## Architectural Decisions

The challenge mentioned simulating a split between:

```txt
collctiv.com
```

and:

```txt
app.collctiv.com
```

To handle this, I used route separation within Next.js App Router:

```txt
/                     → homepage
/dashboard/*          → dashboard experience
```

Pot data is persisted using `localStorage` so the dashboard route can independently retrieve the pot data using the route parameter rather than relying on shared React state.

---

## Trade-offs

- I used `localStorage` for persistence as `sessionStorage` is tab-specific and URL state felt unnecessarily complex for the scope of the challenge.
- I chose Base UI for interactive components so I could keep full control over the styling whilst still benefiting from accessible component primitives and interaction logic.

---

## Best Practices

### Content-led development

The initial focus was getting the full user journey and logic working end-to-end before introducing styling and polish.

This ensured the core functionality and information architecture were established early whilst reducing the risk of spending too much time on UI before the flow itself was fully working.

### Semantic HTML

Initially, components were built using semantic HTML whilst establishing the layout structure and matching the design.

This helped keep accessibility in mind from the start and avoided unnecessary code bloat and premature abstraction.

### DRY (Don't Repeat Yourself)

Before introducing styling, I reviewed the design to identify elements that were likely to become reusable across the application.

As patterns started repeating, those elements were extracted into reusable components and replaced with Base UI primitives where appropriate. This helped avoid duplicating styles and logic throughout the codebase, making components easier to maintain and govern consistently.

In a production environment, these components could evolve into a separate component library as part of a larger design system.

### Incremental approach

To help make my thought process easier to follow during review, I’ve been using the conventions from [gitmoji.dev](https://gitmoji.dev/) for commit messages.

In a production environment, this reflects the sort of incremental development workflow typically seen alongside CI/CD practices.

Commit history:

https://github.com/pugoverflow/pot-creation-journey/commits/main/