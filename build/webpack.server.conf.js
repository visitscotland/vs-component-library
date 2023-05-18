const path = require('path');
const webpack = require('webpack');
const { get } = require('lodash');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const base = require('./webpack.conf');
const { VueSSRServerPlugin } = require('./lib/server.plugin');

const entry = {
    'main-server': path.resolve(__dirname, '../ssr/server-entry.js'),
};

const sourceImports = require('./ssr.generate-component-library-map')(base.entry);

base.entry = {
    ...entry,
    ...base.entry,
};

delete base.optimization;

module.exports = merge(base, {
    target: 'node',
    output: {
        path: path.resolve(__dirname, '../dist/ssr/server'),
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
                test: /server-entry\.js$/,
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
        new VueSSRServerPlugin(),
    ],
});
