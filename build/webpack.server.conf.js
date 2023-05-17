const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const base = require('./webpack.conf');
const { VueSSRServerPlugin } = require('./lib/server.plugin');

const registerComponent = require.resolve('./lib/registerComponent');

const entry = {
    'main-server': path.resolve(__dirname, '../src/server-entry.js'),
};

base.entry = {
    ...entry,
    ...base.entry,
};

delete base.optimization;

module.exports = merge(base, {
    target: 'node',
    output: {
        path: path.resolve(__dirname, '../dist/ssr/server'),
    },
    module: {
        rules: [
            // This loader registers components for async chunk inferrence
            {
                test: /\.js$/,
                resourceQuery: /^\?vue/,
                use: registerComponent,
            },
        ],
    },
    externals: nodeExternals({
        // do not externalize CSS files in case we need to import it from a dep
        allowlist: /\.css$/,
    }),
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1,
        }),
        new VueSSRServerPlugin(),
    ],
});
