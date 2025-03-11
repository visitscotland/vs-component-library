import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig(() => ({
    define: {
        'process.getuid': '(() => undefined)',
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
    ],
    build: {
        cssCodeSplit: true,
        lib: {
            entry: {
                'vs-component-library': path.resolve(__dirname, 'src/component-entry.ts'),
                fonts: path.resolve(__dirname, 'src/assets/fonts/fonts.scss'),
                icons: path.resolve(__dirname, 'src/styles/third-party/_font-awesome.scss'),
            },
            name: 'vs-component-library',
            fileName: '[name]',
        },
        rollupOptions: {
            external: [
                'vue',
                'bootstrap-vue-next',
                'pinia',
                'mapbox-gl',
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
}));
