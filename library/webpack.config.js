var path = require('path');

module.exports = {
  context: __dirname,
  entry: {'test': __dirname + '/test.js'},
  output: {
    path: 'dist',
    filename: '[name].js',
    // library: 'Test',
    // libraryTarget: 'umd'
  },
  resolve: {
    root: __dirname
  }
};
