import { fileURLToPath, URL } from 'node:url';

export const aliases = [
    {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
    },
    {
        find: '@assets',
        replacement: fileURLToPath(new URL('./src/assets', import.meta.url)),
    },
    {
        find: '@components',
        replacement: fileURLToPath(new URL('./src/components', import.meta.url)),
    },
    {
        find: '@vue/runtime-core',
        replacement:
        '@vue/runtime-core/dist/runtime-core.esm-bundler.js',
    },
];
