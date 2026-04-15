import React from 'react';
import '@fs-ds/web-components/input';
import type { InputSize } from '@fs-ds/web-components';

export interface InputProps {
  label?: string;
  name?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  helper?: string;
  disabled?: boolean;
  required?: boolean;
  invalid?: boolean;
  size?: InputSize;
  onChange?: (value: string) => void;
  onInput?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * FS Input — React wrapper for `<fs-input>`.
 *
 * @example
 * <Input label="Email" type="email" onChange={val => setEmail(val)} />
 */
export const Input = React.forwardRef<HTMLElement, InputProps>(
  (
    {
      label,
      name,
      type = 'text',
      value,
      placeholder,
      helper,
      disabled,
      required,
      invalid,
      size = 'md',
      onChange,
      onInput,
      className,
      style,
    },
    ref
  ) => {
    const handleChange = (e: Event) => {
      onChange?.((e.target as HTMLInputElement).value);
    };
    const handleInput = (e: Event) => {
      onInput?.((e.target as HTMLInputElement).value);
    };

    return (
      // @ts-expect-error — custom element not in React's intrinsics
      <fs-input
        ref={ref}
        label={label}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        helper={helper}
        size={size}
        disabled={disabled || undefined}
        required={required || undefined}
        invalid={invalid || undefined}
        class={className}
        style={style}
        onChange={handleChange}
        onInput={handleInput}
      />
    );
  }
);

Input.displayName = 'Input';
