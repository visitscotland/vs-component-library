import path from 'node:path';

export const aliases = [
    {
        find: '@',
        replacement: path.resolve(process.cwd(), 'src'),
    },
    {
        find: '@assets',
        replacement: path.resolve(process.cwd(), 'src/assets'),
    },
    {
        find: '@components',
        replacement: path.resolve(process.cwd(), 'src/components'),
    },
    {
        find: '@vue/runtime-core',
        replacement:
            '@vue/runtime-core/dist/runtime-core.esm-bundler.js',
    },
];
