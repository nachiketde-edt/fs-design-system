# Application Testing Guide

This guide covers three layers of application-level testing for the FS Design System:

1. **Visual regression** — catch unintended UI changes across all components
2. **Storybook interaction tests** — verify component behaviour in the portal
3. **End-to-end (E2E)** — test the demo apps as a real consumer would

---

## 1. Visual regression testing with Chromatic

[Chromatic](https://www.chromatic.com/) is the recommended tool — it integrates directly with Storybook and captures per-story snapshots.

### Setup

```bash
npm install --save-dev chromatic --workspace=apps/storybook
```

Add your project token to `.env.local` (never commit this):

```
CHROMATIC_PROJECT_TOKEN=your_token_here
```

### Running

```bash
# Build Storybook and upload snapshots to Chromatic
cd apps/storybook
npx chromatic --project-token=$CHROMATIC_PROJECT_TOKEN --build-script-name=build-storybook
```

On first run Chromatic establishes a baseline.  
Subsequent runs diff against the baseline and flag visual changes for review.

### What gets tested

Every story defined in `packages/*/src/**/*.stories.ts` is snapshotted:

| Story | Component states covered |
|---|---|
| `Components/Button` | Primary, Secondary, Ghost, Danger, Disabled, Loading, all sizes |
| `Components/Input` | Default, WithHelper, Invalid, Disabled |
| `Components/Badge` | All 5 variants, both sizes |
| `Design Tokens/Overview` | Colors, Spacing, Border radius, Elevation |

### Reviewing changes

1. Open the Chromatic dashboard link printed in the CLI output.
2. Review each changed snapshot — **accept** intentional changes, **deny** regressions.
3. Accepted changes become the new baseline.

---

## 2. Storybook interaction tests (`@storybook/test`)

Interaction tests run in-browser inside the Storybook portal using `@storybook/test` (built on Vitest + Playwright).

### Writing an interaction test

```ts
// packages/web-components/src/components/button/fs-button.stories.ts
import { expect, userEvent, within } from '@storybook/test';

export const ClickFiresEvent: Story = {
  args: { variant: 'primary' },
  render: () => html`
    <fs-button id="btn">Click me</fs-button>
    <div id="output"></div>
    <script>
      document.getElementById('btn').addEventListener('click', () => {
        document.getElementById('output').textContent = 'clicked';
      });
    </script>
  `,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByText('Click me');
    await userEvent.click(button);
    await expect(canvas.getByText('clicked')).toBeInTheDocument();
  },
};
```

### Running interaction tests

```bash
# Inside Storybook UI: click the "Interactions" panel on any story with a play() function.

# Headless (CI):
cd apps/storybook
npx concurrently -k -s first \
  "npm run storybook -- --no-open" \
  "npx wait-on http://localhost:6006 && npx test-storybook"
```

Install the CLI runner:
```bash
npm install --save-dev @storybook/test-runner --workspace=apps/storybook
```

---

## 3. End-to-end testing with Playwright

Playwright tests verify the full consumer experience by running the demo apps in a real browser.

### Setup

```bash
npm install --save-dev @playwright/test --workspace=apps/demo-react
npx playwright install chromium firefox webkit
```

### Project structure

```
apps/
├── demo-react/
│   ├── e2e/
│   │   ├── button.spec.ts
│   │   └── form.spec.ts
│   └── playwright.config.ts
├── demo-angular/
│   ├── e2e/
│   └── playwright.config.ts
└── demo-html/
    ├── e2e/
    └── playwright.config.ts
```

### Playwright config

```ts
// apps/demo-react/playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  use: { baseURL: 'http://localhost:5173' },
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
  ],
});
```

### Example test

```ts
// apps/demo-react/e2e/form.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Demo React — form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page renders FS Design System heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'FS Design System' })).toBeVisible();
  });

  test('submit button is present', async ({ page }) => {
    const btn = page.locator('fs-button[variant="primary"]').first();
    await expect(btn).toBeVisible();
  });

  test('filling in email and submitting shows success state', async ({ page }) => {
    const input = page.locator('fs-input').first();
    // interact with the shadow-DOM input
    await input.locator('input').fill('test@example.com');
    await page.locator('fs-button[type="submit"]').click();
    // loading state appears, then resolves
    await expect(page.locator('text=Submitted!')).toBeVisible({ timeout: 5000 });
  });

  test('clear button empties the email field', async ({ page }) => {
    const inputEl = page.locator('fs-input input');
    await inputEl.fill('test@example.com');
    await page.locator('fs-button[variant="secondary"]').click();
    await expect(inputEl).toHaveValue('');
  });
});
```

### Running E2E tests

```bash
# React demo
cd apps/demo-react
npx playwright test

# Angular demo
cd apps/demo-angular
npx playwright test

# HTML demo
cd apps/demo-html
npx playwright test

# All three in headed mode (useful for debugging)
npx playwright test --headed

# With Playwright UI explorer
npx playwright test --ui
```

### Viewing reports

```bash
npx playwright show-report
```

---

## Test matrix summary

| Layer | Tool | Scope | When to run |
|---|---|---|---|
| Unit — tokens | Vitest | Token values, types | Every commit |
| Unit — web components | Web Test Runner | Custom element behaviour | Every commit |
| Unit — React | Vitest + RTL | Component props, events | Every commit |
| Unit — Angular | Jest + TestBed | Component I/O, CVA | Every commit |
| Visual regression | Chromatic | All Storybook stories | Every PR |
| Interaction | Storybook test-runner | Stories with `play()` | Every PR |
| E2E — React demo | Playwright | Full user flow | Pre-merge / nightly |
| E2E — Angular demo | Playwright | Full user flow | Pre-merge / nightly |
| E2E — HTML demo | Playwright | Full user flow | Pre-merge / nightly |

---

## CI pipeline (GitHub Actions skeleton)

```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20', cache: 'npm' }

      - run: npm ci
      - run: npm run build
      - run: npm run test

      # Visual regression
      - name: Chromatic
        run: npx chromatic --project-token=${{ secrets.CHROMATIC_PROJECT_TOKEN }} --exit-zero-on-changes
        working-directory: apps/storybook

      # E2E
      - name: Install Playwright browsers
        run: npx playwright install --with-deps chromium
      - name: E2E — React demo
        run: npx playwright test
        working-directory: apps/demo-react
```
