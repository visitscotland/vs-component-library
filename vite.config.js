import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import ViteRequireContext from '@originjs/vite-plugin-require-context';

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
        ],
        build: {
            transpile: [
                'youtube-vue3',
            ],
            lib: {
                entry: path.resolve(__dirname, 'src/test.ts'),
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
