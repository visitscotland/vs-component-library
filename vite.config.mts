import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dts from 'vite-plugin-dts';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        define: {
            'process.getuid': '() => undefined',
            'process.env': JSON.stringify({
                ICON_KIT_TOKEN: env.ICON_KIT_TOKEN,
                ICON_API_TOKEN: env.ICON_API_TOKEN,
                RECAPTCHA_TOKEN: env.RECAPTCHA_TOKEN,
            }),
            'process.versions': process.versions,
            'process.platform': `"${process.platform}"`,
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @import "@/styles/resources.scss";
                    `,
                    silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import', 'legacy-js-api'],
                },
            },
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                find: '@vue/runtime-core',
                replacement: '@vue/runtime-core/dist/runtime-core.esm-bundler.js',
            },
            dedupe: [
                'vue',
            ],
        },
        plugins: [
            vue(),
            dts({
                outDir: './dist/components',
                include: [
                    './src/components',
                    './src/directives',
                    './src/mixins',
                    './src/stores',
                    './src/styles',
                    './src/tokens',
                    './src/types',
                    './src/utils',
                    './src/component-entry.ts',
                    './src/constants.ts',
                ],
                exclude: [
                    './src/components/**/__tests__/**',
                    './src/stores/__mocks__/**',
                    './src/utils/__mocks__/**',
                ],
            }),
            nodePolyfills(),
        ],
        build: {
            cssCodeSplit: false,
            lib: {
                entry: {
                    'vs-component-library': path.resolve(__dirname, 'src/component-entry.ts'),
                    'vs-component-library-maps': path.resolve(__dirname, 'src/components/map-index.ts'),
                    fonts: path.resolve(__dirname, 'src/assets/fonts/fonts.scss'),
                    icons: path.resolve(__dirname, 'src/styles/third-party/_font-awesome.scss'),
                },
                name: 'vs-component-library',
                fileName: '[name]',
            },
            rollupOptions: {
                external: [
                    'vue',
                    'pinia',
                ],
                output: {
                    dir: 'dist/components',
                    globals: {
                        vue: 'Vue',
                        'bootstrap-vue-next': 'BootstrapVueNext',
                        pinia: 'Pinia',
                    },
                },
            },
        },
    };
});
