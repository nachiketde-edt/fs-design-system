import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { baseStyles } from '../../shared/base-styles.js';

export type InputSize = 'sm' | 'md' | 'lg';

/**
 * `<fs-input>` — FS Design System text input component.
 *
 * @element fs-input
 * @slot label  - Override the label text with custom content
 * @slot prefix - Icon / adornment rendered inside the input on the left
 * @slot suffix - Icon / adornment rendered inside the input on the right
 * @fires change - Forwarded from inner <input>
 * @fires input  - Forwarded from inner <input>
 * @csspart input     - The inner <input> element
 * @csspart label     - The <label> element
 * @csspart container - The wrapper div around the input
 *
 * @example
 * <fs-input label="Email" type="email" placeholder="you@example.com"></fs-input>
 */
@customElement('fs-input')
export class FsInput extends LitElement {
  static override styles = [
    baseStyles,
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: var(--fs-spacing-1, 4px);
        width: 100%;
      }

      label {
        font-size: var(--fs-text-sm, 0.875rem);
        font-weight: var(--fs-font-weight-medium, 500);
        color: var(--fs-color-neutral-700, #374151);
      }

      .container {
        position: relative;
        display: flex;
        align-items: center;
      }

      input {
        width: 100%;
        border: 1px solid var(--fs-color-neutral-300, #d1d5db);
        border-radius: var(--fs-radius-md, 6px);
        font-family: inherit;
        font-size: var(--fs-text-sm, 0.875rem);
        color: var(--fs-color-neutral-900, #111827);
        background-color: var(--fs-color-neutral-0, #fff);
        transition: border-color 150ms ease, box-shadow 150ms ease;
        padding: var(--fs-spacing-2, 8px) var(--fs-spacing-3, 12px);
      }

      input::placeholder {
        color: var(--fs-color-neutral-400, #9ca3af);
      }

      input:focus {
        outline: none;
        border-color: var(--fs-color-brand-500, #3b82f6);
        box-shadow: 0 0 0 3px rgb(59 130 246 / 0.15);
      }

      input:disabled {
        background-color: var(--fs-color-neutral-100, #f3f4f6);
        cursor: not-allowed;
        opacity: 0.6;
      }

      :host([invalid]) input {
        border-color: var(--fs-color-error-default, #ef4444);
      }

      :host([invalid]) input:focus {
        box-shadow: 0 0 0 3px rgb(239 68 68 / 0.15);
      }

      .helper {
        font-size: var(--fs-text-xs, 0.75rem);
        color: var(--fs-color-neutral-500, #6b7280);
      }

      :host([invalid]) .helper {
        color: var(--fs-color-error-default, #ef4444);
      }
    `,
  ];

  @property() label = '';
  @property() name = '';
  @property() type = 'text';
  @property() value = '';
  @property() placeholder = '';
  @property() helper = '';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) required = false;
  @property({ type: Boolean, reflect: true }) invalid = false;
  @property({ reflect: true }) size: InputSize = 'md';

  private _handleInput(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
    this.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
  }

  private _handleChange(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  override render() {
    const id = `fs-input-${this.name || Math.random().toString(36).slice(2)}`;

    return html`
      ${this.label
        ? html`<label part="label" for=${id}>${this.label}</label>`
        : ''}
      <div class="container" part="container">
        <slot name="prefix"></slot>
        <input
          part="input"
          id=${id}
          type=${this.type}
          name=${this.name}
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-invalid=${this.invalid}
          @input=${this._handleInput}
          @change=${this._handleChange}
        />
        <slot name="suffix"></slot>
      </div>
      ${this.helper ? html`<span class="helper">${this.helper}</span>` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fs-input': FsInput;
  }
}
