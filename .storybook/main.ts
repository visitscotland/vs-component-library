import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/vue3-vite';
import { aliases } from '../vite.alias.ts';

const config: StorybookConfig = {
    stories: [
        '../stories/**/*.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],

    addons: [
        '@storybook/addon-links',
        '@chromatic-com/storybook',
        '@storybook/addon-a11y',
        '@storybook/addon-docs',
        'storybook-addon-tag-badges',
    ],

    framework: {
        name: '@storybook/vue3-vite',
        options: {
        },
    },

    staticDirs: ['../src/assets'],

    viteFinal: (viteConfig) =>
        mergeConfig(viteConfig, {
            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: '@import "@/styles/resources.scss";',
                        quietDeps: true,
                    },
                },
            },

            define: {
                'process.env': process.env,
                'process.versions': process.versions,
                'process.platform': `"${process.platform}"`,
            },

            resolve: {
                alias: aliases,
            },
        }),
};

export default config;