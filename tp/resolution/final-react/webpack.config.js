var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        "main": './assets/src/scripts/main.js',
        "main.min": './assets/src/scripts/main.js'
    },
    output: {
        path: path.resolve(__dirname, './assets/dist/scripts'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.jsx$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
