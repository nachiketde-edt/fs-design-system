import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: [
    // Introduction / documentation pages
    '../../packages/*/src/**/*.mdx',
    // All component stories (web-components, react, angular)
    '../../packages/*/src/**/*.stories.@(js|jsx|ts|tsx)',
    // App-level stories
    './src/**/*.stories.@(js|jsx|ts|tsx)',
    './src/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Docs',
  },
};

export default config;
