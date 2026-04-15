# Spacing Tokens

**Last updated:** 2026-04-15
**Storybook:** Design Tokens / Overview → Spacing

## Scale

All spacing values follow a **4-point grid**. This keeps visual rhythm consistent and
avoids arbitrary pixel values scattered through product code.

| Token | Value | Common usage |
|---|---|---|
| `0`  | `0px`   | Reset |
| `1`  | `4px`   | Icon gap, tight badge padding |
| `2`  | `8px`   | Input padding (vertical), gap between inline elements |
| `3`  | `12px`  | Button padding (sm), badge horizontal padding |
| `4`  | `16px`  | Button padding (md), form field gap, card padding |
| `5`  | `20px`  | — |
| `6`  | `24px`  | Button padding (lg), section gap (small) |
| `8`  | `32px`  | Card gap, section gap (medium) |
| `10` | `40px`  | — |
| `12` | `48px`  | Section gap (large) |
| `16` | `64px`  | Page section gap |
| `20` | `80px`  | Hero padding |
| `24` | `96px`  | — |

## Guidelines

- Prefer token values over raw pixel values everywhere.
- For layout-level spacing (page margins, grid gutters) use multiples of `--fs-spacing-4`.
- Do **not** add custom spacing steps. If a value isn't in the scale, round to the
  nearest token or raise a spec discussion.
