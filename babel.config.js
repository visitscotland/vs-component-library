module.exports = {
    presets: ['@babel/preset-env'],
    plugins: [
        '@babel/plugin-transform-runtime',
        'macros',
    ],
    exclude: [],
    ignore: [/node_modules\/(?!bootstrap-vue-next)/],
    env: {
        test: {
            presets: ['@babel/preset-env'],
            plugins: [
                'macros',
            ],
        },
    },
};
