# Badge Component

**Last updated:** 2026-04-15
**Storybook:** Components / Badge
**Custom element:** `<fs-badge>`
**React:** `<Badge>` from `@fs-ds/react`
**Angular:** `<fs-badge-component>` from `@fs-ds/angular`

## Purpose

Compact, non-interactive label that communicates status or category.

## Variants

| Variant | Background | Text | When to use |
|---|---|---|---|
| `default` | neutral-100 | neutral-700 | Tags, categories, neutral labels |
| `success` | success-light | success-dark | Active, completed, online |
| `warning` | warning-light | warning-dark | Pending, at risk, expiring soon |
| `error`   | error-light | error-dark | Failed, rejected, critical |
| `info`    | info-light | info-dark | Informational, beta, new |

## Sizes

| Size | Padding | Font size |
|---|---|---|
| `sm` | 1 × 8 px | 12px |
| `md` | 4 × 12 px | 12px |

## Accessibility

- Badges are purely visual indicators. If the meaning is not conveyed elsewhere,
  add `aria-label` or visually-hidden supplementary text for screen readers.
- Do not use badge colour alone to convey state — always accompany with text.

## Do / Don't

**Do**
- Keep badge labels brief (1–3 words).
- Use `success`/`error`/`warning` only for states, not decoration.

**Don't**
- Make badges interactive (use a `Chip` or `Tag` pattern for that — TBD).
- Use more than 3–4 badges in a single row.
