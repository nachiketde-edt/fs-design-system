import React from 'react';
import '@fs-ds/web-components/badge';
import type { BadgeVariant, BadgeSize } from '@fs-ds/web-components';

export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

/**
 * FS Badge — React wrapper for `<fs-badge>`.
 *
 * @example
 * <Badge variant="success">Active</Badge>
 */
export const Badge = React.forwardRef<HTMLElement, BadgeProps>(
  ({ children, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      // @ts-expect-error — custom element not in React's intrinsics
      <fs-badge ref={ref} variant={variant} size={size} {...props}>
        {children}
        {/* @ts-expect-error */}
      </fs-badge>
    );
  }
);

Badge.displayName = 'Badge';
