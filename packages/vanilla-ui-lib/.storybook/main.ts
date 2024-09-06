import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'vite.config.ts',
      },
    },
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@fontsource': path.resolve(__dirname, '../../../node_modules/@fontsource'),
        },
      },
      optimizeDeps: {
        include: ['@fontsource/source-sans-pro'],
      },
      server: {
        fs: {
          allow: ['.', '..', '../..', '../../../node_modules/@fontsource'],
        },
      },
    });
  }
};

export default config;