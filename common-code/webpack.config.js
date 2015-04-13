'use strict'

//@see http://webpack.github.io/docs/optimization.html
var webpack = require('webpack');

//分析所有entry中共同的依赖
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
//or
// var CommonsPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

var uglify = new webpack.optimize.UglifyJsPlugin();

module.exports = {

  entry: {
    profile: __dirname + '/assets/scripts/profile.js',
    feed: __dirname + '/assets/scripts/feed.js'
  },

  output: {
    path: 'dist',
    filename: '[name].js'
  },

  plugins: [
    commonsPlugin, // new CommonsChunkPlugin('common.js')
    uglify
  ]

};
