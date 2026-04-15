/**
 * Color tokens
 * Source of truth: specs/tokens/color.md
 */
export const color = {
  // --- Brand ---
  brand: {
    50:  '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6', // primary
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },

  // --- Neutrals ---
  neutral: {
    0:   '#ffffff',
    50:  '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
    1000: '#000000',
  },

  // --- Semantic ---
  success: {
    light: '#d1fae5',
    default: '#10b981',
    dark: '#065f46',
  },
  warning: {
    light: '#fef3c7',
    default: '#f59e0b',
    dark: '#92400e',
  },
  error: {
    light: '#fee2e2',
    default: '#ef4444',
    dark: '#991b1b',
  },
  info: {
    light: '#dbeafe',
    default: '#3b82f6',
    dark: '#1e40af',
  },
} as const;

export type ColorToken = typeof color;
