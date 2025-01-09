import path from 'path';
import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    "@storybook/addon-a11y",
    "storybook-addon-mock",
    'storybook-addon-datalayer-watcher',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  staticDirs: ['../src/assets'],
  viteFinal: (viteConfig) =>
    mergeConfig(viteConfig, {
      css: {
        preprocessorOptions: {
          scss: {
            // Next line will prepend the import in all you scss files as you did with your vite.config.js file
            additionalData: `@import "../src/styles/resources.scss";`,
          },
        },
      },
      define: {
        'process.env': process.env,
        'process.versions': process.versions,
        'process.platform': `"${process.platform}"`,
      },
      resolve: {
        alias: [
          {
            find: "@",
            replacement: path.resolve(__dirname, "../src"),
          },
          {
            find: "@assets",
            replacement: path.resolve(__dirname, "../src/assets"),
          },
          {
            find: "@components",
            replacement: path.resolve(__dirname, "../src/components"),
          },
        ],
      },
    }),
};

export default config;