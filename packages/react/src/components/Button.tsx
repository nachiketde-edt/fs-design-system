import React from 'react';
// Side-effect import: registers the custom element
import '@fs-ds/web-components/button';
import type { ButtonVariant, ButtonSize } from '@fs-ds/web-components';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  /** Convenience: icon rendered before label */
  iconLeft?: React.ReactNode;
  /** Convenience: icon rendered after label */
  iconRight?: React.ReactNode;
}

/**
 * FS Button — React wrapper for `<fs-button>`.
 *
 * @example
 * <Button variant="primary" size="md" onClick={() => {}}>Save</Button>
 */
export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', iconLeft, iconRight, ...props }, ref) => {
    return (
      // @ts-expect-error — custom element not in React's intrinsics
      <fs-button ref={ref} variant={variant} size={size} {...props}>
        {iconLeft && <span slot="icon-left">{iconLeft}</span>}
        {children}
        {iconRight && <span slot="icon-right">{iconRight}</span>}
        {/* @ts-expect-error */}
      </fs-button>
    );
  }
);

Button.displayName = 'Button';
