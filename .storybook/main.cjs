/** @type { import('@storybook/vue3-vite').StorybookConfig } */

const path = require("path");
const { mergeConfig } = require('vite');
const turbosnap = require('vite-plugin-turbosnap');

const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-addon-pseudo-states",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ['../src/assets'],
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
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
      plugins: configType === 'PRODUCTION' ? [turbosnap({ rootDir: config.root ?? process.cwd() })] : [],
    });
  },
};

module.exports = config;
