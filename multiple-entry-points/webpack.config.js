var webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var path = require('path');


module.exports = {

  entry: {
    pageA: './pageA.js',
    pageB: './pageB'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
    publicPath: 'dist/'
  },

  plugins: [
    new CommonsChunkPlugin('commons.js')
  ]

};
