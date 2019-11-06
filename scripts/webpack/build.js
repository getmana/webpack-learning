// Чтоб запустить build через node нужно:
// 1. webpack
// 2. конфигурация
// 3. создать компайлер webpack
// 4. запуск

// Core
const webpack = require('webpack');
const chalk = require('chalk'); // раскрашивает консоль
// console.log('=>', chalk.bgRed.green('START')); EXAMPLE

// Config
const getConfig = require('./webpack.config');

// Compiler
const compiler = webpack(getConfig());

// hooks usage example - можно вклиниться в разные моменты жизенного цикла webpack (beforeRun, done, etc)
// https://webpack.js.org/api/compiler-hooks

// compiler.hooks.beforeRun.tap({name: 'start'}, () => {
// 	console.log(chalk.blue('compilation started'))
// })

// compiler.hooks.done.tap({name: 'done'}, () => {
// 	console.log(chalk.blue('compilation complete'))
// })

compiler.run((error, stats) => {
	if (error) {
		// ошибка конфигурации
		console.error(error.stack || error);
		if (error.details) {
			console.error(error.details);
		}

		return null;
	}

	// нaстройки stats здесь:
	// https://webpack.js.org/configuration/stats/#root
	
	const info = stats.toString({
		hash: true,
		colors: true,
		versions: true,
		env: true,
		modules: false,
		entrypoints: false,
	});

	console.log(chalk.greenBright('BUILD completed'));
	console.log(info);

	if (stats.hasErrors()) {
		// ошибка во время компиляции (неправильный импорт, ошибка синтаксиса, etc)
		console.log(chalk.redBright('Error!'));
		console.error(info)
	}

	if (stats.hasWarnings()) {
		// warning во время компиляции
		console.log(chalk.yellowBright('Warning!'));
		console.warn(info);
	}
})