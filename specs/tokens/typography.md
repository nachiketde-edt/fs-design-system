# Typography Tokens

**Last updated:** 2026-04-15
**Storybook:** Design Tokens / Overview → Typography (TBD)

## Font families

| Token | Value | Usage |
|---|---|---|
| `sans`  | Inter → system-ui fallback | All UI text |
| `mono`  | JetBrains Mono → monospace | Code blocks, token values |
| `serif` | Merriweather → Georgia fallback | Long-form reading (marketing only) |

> **Note:** Inter must be loaded separately by the consuming application, either via
> Google Fonts or a self-hosted font file. The design system does not bundle the font.

## Font size scale

| Token | rem value | px equiv | Usage |
|---|---|---|---|
| `xs`   | 0.75rem  | 12px | Captions, helper text |
| `sm`   | 0.875rem | 14px | Body (compact), button labels |
| `base` | 1rem     | 16px | Body (default) |
| `lg`   | 1.125rem | 18px | Subheading |
| `xl`   | 1.25rem  | 20px | Heading (small) |
| `2xl`  | 1.5rem   | 24px | Heading (medium) |
| `3xl`  | 1.875rem | 30px | Heading (large) |
| `4xl`  | 2.25rem  | 36px | Display (small) |
| `5xl`  | 3rem     | 48px | Display (large) |

## Font weights

| Token | Value | Usage |
|---|---|---|
| `regular`  | 400 | Body text |
| `medium`   | 500 | Button labels, form labels |
| `semibold` | 600 | Subheadings, table headers |
| `bold`     | 700 | Headings, page titles |

## Line heights

Default body copy uses `normal` (1.5). Headings use `tight` (1.25).
