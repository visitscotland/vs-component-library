const path = require('path');
const webpack = require('webpack');
const { get } = require('lodash');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const base = require('./webpack.conf');

const entry = {
    VsSSR: path.resolve(__dirname, '../ssr/ssr.js'),
};

const sourceImports = require('./ssr.generate-component-library-map')(base.entry);

delete base.optimization;
delete base.entry;

module.exports = merge(base, {
    target: 'node',
    entry,
    output: {
        path: path.resolve(__dirname, '../dist/ssr'),
        filename: 'index.js',
        libraryTarget: 'commonjs2',
    },
    externals: nodeExternals({
        // do not externalize dependencies that need to be processed by webpack.
        // you can add more file types here e.g. raw *.vue files
        // you should also whitelist deps that modifies `global` (e.g. polyfills)
        // whitelist: /[\.css]$/
    }),
    module: {
        rules: [
            {
                test: /ssr\.js$/,
                use: [
                    {
                        loader: path.resolve(__dirname, './ssr.dynamic-component-loader'),
                        options: {
                            componentMap: get(sourceImports, 'components'),
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),
    ],
});
