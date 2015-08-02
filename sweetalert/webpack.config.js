var webpack = require('webpack');
var path = require('path');
var del = require('del');
var DIST = path.join(__dirname, 'dist');

del(DIST);
module.exports = {

  entry: {
    index: './app'
  },

  output: {
    filename: '[name].bundle.js',
    path: DIST,
    publicPath: 'dist/'
  },

  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ],
    noParse:[
      /sweetalert\.min\.js/
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components']
  },

  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    )
  ]

};
