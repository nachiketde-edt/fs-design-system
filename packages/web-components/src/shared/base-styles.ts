import { css } from 'lit';

/**
 * Global reset + token imports shared across all components.
 * Each component adopts this via `static styles = [baseStyles, ...]`
 */
export const baseStyles = css`
  :host {
    box-sizing: border-box;
    display: inline-block;
    font-family: var(--fs-font-sans, "Inter", ui-sans-serif, system-ui, sans-serif);
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;
