import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './fs-badge.js';
import type { FsBadge } from './fs-badge.js';

const meta: Meta<FsBadge> = {
  title: 'Components / Badge',
  component: 'fs-badge',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info'],
    },
    size: { control: 'select', options: ['sm', 'md'] },
  },
  render: args => html`
    <fs-badge variant=${args.variant ?? 'default'} size=${args.size ?? 'md'}>Badge</fs-badge>
  `,
};

export default meta;
type Story = StoryObj<FsBadge>;

export const Default: Story  = { args: { variant: 'default' } };
export const Success: Story  = { args: { variant: 'success' } };
export const Warning: Story  = { args: { variant: 'warning' } };
export const Error: Story    = { args: { variant: 'error' } };
export const Info: Story     = { args: { variant: 'info' } };

export const AllVariants: Story = {
  render: () => html`
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
      <fs-badge variant="default">Default</fs-badge>
      <fs-badge variant="success">Success</fs-badge>
      <fs-badge variant="warning">Warning</fs-badge>
      <fs-badge variant="error">Error</fs-badge>
      <fs-badge variant="info">Info</fs-badge>
    </div>
  `,
};
