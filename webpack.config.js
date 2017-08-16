var path = require('path');
var webpack = require('webpack');

console.log("Wrong Code");

module.exports = {
  entry: './app/js/index.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {

        }
      }
    ]
  },
};
