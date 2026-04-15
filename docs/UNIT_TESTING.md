# Unit Testing Guide

## Overview

| Package | Test runner | What is tested |
|---|---|---|
| `@fs-ds/tokens` | Vitest | Token shape, CSS variable names, value types |
| `@fs-ds/web-components` | Web Test Runner + `@web/test-runner` | Custom element rendering, properties, events |
| `@fs-ds/react` | Vitest + React Testing Library | Component rendering, props, event handlers |
| `@fs-ds/angular` | Jest + Angular TestBed | Component inputs, outputs, ControlValueAccessor |

---

## Running tests

### All packages at once

```bash
npm run test
```

Turbo runs each package's `test` script after its `build` completes.

### Single package

```bash
npx turbo run test --filter=@fs-ds/tokens
npx turbo run test --filter=@fs-ds/react
npx turbo run test --filter=@fs-ds/web-components
npx turbo run test --filter=@fs-ds/angular
```

Or directly:

```bash
cd packages/tokens   && npm test
cd packages/react    && npm test
cd packages/web-components && npm test
cd packages/angular  && npm test
```

### Watch mode (during development)

```bash
cd packages/react && npx vitest
cd packages/tokens && npx vitest
```

---

## Writing tests

### `@fs-ds/tokens` — Vitest

Tests live in `packages/tokens/src/__tests__/`.

```ts
// packages/tokens/src/__tests__/color.test.ts
import { describe, it, expect } from 'vitest';
import { color } from '../color';

describe('color tokens', () => {
  it('brand-500 is the primary brand colour', () => {
    expect(color.brand[500]).toBe('#3b82f6');
  });

  it('every semantic colour has light, default and dark variants', () => {
    for (const key of ['success', 'warning', 'error', 'info'] as const) {
      expect(color[key]).toHaveProperty('light');
      expect(color[key]).toHaveProperty('default');
      expect(color[key]).toHaveProperty('dark');
    }
  });
});
```

Run:
```bash
cd packages/tokens && npx vitest run
```

---

### `@fs-ds/web-components` — Web Test Runner

Tests live in `packages/web-components/src/**/*.test.ts`.

```ts
// packages/web-components/src/components/button/fs-button.test.ts
import { html, fixture, expect } from '@open-wc/testing';
import './fs-button.js';
import type { FsButton } from './fs-button.js';

describe('fs-button', () => {
  it('renders with default variant=primary', async () => {
    const el = await fixture<FsButton>(html`<fs-button>Click me</fs-button>`);
    expect(el.variant).to.equal('primary');
  });

  it('reflects disabled attribute to the inner button', async () => {
    const el = await fixture<FsButton>(
      html`<fs-button disabled>Click me</fs-button>`
    );
    const inner = el.shadowRoot!.querySelector('button')!;
    expect(inner.disabled).to.be.true;
  });

  it('does not fire click when disabled', async () => {
    const el = await fixture<FsButton>(
      html`<fs-button disabled>Click me</fs-button>`
    );
    let fired = false;
    el.addEventListener('click', () => (fired = true));
    el.click();
    expect(fired).to.be.false;
  });
});
```

Run:
```bash
cd packages/web-components && npm test
```

Config (`web-test-runner.config.mjs`):
```js
import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
  files: 'src/**/*.test.ts',
  nodeResolve: true,
  browsers: [playwrightLauncher({ product: 'chromium' })],
};
```

---

### `@fs-ds/react` — Vitest + React Testing Library

Tests live in `packages/react/src/**/*.test.tsx`.

```tsx
// packages/react/src/components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Save</Button>);
    expect(screen.getByText('Save')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handler = vi.fn();
    render(<Button onClick={handler}>Save</Button>);
    fireEvent.click(screen.getByText('Save'));
    expect(handler).toHaveBeenCalledOnce();
  });

  it('does not call onClick when disabled', () => {
    const handler = vi.fn();
    render(<Button disabled onClick={handler}>Save</Button>);
    fireEvent.click(screen.getByText('Save'));
    expect(handler).not.toHaveBeenCalled();
  });

  it('passes variant attribute to the custom element', () => {
    const { container } = render(<Button variant="danger">Delete</Button>);
    const el = container.querySelector('fs-button');
    expect(el?.getAttribute('variant')).toBe('danger');
  });
});
```

Vitest config (`packages/react/vitest.config.ts`):
```ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test-setup.ts'],
  },
});
```

Setup file (`packages/react/src/test-setup.ts`):
```ts
import '@testing-library/jest-dom/vitest';
```

---

### `@fs-ds/angular` — Jest + Angular TestBed

Tests live in `packages/angular/src/**/*.spec.ts`.

```ts
// packages/angular/src/components/button/button.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FsButtonComponent } from './button.component';

describe('FsButtonComponent', () => {
  let fixture: ComponentFixture<FsButtonComponent>;
  let component: FsButtonComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FsButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  it('defaults to variant=primary', () => {
    expect(component.variant).toBe('primary');
  });

  it('emits buttonClick when clicked and not disabled', () => {
    const spy = jest.fn();
    component.buttonClick.subscribe(spy);
    component.handleClick(new MouseEvent('click'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('does not emit buttonClick when disabled', () => {
    component.disabled = true;
    const spy = jest.fn();
    component.buttonClick.subscribe(spy);
    component.handleClick(new MouseEvent('click'));
    expect(spy).not.toHaveBeenCalled();
  });
});
```

---

## Code coverage

```bash
# React (Vitest)
cd packages/react && npx vitest run --coverage

# Tokens (Vitest)
cd packages/tokens && npx vitest run --coverage
```

Coverage reports are written to `coverage/` in each package and excluded from git via `.gitignore`.

---

## CI considerations

- Tests run **after** `build` in the Turbo pipeline (`"dependsOn": ["build"]` in `turbo.json`).
- Add `@web/test-runner-playwright` browsers to CI with `npx playwright install --with-deps chromium`.
- Coverage thresholds can be enforced in `vitest.config.ts`:

```ts
test: {
  coverage: {
    thresholds: { lines: 80, functions: 80, branches: 70 }
  }
}
```
