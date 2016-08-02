'use strict'

export default {
  entry: './entry.js',
  output: {
    path: (__dirname, 'www'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.pug$/, loader: 'pug-loader' }
    ]
  }
}

