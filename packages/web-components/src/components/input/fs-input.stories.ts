import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './fs-input.js';
import type { FsInput } from './fs-input.js';

const meta: Meta<FsInput> = {
  title: 'Components / Input',
  component: 'fs-input',
  tags: ['autodocs'],
  argTypes: {
    label:       { control: 'text' },
    placeholder: { control: 'text' },
    helper:      { control: 'text' },
    type:        { control: 'select', options: ['text', 'email', 'password', 'number', 'search'] },
    size:        { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled:    { control: 'boolean' },
    invalid:     { control: 'boolean' },
    required:    { control: 'boolean' },
  },
  render: args => html`
    <fs-input
      label=${args.label ?? 'Label'}
      placeholder=${args.placeholder ?? ''}
      helper=${args.helper ?? ''}
      type=${args.type ?? 'text'}
      size=${args.size ?? 'md'}
      ?disabled=${args.disabled}
      ?invalid=${args.invalid}
      ?required=${args.required}
      style="max-width:320px"
    ></fs-input>
  `,
};

export default meta;
type Story = StoryObj<FsInput>;

export const Default: Story = {
  args: { label: 'Email address', placeholder: 'you@example.com', type: 'email' },
};

export const WithHelper: Story = {
  args: { label: 'Password', type: 'password', helper: 'Minimum 8 characters.' },
};

export const Invalid: Story = {
  args: { label: 'Username', value: 'ab', invalid: true, helper: 'Must be at least 3 characters.' },
};

export const Disabled: Story = {
  args: { label: 'Read-only field', value: 'Cannot change', disabled: true },
};
