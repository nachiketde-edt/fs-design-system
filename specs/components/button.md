# Button Component

**Last updated:** 2026-04-15
**Storybook:** Components / Button
**Custom element:** `<fs-button>`
**React:** `<Button>` from `@fs-ds/react`
**Angular:** `<fs-button-component>` from `@fs-ds/angular`

## Purpose

Triggers an action or navigation. Communicates priority through variant choice.

## Variants

| Variant | When to use |
|---|---|
| `primary` | The single most important action on the page/section |
| `secondary` | Secondary or alternative actions alongside a primary |
| `ghost` | Tertiary actions, inline text-like triggers |
| `danger` | Irreversible or destructive actions (delete, revoke) |

> **Rule:** Never show two `primary` buttons at the same level of hierarchy.

## Sizes

| Size | Padding (V × H) | Font size | Use case |
|---|---|---|---|
| `sm` | 4 × 12 px | 14px | Compact UIs, table row actions |
| `md` | 8 × 16 px | 14px | Default for most contexts |
| `lg` | 12 × 24 px | 16px | CTAs, prominent placement |

## States

| State | Behaviour |
|---|---|
| `default` | Standard interactive state |
| `hover` | Darker background / border |
| `focus-visible` | 2px ring using `brand-500` at 2px offset |
| `active` | Slightly darker than hover (handled by CSS) |
| `disabled` | 50% opacity, `not-allowed` cursor, no events |
| `loading` | Shows spinner, sets `aria-busy="true"`, blocks click |

## Slots

| Slot | Purpose |
|---|---|
| _(default)_ | Button label |
| `icon-left` | Icon before the label |
| `icon-right` | Icon after the label |

## Accessibility

- Uses a native `<button>` internally → inherits keyboard focus, ENTER/SPACE activation.
- `disabled` AND `aria-disabled` are both set to prevent assistive tech confusion.
- Loading state sets `aria-busy="true"` and `aria-disabled="true"`.
- Icon-only buttons (no text) **must** pass `aria-label` via the host attribute.

## Do / Don't

**Do**
- Use `type="submit"` on buttons inside `<form>` elements.
- Pair a `primary` with a `secondary` for confirm/cancel patterns.

**Don't**
- Use `ghost` as the sole action in a section — it has low affordance.
- Use `danger` for actions that are reversible.
