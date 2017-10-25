const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        "header": './assets/src/scripts/header.js'
    },
    output: {
        path: path.resolve(__dirname, './assets/dist/scripts'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        sourceMap: true
      })
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
