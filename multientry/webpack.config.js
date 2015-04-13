'use strict'

var path = require('path')

module.exports = {

  entry: {
    profile: __dirname + '/assets/scripts/profile.js',
    feed: __dirname + '/assets/scripts/feed.js'
  },

  output: {
    path: 'dist',
    filename: '[hash].[name].js'
  }
};
