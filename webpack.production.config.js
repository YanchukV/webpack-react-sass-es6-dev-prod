var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
	devtool: 'source-map',
	entry: [
		'babel-polyfill',
		'./src/main.js',
		'./src/sass/main.sass'
	],
	output: {
		path: path.join(__dirname, '/public/build/'),
		publicPath: '/build/',
		filename: 'bundle.min.js'

	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('styles.min.css', {
			allChunks: true
		}),
		new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			comments: false,
			compress: {
				sequences     : true,
				booleans      : true,
				loops         : true,
				unused      : true,
				warnings    : false,
				drop_console: true,
				unsafe      : true
			}
		})
	],
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loaders: ['eslint'],
				include: [
					path.resolve(__dirname, "src")
				]
			}
		],
		loaders: [
			{
				loaders: ['babel-loader'],
				include: [
					path.resolve(__dirname, "src")
				],
				test: /\.js$/,
				plugins: ['transform-runtime']
			},
			{
				test: /\.sass$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer?browsers=last 2 versions!resolve-url!sass-loader?sourceMap')
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
			}
		]
	}
};

module.exports = config;