var webpack = require('webpack');
var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports =   [
{
  entry: path.join(__dirname, 'src/index.js'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/'
    },
    target: 'node',
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false
    },
    externals: nodeExternals(),
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
        }
      ]
    },
  },
  {
    entry: path.join(__dirname, 'src/app/browser.js'),
    output: {
      path: path.join(__dirname, 'dist/assets'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015']
          }
        },
      ]
    },
  }
];