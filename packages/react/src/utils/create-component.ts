/**
 * Thin utility: wraps a web-component tag name in a typed React component.
 * React 19 has native custom-element support; for React 18 we use this shim.
 */
import React from 'react';

type WebComponentProps<T extends Record<string, unknown>> = T &
  React.HTMLAttributes<HTMLElement> & {
    ref?: React.Ref<HTMLElement>;
  };

export function createComponent<Props extends Record<string, unknown>>(
  tagName: string,
  _elementClass: CustomElementConstructor
) {
  const Component = React.forwardRef<HTMLElement, WebComponentProps<Props>>(
    ({ children, ...props }, ref) => {
      return React.createElement(tagName, { ref, ...props }, children);
    }
  );
  Component.displayName = tagName;
  return Component;
}
