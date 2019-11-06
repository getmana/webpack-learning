import component from './simple-components/dom';
import './theme/main.css';

// при следующей записи webpack обработает файл css-loader => style-loader
// import 'style-loader!css-loader!./theme/main.css'; 
// но так не делается, просто есть такая фишка у webpack

let element = component();

document.body.appendChild(element);

// Hot reloading на React:
// 1. react-hot-loader: babel-плагин
// 2. react-hot-loader: исходный код
// hot(module)(component)

if (module.hot) {
	module.hot.accept('./simple-components/dom', function() {
		document.body.removeChild(element);
		element = component();
		document.body.appendChild(element);
	});
}

// mini-css-extract-plugin is for production
// css-loader & style-loader is for development