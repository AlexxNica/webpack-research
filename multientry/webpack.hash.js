'use strict'

//@see http://webpack.github.io/docs/long-term-caching.html#option-1-one-hash-for-the-bundle
var path = require('path')

module.exports = {

  entry: {
    profile: __dirname + '/assets/scripts/profile.js',
    feed: __dirname + '/assets/scripts/feed.js'
  },

  output: {
    path: path.join(__dirname, 'dist', '[hash]'),
    publicPath: 'assets/[hash]',
    filename: '[hash].[name].js',
    chunkFilename: '[id].[hash].[name].js'
  }
};
