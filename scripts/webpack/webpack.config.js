const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { cleanOptions, BUILD_DIRECTORY } = require('./constants')


// Типы конфигов webpack:
// - Object
// - Function
// - Promise

module.exports = () => {
	return {
		mode: 'none',
		devtool: false,
		plugins: [
			// каждый плагин - это конструктор
			new HtmlWebpackPlugin({
				template: './static/template.html',
				title: 'Learn Webpack!',
				favicon: './static/favicon.ico',
			}),
			new CleanWebpackPlugin(cleanOptions),
		]
	}
}