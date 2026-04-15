# Input Component

**Last updated:** 2026-04-15
**Storybook:** Components / Input
**Custom element:** `<fs-input>`
**React:** `<Input>` from `@fs-ds/react`
**Angular:** `<fs-input-component>` from `@fs-ds/angular` (ControlValueAccessor)

## Purpose

Single-line text entry. Supports label, helper text, prefix/suffix slots, and validation states.

## Anatomy

```
[Label]
[ prefix | <input>          | suffix ]
[Helper text / error message]
```

## Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `label` | string | `''` | Visible label (also sets `for` on `<label>`) |
| `name` | string | `''` | Input name |
| `type` | string | `'text'` | HTML input type |
| `value` | string | `''` | Controlled value |
| `placeholder` | string | `''` | Placeholder text |
| `helper` | string | `''` | Helper / error message below input |
| `size` | `sm\|md\|lg` | `'md'` | Input height / padding |
| `disabled` | boolean | `false` | Disables the field |
| `required` | boolean | `false` | Marks as required |
| `invalid` | boolean | `false` | Error state — red border + ring |

## States

| State | Visual indicator |
|---|---|
| Default | Neutral-300 border |
| Focus | Brand-500 border, 3px blue ring at 15% opacity |
| Invalid | Error-default border, 3px red ring at 15% opacity |
| Disabled | Neutral-100 background, 60% opacity |

## Slots

| Slot | Purpose |
|---|---|
| `prefix` | Icon or adornment on the left (e.g. search icon, currency symbol) |
| `suffix` | Icon or adornment on the right (e.g. clear button, show-password toggle) |

## Events

| Event | Detail | Notes |
|---|---|---|
| `input` | — | Fires on every keystroke |
| `change` | — | Fires on blur / programmatic change |

## Angular forms

`FsInputComponent` implements `ControlValueAccessor`, so it works with both
template-driven (`ngModel`) and reactive (`formControl`) Angular forms.

## Accessibility

- The `<label>` is always associated to the `<input>` via `for` / `id`.
- `aria-invalid` mirrors the `invalid` property.
- Helper text is rendered as a `<span>` — if it contains an error, pair the input
  with `aria-describedby` pointing to the helper span ID.
- Placeholder text does **not** replace a label — always provide `label`.
