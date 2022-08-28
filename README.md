# Fullstack Typescript Monorepo Template 2022

## Tech stack

- Typescript
- React
- Express
- Eslint + Airbnb Styleguide
- node, ts-node esm loader
- Vite

TODOs:
- vitest for uint tests

## setup

Using `pnpm` as package manager.

`packages/*` are the workspaces compiled.

Uses turborepo to manage orchestration of builds / other commands

`packages/shared` and `packages/ui` are buildless local packages with exported typescript code.

`packages/frontend` and `packages/backend` consume these packages.

Available global commands:

- `pnpm run build`
- `pnpm run lint`
- `pnpm run dev`