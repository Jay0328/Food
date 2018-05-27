const merge = require('webpack-merge');
const { resolve } = require('path');
const common = require('./webpack.common');

const DIST_DIR = resolve(__dirname, 'dist');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map'
});
