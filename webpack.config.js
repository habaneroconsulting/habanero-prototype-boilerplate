import { CheckerPlugin } from 'awesome-typescript-loader';
import PrettierPlugin from 'prettier-webpack-plugin';

export const context = __dirname;
export const devtool = 'source-map';
export const mode = 'development';

export const output = {
	filename: '[name].gen.js',
	path: __dirname + '/build/scripts/'
};

export const module = {
	rules: [
		{
			test: /\.tsx?$/,
			loader: 'awesome-typescript-loader',
			options: {
				useBabel: true,
				babelOptions: {
					babelrc: false,
					presets: ['@babel/preset-env']
				},
				babelCore: '@babel/core'
			}
		},
		{
			test: /\.js$/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}
	]
};

export const plugins = [
	new CheckerPlugin(),
	new PrettierPlugin({
		arrowParens: 'always',
		printWidth: 100,
		singleQuote: true,
		tabWidth: 4,
		trailingComma: 'none',
		useTabs: true,
		extensions: ['.ts'],
		parser: "typescript"
	})
];

export const resolve = {
	extensions: ['.ts', '.tsx', '.js', '.jsx']
};
