import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './fs-button.js';
import type { FsButton } from './fs-button.js';

const meta: Meta<FsButton> = {
  title: 'Components / Button',
  component: 'fs-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
      description: 'Visual style variant',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
      table: { defaultValue: { summary: 'md' } },
    },
    disabled: { control: 'boolean' },
    loading:  { control: 'boolean' },
  },
  render: args => html`
    <fs-button
      variant=${args.variant ?? 'primary'}
      size=${args.size ?? 'md'}
      ?disabled=${args.disabled}
      ?loading=${args.loading}
    >
      Button
    </fs-button>
  `,
};

export default meta;
type Story = StoryObj<FsButton>;

export const Primary: Story = {
  args: { variant: 'primary', size: 'md' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', size: 'md' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', size: 'md' },
};

export const Danger: Story = {
  args: { variant: 'danger', size: 'md' },
};

export const Disabled: Story = {
  args: { variant: 'primary', disabled: true },
};

export const Loading: Story = {
  args: { variant: 'primary', loading: true },
};

export const Sizes: Story = {
  render: () => html`
    <div style="display:flex;gap:8px;align-items:center">
      <fs-button size="sm">Small</fs-button>
      <fs-button size="md">Medium</fs-button>
      <fs-button size="lg">Large</fs-button>
    </div>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <fs-button variant="primary">Primary</fs-button>
      <fs-button variant="secondary">Secondary</fs-button>
      <fs-button variant="ghost">Ghost</fs-button>
      <fs-button variant="danger">Danger</fs-button>
    </div>
  `,
};
