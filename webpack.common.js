const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

const DIST_DIR = resolve(__dirname, 'dist');
const APP_DIR = resolve(__dirname, 'src');

module.exports = {
    entry: {
        app: ['babel-polyfill', `${APP_DIR}/index.js`],
    },
    output: {
        path: DIST_DIR,
        filename: '[name].[chunkhash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: APP_DIR,
                exclude: /node_modules/,
                enforce: 'pre',
                use: ['babel-loader']
            }
        ]
    },
    optimization: {
        minimize: false
    },
    plugins: [
        new CleanWebpackPlugin([DIST_DIR]),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};