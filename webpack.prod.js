const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true
  },
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
  ]
});