const path = require('path');
const Dotenv = require('dotenv-webpack');

const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const sass = require('sass');

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
            vue: '@vue/runtime-dom',
            'bootstrap-vue$': 'bootstrap-vue-next/src/BootstrapVue.ts',
            '@': resolve('src'),
            '@components': resolve('src/components'),
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
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
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[hash:7].[ext]',
                },
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    name: 'media/[name].[hash:7].[ext]',
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                type: 'asset/resource',
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
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        // Compiles Sass to CSS
                        loader: 'sass-loader',
                        options: {
                            additionalData: `
                                @import "@/styles/core.styles.scss";
                            `,
                            implementation: sass,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
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
        css: true,
        lazyCompilation: {
            entries: true,
            imports: true,
        },
    },
    performance: {
        maxEntrypointSize: 750000,
    },
    stats: {
        entrypoints: false,
        children: false,
    },
    plugins: [
        new VueLoaderPlugin(),

        new Dotenv(),

        new ESLintPlugin({
            extensions: ['js', 'vue'],
            exclude: [
                '/ssr/',
                '/src/components/patterns/header/components/Chart/',
                '/node_modules',
            ],
            failOnError: true,
            failOnWarning: false,
        }),

        // extract css into its own file
        new MiniCssExtractPlugin({
            filename: buildMode === 'development' ? 'styles/[name].css' : 'styles/[chunkhash].css',
        }),

        // Generate custom manifest.json
        new WebpackManifestPlugin({
            generate: generateManifest,
            fileName: 'manifest.json',
        }),

        new CleanWebpackPlugin(),
    ],
};

module.exports = webpackConfig;
