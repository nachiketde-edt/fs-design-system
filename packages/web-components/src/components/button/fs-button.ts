import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { baseStyles } from '../../shared/base-styles.js';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize    = 'sm' | 'md' | 'lg';

/**
 * `<fs-button>` — FS Design System button component.
 *
 * @element fs-button
 * @slot default - Button label content
 * @slot icon-left  - Icon rendered before the label
 * @slot icon-right - Icon rendered after the label
 * @fires click - Native click, forwarded from inner <button>
 * @csspart button - The inner <button> element
 *
 * @example
 * <fs-button variant="primary" size="md">Save</fs-button>
 */
@customElement('fs-button')
export class FsButton extends LitElement {
  static override styles = [
    baseStyles,
    css`
      :host {
        display: inline-flex;
      }

      button {
        display: inline-flex;
        align-items: center;
        gap: var(--fs-spacing-2, 8px);
        border: var(--fs-border-1, 1px) solid transparent;
        border-radius: var(--fs-radius-md, 6px);
        font-family: inherit;
        font-weight: var(--fs-font-weight-medium, 500);
        cursor: pointer;
        transition: background-color 150ms ease, border-color 150ms ease, color 150ms ease,
          box-shadow 150ms ease;
        white-space: nowrap;
        user-select: none;
        text-decoration: none;
      }

      button:focus-visible {
        outline: 2px solid var(--fs-color-brand-500, #3b82f6);
        outline-offset: 2px;
      }

      button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      /* ── Sizes ──────────────────────────────────── */
      :host([size='sm']) button {
        padding: var(--fs-spacing-1, 4px) var(--fs-spacing-3, 12px);
        font-size: var(--fs-text-sm, 0.875rem);
        line-height: var(--fs-leading-normal, 1.5);
      }
      :host([size='md']) button,
      button {
        padding: var(--fs-spacing-2, 8px) var(--fs-spacing-4, 16px);
        font-size: var(--fs-text-sm, 0.875rem);
        line-height: var(--fs-leading-normal, 1.5);
      }
      :host([size='lg']) button {
        padding: var(--fs-spacing-3, 12px) var(--fs-spacing-6, 24px);
        font-size: var(--fs-text-base, 1rem);
        line-height: var(--fs-leading-normal, 1.5);
      }

      /* ── Variants ───────────────────────────────── */
      :host([variant='primary']) button,
      button {
        background-color: var(--fs-color-brand-600, #2563eb);
        color: var(--fs-color-neutral-0, #fff);
        border-color: var(--fs-color-brand-600, #2563eb);
      }
      :host([variant='primary']) button:hover:not(:disabled),
      button:hover:not(:disabled) {
        background-color: var(--fs-color-brand-700, #1d4ed8);
        border-color: var(--fs-color-brand-700, #1d4ed8);
      }

      :host([variant='secondary']) button {
        background-color: var(--fs-color-neutral-0, #fff);
        color: var(--fs-color-neutral-700, #374151);
        border-color: var(--fs-color-neutral-300, #d1d5db);
      }
      :host([variant='secondary']) button:hover:not(:disabled) {
        background-color: var(--fs-color-neutral-50, #f9fafb);
      }

      :host([variant='ghost']) button {
        background-color: transparent;
        color: var(--fs-color-brand-600, #2563eb);
        border-color: transparent;
      }
      :host([variant='ghost']) button:hover:not(:disabled) {
        background-color: var(--fs-color-brand-50, #eff6ff);
      }

      :host([variant='danger']) button {
        background-color: var(--fs-color-error-default, #ef4444);
        color: var(--fs-color-neutral-0, #fff);
        border-color: var(--fs-color-error-default, #ef4444);
      }
      :host([variant='danger']) button:hover:not(:disabled) {
        background-color: var(--fs-color-error-dark, #991b1b);
        border-color: var(--fs-color-error-dark, #991b1b);
      }

      /* ── Loading state ──────────────────────────── */
      :host([loading]) button {
        cursor: wait;
        opacity: 0.8;
      }
    `,
  ];

  @property({ reflect: true }) variant: ButtonVariant = 'primary';
  @property({ reflect: true }) size: ButtonSize = 'md';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) loading = false;
  @property() type: 'button' | 'submit' | 'reset' = 'button';

  override render() {
    return html`
      <button
        part="button"
        type=${this.type}
        ?disabled=${this.disabled || this.loading}
        aria-disabled=${this.disabled || this.loading}
        aria-busy=${this.loading}
      >
        <slot name="icon-left"></slot>
        ${this.loading ? html`<span aria-hidden="true">⏳</span>` : ''}
        <slot></slot>
        <slot name="icon-right"></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fs-button': FsButton;
  }
}
