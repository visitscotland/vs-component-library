import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import ViteRequireContext from '@originjs/vite-plugin-require-context';

export default defineConfig({
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
            entry: path.resolve(__dirname, 'src/test.js'),
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
                globals: {
                    vue: 'Vue',
                    'bootstrap-vue-next': 'BootstrapVueNext',
                    'youtube-vue3': 'YoutubeVue3',
                },
            },
        },
    },
    define: {
        'process.env': process.env,
        'process.versions': process.versions,
        'process.platform': `"${process.platform}"`,
    },
});
