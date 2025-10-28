import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dts from 'vite-plugin-dts';
import replace from '@rollup/plugin-replace';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        define: {
            'process.env': JSON.stringify({
                ICON_KIT_TOKEN: env.ICON_KIT_TOKEN,
                ICON_API_TOKEN: env.ICON_API_TOKEN,
                RECAPTCHA_TOKEN: env.RECAPTCHA_TOKEN,
                EVENTS_API_URL: env.EVENTS_API_URL,
                CLUDO_API_KEY: env.CLUDO_API_KEY,
                CLUDO_CUSTOMER_ID: env.CLUDO_CUSTOMER_ID,
                CLUDO_ENGINE_ID: env.CLUDO_ENGINE_ID,
                GOOGLE_MAPS_API_KEY: env.GOOGLE_MAPS_API_KEY,
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
            vue({
                template: {
                    compilerOptions: {
                        /**
                         * Custom Google Maps Places UI Kit components
                         * listed here to stop errors in console.
                         */
                        isCustomElement: (tag) => [
                            'gmp-map',
                            'gmp-advanced-marker',
                            'gmp-place-search',
                            'gmp-place-search-all-content',
                            'gmp-place-text-search-request',
                            'gmp-place-nearby-search-request',
                            'gmp-place-details',
                            'gmp-place-details-place-request',
                            'gmp-place-all-content',
                            'gmp-place-content-config',
                            'gmp-place-address',
                            'gmp-place-rating',
                            'gmp-place-type',
                            'gmp-place-price',
                            'gmp-place-accessible-entrance-icon',
                            'gmp-place-opening-hours',
                            'gmp-place-website',
                            'gmp-place-phone-number',
                            'gmp-place-summary',
                            'gmp-place-type-specific-highlights',
                            'gmp-place-reviews',
                            'gmp-place-feature-list',
                            'gmp-place-media',
                            'gmp-place-attribution',
                        ].includes(tag),
                    },
                },
            }),
            dts({
                outDir: './dist/components',
                include: [
                    './src/components',
                    // './src/custom-components',
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
            replace({
                'process.getuid': '() => -1',
                preventAssignment: true,
            }),
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
