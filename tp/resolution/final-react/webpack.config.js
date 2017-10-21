var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        "main": './assets/src/scripts/main.js'
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
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
