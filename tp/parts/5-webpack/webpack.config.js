var path = require('path');
var webpack = require('webpack');

 module.exports = {
     entry: './main.js',
     output: {
         path: __dirname,
         filename: 'main.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015', "react"]
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };