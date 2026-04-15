# Color Tokens

**Last updated:** 2026-04-15
**Storybook:** Design Tokens / Overview → Colors

## Brand palette

The brand palette is built on a 10-step scale derived from `#3b82f6` (Tailwind Blue 500).
Use the scale for interactive elements, focus rings, and illustrative accents.

| Token | Value | Usage |
|---|---|---|
| `brand-50`  | `#eff6ff` | Hover backgrounds, ghost button fill |
| `brand-100` | `#dbeafe` | Light badge backgrounds |
| `brand-500` | `#3b82f6` | Focus ring, icon accents |
| `brand-600` | `#2563eb` | Primary button background |
| `brand-700` | `#1d4ed8` | Primary button hover |
| `brand-900` | `#1e3a8a` | Dark mode primary |

## Neutral palette

Grey scale used for text, borders, backgrounds, and dividers.

| Token | Value | Usage |
|---|---|---|
| `neutral-0`   | `#ffffff` | Component backgrounds (white) |
| `neutral-50`  | `#f9fafb` | Page background |
| `neutral-100` | `#f3f4f6` | Disabled input background |
| `neutral-200` | `#e5e7eb` | Dividers, borders |
| `neutral-300` | `#d1d5db` | Input borders (default) |
| `neutral-400` | `#9ca3af` | Placeholder text |
| `neutral-500` | `#6b7280` | Helper / caption text |
| `neutral-700` | `#374151` | Body text (secondary) |
| `neutral-900` | `#111827` | Body text (primary), headings |

## Semantic colours

Semantic tokens communicate meaning, not brand identity. Never use brand colours
directly for semantic purposes.

| Category | Light bg | Default | Dark text | Usage |
|---|---|---|---|---|
| success | `#d1fae5` | `#10b981` | `#065f46` | Positive actions, confirmations |
| warning | `#fef3c7` | `#f59e0b` | `#92400e` | Cautionary states |
| error   | `#fee2e2` | `#ef4444` | `#991b1b` | Validation errors, destructive |
| info    | `#dbeafe` | `#3b82f6` | `#1e40af` | Informational banners |

## Accessibility

- Text on `brand-600` background must meet WCAG AA (4.5:1 for normal, 3:1 for large text).
- `neutral-500` on `neutral-0` = 4.6:1 — passes AA for text ≥ 14px bold or ≥ 18px.
- Semantic icon-only usage must be accompanied by a visually-hidden label.
