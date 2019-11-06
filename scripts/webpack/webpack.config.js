const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { cleanOptions, BUILD_DIRECTORY, SOURCE_DIRECTORY } = require('./constants')


// Типы конфигов webpack:
// - Object
// - Function
// - Promise

module.exports = () => {
	return {
		entry: [
			'webpack-hot-middleware/client?reload=true&quiet=true', // для настройки hot reloading на клиенте
			SOURCE_DIRECTORY,
		],
		output: {
			path: BUILD_DIRECTORY,
			filename: 'bundle.js',
		},
		mode: 'none',
		devtool: false,
		module: {
			rules: [
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				}
			]
		},
		plugins: [
			// каждый плагин - это конструктор
			new HtmlWebpackPlugin({
				template: './static/template.html',
				title: 'Learn Webpack!',
				favicon: './static/favicon.ico',
			}),
			new CleanWebpackPlugin(cleanOptions),
			new HotModuleReplacementPlugin(),
		]
	}
}