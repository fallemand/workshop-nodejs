var path = require('path');
var webpack = require('webpack');

 module.exports = {
     entry: {
 		'example-transpile': './js/example-transpile.js', 
     	'example-require': './js/example-require.js',
     	'example-react': './js/example-react.js',
     },
     output: {
         path: path.resolve(__dirname, 'js/build'),
         filename: '[name].bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.(js|jsx)$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015', "react"]
                 }
             }
         ]
     },
     resolve: {
    	// resolve file extensions
	    extensions: ['.jsx', '.js']
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