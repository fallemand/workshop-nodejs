const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['./assets/src/scripts/header.js'],
  output: {
    path: path.resolve(__dirname, 'assets/dist/scripts/'),
    filename: 'header.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    // resolve file extensions
    extensions: ['.jsx', '.js']
  },
  externals: {
    // Use external version of React
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    })
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
