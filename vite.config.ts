import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import ViteRequireContext from '@originjs/vite-plugin-require-context';
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        define: {
            'process.env': JSON.stringify(env),
            'process.versions': process.versions,
            'process.platform': `"${process.platform}"`,
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @import "@/styles/resources.scss";
                    `,
                },
            },
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                find: '@vue/runtime-core',
                replacement: '@vue/runtime-core/dist/runtime-core.esm-bundler.js',
            },
        },
        plugins: [
            vue(),
            ViteRequireContext(),
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
            lib: {
                entry: path.resolve(__dirname, 'src/component-entry.ts'),
                name: 'vs-component-library',
                fileName: 'vs-component-library',
            },
            rollupOptions: {
                external: [
                    'vue',
                    'bootstrap-vue-next',
                    'youtube-vue3',
                ],
                output: {
                    dir: 'dist/components',
                    // assetFileNames: 'vs-component-library.[ext]',
                    globals: {
                        vue: 'Vue',
                        'bootstrap-vue-next': 'BootstrapVueNext',
                        'youtube-vue3': 'YoutubeVue3',
                    },
                },
            },
        },
    };
});
