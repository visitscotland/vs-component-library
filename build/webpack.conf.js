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

const entry = require('./entry');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

const webpackConfig = {
    mode: buildMode,
    context: path.resolve(__dirname, '../'),
    entry,
    devtool: false,
    output: {
        path: path.resolve(__dirname, '../dist', 'library'),
        filename: buildMode === 'development' ? 'scripts/[name].js' : 'scripts/[chunkhash].js',
        publicPath: '../',
        library: '[name]',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            'bootstrap-vue$': 'bootstrap-vue-next/src/BootstrapVue.ts',
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
                test: /\.scss$/,
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
                loader: 'file-loader',
                type: 'javascript/auto',
                options: {
                    name: buildMode === 'development' ? 'fonts/[name].[ext]' : 'fonts/[name].[hash:7].[ext]',
                },
            },
            {
                test: /\.svg$/,
                oneOf: [
                    {
                        resourceQuery: /optimise/,
                        use: [
                            'html-loader',
                            {
                                loader: 'image-webpack-loader',
                                options: {
                                    svgo: {
                                        plugins: [
                                            {
                                                removeViewBox: false,
                                            },
                                            {
                                                inlineStyles: {
                                                    onlyMatchedOnce: false,
                                                },
                                            },
                                        ],
                                    },
                                },
                            },
                        ],
                    },
                    {
                        options: {
                            name: 'img/[name].[hash:7].[ext]',
                        },
                        loader: 'file-loader',
                    },
                ],
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
