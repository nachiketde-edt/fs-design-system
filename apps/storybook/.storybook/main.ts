import type { StorybookConfig } from '@storybook/web-components-vite';
import { mergeConfig } from 'vite';
import path from 'path';

/**
 * All glob patterns are relative to THIS file's directory:
 *   apps/storybook/.storybook/
 *
 * To reach the monorepo root:  ../../../   (up: .storybook → storybook → apps → root)
 * To reach apps/storybook/src: ../src/
 */
const config: StorybookConfig = {
  stories: [
    // Component stories co-located with source in packages/
    '../../../packages/*/src/**/*.stories.{js,jsx,ts,tsx}',
    // MDX documentation pages in packages/
    '../../../packages/*/src/**/*.mdx',
    // App-level stories and docs
    '../src/**/*.stories.{js,jsx,ts,tsx}',
    '../src/**/*.mdx',
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
  viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          // Point workspace packages to their built dist so imports resolve
          // even when running storybook without a prior full build
          '@fs-ds/tokens/css': path.resolve(
            __dirname,
            '../../../packages/tokens/src/tokens.css'
          ),
        },
      },
      optimizeDeps: {
        // Lit uses ES modules with decorators — pre-bundle for faster HMR
        include: ['lit', 'lit/decorators.js', 'lit/directives/class-map.js'],
      },
    });
  },
};

export default config;
