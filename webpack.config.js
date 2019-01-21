/* eslint-disable import/no-commonjs */
const path = require('path');
const FlowWebpackPlugin = require('flow-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'preprocess-loader',
            options: {
              LBRYNET_PROXY_URL: '/api_proxy/',
              ppOptions: {
                type: 'js'
              }
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  plugins: [new FlowWebpackPlugin()],
};
