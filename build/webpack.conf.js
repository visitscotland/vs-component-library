const path = require('path');
const Dotenv = require('dotenv-webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const { TimeAnalyticsPlugin } = require('time-analytics-webpack-plugin');

const buildMode = require('./build-mode');
const generateManifest = require('./generate-manifest');

const appEntry = require('../src/entry');

const clientEntry = {
    VsApp: path.resolve(__dirname, '../src/client-entry.js'),
};

const entry = {
    ...appEntry,
    ...clientEntry,
};

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

const webpackConfig = {
    mode: buildMode,
    context: path.resolve(__dirname, '../'),
    entry,
    devtool: false,
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: buildMode === 'development' ? 'scripts/[name].js' : 'scripts/[chunkhash].js',
        publicPath: '../',
        library: '[name]',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            '@': resolve('src'),
            '@components': resolve('src/components'),
        },
        fallback: {
            fs: false,
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCss: true,
                    cacheBusting: true,
                    transformAssetUrls: {
                        video: ['src', 'poster'],
                        source: 'src',
                        img: 'src',
                        image: 'xlink:href',
                    },
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    resolve('docs'),
                    resolve('src'),
                    resolve('test'),
                    resolve('node_modules/webpack-dev-server/client'),
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            additionalData: '@import "@/styles/resources.scss";',
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loader: 'file-loader',
                type: 'javascript/auto',
                options: {
                    name: 'img/[name].[hash:7].[ext]',
                },
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'file-loader',
                type: 'javascript/auto',
                options: {
                    name: 'media/[name].[hash:7].[ext]',
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                },
            },
            {
                test: /\.svg$/,
                type: 'asset/source',
                generator: {
                    filename: buildMode === 'development' ? 'img/[name][ext]' : 'img/[name].[hash:7][ext]',
                },
                loader: 'svgo-loader',
                options: {
                    plugins: [
                        {
                            name: 'preset-default',
                            params: {
                                overrides: {
                                    removeViewBox: false,
                                    inlineStyles: {
                                        onlyMatchedOnce: false,
                                    },
                                },
                            },
                        },
                    ],
                },
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            maxInitialRequests: Infinity,
        },
        runtimeChunk: 'single',
        concatenateModules: false,
        moduleIds: 'deterministic',
    },
    experiments: {
        backCompat: false,
    },
    performance: {
        maxEntrypointSize: 750000,
    },
    stats: {
        entrypoints: false,
        children: false,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: buildMode === 'development' ? 'styles/[name].css' : 'styles/[chunkhash].css',
        }),

        new NodePolyfillPlugin(),

        new VueLoaderPlugin(),

        new Dotenv(),

        new ESLintPlugin({
            extensions: ['js', 'vue'],
            exclude: [
                '/ssr/',
                '/src/components/patterns/header/components/Chart/',
                './node_modules/',
                '/dist/',
            ],
            failOnError: true,
            failOnWarning: false,
        }),

        // Generate custom manifest.json
        new WebpackManifestPlugin({
            generate: generateManifest,
            fileName: 'manifest.json',
        }),

        new CleanWebpackPlugin(),
    ],
};

const wrappedWebpackConfig = TimeAnalyticsPlugin.wrap(webpackConfig);

module.exports = wrappedWebpackConfig;
