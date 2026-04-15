# FS Design System — Specifications

This directory is the **source of truth** for design decisions. Engineers and designers
read specs here _before_ touching code. Any token value or component behaviour that
isn't reflected in code should have a spec entry here first.

## Directory structure

```
specs/
├── tokens/
│   ├── color.md
│   ├── spacing.md
│   ├── typography.md
│   ├── border.md
│   └── elevation.md
└── components/
    ├── button.md
    ├── input.md
    └── badge.md
```

## How to write a spec

1. Describe the **design intent** — why does this token/component exist?
2. List **all variants / states** with their visual properties.
3. Include **accessibility requirements** (WCAG AA minimum).
4. Note any **known constraints** or decisions that were intentionally ruled out.
5. Reference the Storybook story using `Title / StoryName`.

## Updating a spec

- Specs drive code — change the spec _first_, then update the implementation.
- Keep the "Last updated" date at the top current.
- Use [Conventional Commits](https://www.conventionalcommits.org/) style in commit messages:
  `spec(button): add loading state definition`
