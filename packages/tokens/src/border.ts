/**
 * Border & radius tokens
 * Source of truth: specs/tokens/border.md
 */
export const borderRadius = {
  none:  '0px',
  sm:    '2px',
  base:  '4px',
  md:    '6px',
  lg:    '8px',
  xl:    '12px',
  '2xl': '16px',
  '3xl': '24px',
  full:  '9999px',
} as const;

export const borderWidth = {
  0:    '0px',
  1:    '1px',
  2:    '2px',
  4:    '4px',
  8:    '8px',
} as const;

export type BorderRadiusToken = typeof borderRadius;
export type BorderWidthToken  = typeof borderWidth;
