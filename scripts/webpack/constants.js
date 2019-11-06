const { resolve } = require('path');
const { path: PROJECT_ROOT } = require('app-root-path');

exports.PROJECT_ROOT = PROJECT_ROOT;
exports.BUILD_DIRECTORY = resolve(PROJECT_ROOT, './build');
exports.SOURCE_DIRECTORY = resolve(PROJECT_ROOT, './source');
exports.HOST = 'localhost';
exports.PORT = 3000;

exports.cleanOptions = {
	verbose: true,
	root: PROJECT_ROOT,
}