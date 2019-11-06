// если делать через webpack-cli - добавить в package.json scripts:
// "start": "webpack-dev-server"

// Если через node, понадобится:
// 1. webpack
// 2. webpack-dev-server (если вручную то это: express + webpack-dev-middleware + helpers)
// 3. webpack-hot-middleware (для горячей перезагрузки)
// 3. конфигурация
// 4. создать компайлер webpack
// 5. запуск

// Core
const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
const hot = require('webpack-hot-middleware');
const chalk = require('chalk'); // раскрашивает консоль

// Config
const getConfig = require('./webpack.config');

// Hot reloading:
// 1. Настроить на сервере
// 2. Настроить на клиенте (в данном случае клиент - это браузер)
// 3. Настроить в webpack
// 4. Настроить в исходном коде

// Constants
const { HOST, PORT } = require('./constants');

// Compiler
const compiler = webpack(getConfig());

const server = new DevServer(compiler, {
	host: HOST,
	port: PORT,
	historyApiFallback: true,
	overlay: true,
	quiet: true,
	clientLogLevel: 'none',
	noInfo: true,
	after: (app) => {
		app.use(
			hot(compiler, {
				log: false,
			}),
		);
	},
});

server.listen(PORT, HOST, () => {
	console.log(
		`${chalk.greenBright('Server listening on')} ${chalk.blueBright(
			`http://${HOST}:${PORT}`,
		)}`,
	);
});
