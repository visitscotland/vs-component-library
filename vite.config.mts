import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            find: '@vue/runtime-core',
            replacement: '@vue/runtime-core/dist/runtime-core.esm-bundler.js',
        },
    },
    plugins: [
        vue(),
    ],
});
