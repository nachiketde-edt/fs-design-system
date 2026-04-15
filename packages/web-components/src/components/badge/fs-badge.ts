import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { baseStyles } from '../../shared/base-styles.js';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info';
export type BadgeSize    = 'sm' | 'md';

/**
 * `<fs-badge>` — FS Design System status badge.
 *
 * @element fs-badge
 * @slot default - Badge label
 *
 * @example
 * <fs-badge variant="success">Active</fs-badge>
 */
@customElement('fs-badge')
export class FsBadge extends LitElement {
  static override styles = [
    baseStyles,
    css`
      :host {
        display: inline-flex;
      }

      span {
        display: inline-flex;
        align-items: center;
        gap: var(--fs-spacing-1, 4px);
        border-radius: var(--fs-radius-full, 9999px);
        font-weight: var(--fs-font-weight-medium, 500);
        white-space: nowrap;
      }

      :host([size='sm']) span {
        padding: 1px var(--fs-spacing-2, 8px);
        font-size: var(--fs-text-xs, 0.75rem);
      }
      :host([size='md']) span,
      span {
        padding: var(--fs-spacing-1, 4px) var(--fs-spacing-3, 12px);
        font-size: var(--fs-text-xs, 0.75rem);
      }

      /* ── Variants ─────── */
      :host([variant='default']) span,
      span {
        background-color: var(--fs-color-neutral-100, #f3f4f6);
        color: var(--fs-color-neutral-700, #374151);
      }
      :host([variant='success']) span {
        background-color: var(--fs-color-success-light, #d1fae5);
        color: var(--fs-color-success-dark, #065f46);
      }
      :host([variant='warning']) span {
        background-color: var(--fs-color-warning-light, #fef3c7);
        color: var(--fs-color-warning-dark, #92400e);
      }
      :host([variant='error']) span {
        background-color: var(--fs-color-error-light, #fee2e2);
        color: var(--fs-color-error-dark, #991b1b);
      }
      :host([variant='info']) span {
        background-color: var(--fs-color-info-light, #dbeafe);
        color: var(--fs-color-info-dark, #1e40af);
      }
    `,
  ];

  @property({ reflect: true }) variant: BadgeVariant = 'default';
  @property({ reflect: true }) size: BadgeSize = 'md';

  override render() {
    return html`<span><slot></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fs-badge': FsBadge;
  }
}
