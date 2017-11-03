const path = require('path');
const webpack = require('webpack');

 module.exports = {
     entry: './js/example-react.js',
     output: {
         path: path.resolve(__dirname, 'js/build'),
         filename: 'example-react.bundle.js'
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
	    extensions: ['.js', '.jsx']
     },
     stats: {
         colors: true
     },
     plugins: [
       new webpack.optimize.UglifyJsPlugin({
         minimize: true
       })
     ],
     devtool: 'source-map'
 };
