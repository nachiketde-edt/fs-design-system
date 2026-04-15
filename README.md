# FS Design System

A framework-agnostic design system published as a versioned monorepo.  
One spec → one implementation (Web Components / Lit) → thin wrappers for React and Angular.

## Packages

| Package | Version | Description |
|---|---|---|
| [`@fs-ds/tokens`](./packages/tokens) | ![](https://img.shields.io/badge/dynamic/json?url=./packages/tokens/package.json&query=version&label=) | Design tokens — CSS custom properties, JS/TS exports, SCSS variables |
| [`@fs-ds/web-components`](./packages/web-components) | — | Framework-agnostic Lit v3 elements |
| [`@fs-ds/react`](./packages/react) | — | React 18 wrappers |
| [`@fs-ds/angular`](./packages/angular) | — | Angular 17 standalone components + NgModule |

## Apps

| App | Description |
|---|---|
| [`apps/storybook`](./apps/storybook) | Developer portal (Storybook v8) |
| [`apps/demo-react`](./apps/demo-react) | Vite + React consumer |
| [`apps/demo-angular`](./apps/demo-angular) | Angular CLI consumer |
| [`apps/demo-html`](./apps/demo-html) | Plain HTML / Web Components consumer |

## Documentation

| Guide | Description |
|---|---|
| [Build guide](./docs/BUILD.md) | How to build all packages and individual targets |
| [Unit testing](./docs/UNIT_TESTING.md) | Running and writing unit tests |
| [App testing](./docs/APP_TESTING.md) | Integration and visual regression testing |
| [Specs](./specs/README.md) | Component and token specifications (source of truth) |

## Quick start

```bash
# 1. Install all workspace dependencies
npm install

# 2. Build every package in dependency order
npm run build

# 3. Launch the Storybook developer portal
npm run storybook          # http://localhost:6006

# 4. Start a specific demo app
cd apps/demo-react   && npm run dev   # http://localhost:5173
cd apps/demo-angular && npm run dev   # http://localhost:4200
cd apps/demo-html    && npm run dev   # http://localhost:5173
```

## Versioning & releasing

All publishable packages (`tokens`, `web-components`, `react`, `angular`) are
**version-linked** via [Changesets](https://github.com/changesets/changesets).

```bash
# 1. Create a changeset entry after your work
npm run changeset

# 2. Bump versions across all linked packages
npm run version-packages

# 3. Build + publish to npm
npm run release
```

## Repository layout

```
fs-design-system/
├── packages/
│   ├── tokens/          @fs-ds/tokens
│   ├── web-components/  @fs-ds/web-components
│   ├── react/           @fs-ds/react
│   └── angular/         @fs-ds/angular
├── apps/
│   ├── storybook/
│   ├── demo-react/
│   ├── demo-angular/
│   └── demo-html/
├── specs/               Markdown component & token specifications
└── docs/                Developer guides
```
