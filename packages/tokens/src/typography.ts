/**
 * Typography tokens
 * Source of truth: specs/tokens/typography.md
 */
export const fontFamily = {
  sans:  '"Inter", ui-sans-serif, system-ui, -apple-system, sans-serif',
  mono:  '"JetBrains Mono", ui-monospace, "Courier New", monospace',
  serif: '"Merriweather", ui-serif, Georgia, serif',
} as const;

export const fontSize = {
  xs:   '0.75rem',   // 12px
  sm:   '0.875rem',  // 14px
  base: '1rem',      // 16px
  lg:   '1.125rem',  // 18px
  xl:   '1.25rem',   // 20px
  '2xl': '1.5rem',   // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem',  // 36px
  '5xl': '3rem',     // 48px
} as const;

export const fontWeight = {
  regular:  '400',
  medium:   '500',
  semibold: '600',
  bold:     '700',
} as const;

export const lineHeight = {
  none:    '1',
  tight:   '1.25',
  snug:    '1.375',
  normal:  '1.5',
  relaxed: '1.625',
  loose:   '2',
} as const;

export const letterSpacing = {
  tighter: '-0.05em',
  tight:   '-0.025em',
  normal:  '0em',
  wide:    '0.025em',
  wider:   '0.05em',
  widest:  '0.1em',
} as const;

export type FontFamilyToken = typeof fontFamily;
export type FontSizeToken   = typeof fontSize;
export type FontWeightToken = typeof fontWeight;
