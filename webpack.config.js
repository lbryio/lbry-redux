const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-2']
          }
        }
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src/'), 'node_modules', __dirname],
    extensions: ['.js', '.jsx', '.scss'],
  },
  externals: {
    'react': 'commonjs react'
  }
};
