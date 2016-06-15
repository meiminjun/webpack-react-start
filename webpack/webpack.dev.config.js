/*
 * @Author: EX-MEIMINJUN001
 * @Date:   2015-12-07 11:16:42
 * @Last Modified by:   EX-MEIMINJUN001
 * @Last Modified time: 2016-01-07 15:29:54
 */
// 开发环境webpack.config 配置


var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common', 'common.js');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app/react-redux');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dev'); // 开发环境地址
var entryFile = APP_PATH + 'index.js';
var env = process.env.NODE_ENV;
var host = 4000;
module.exports = {
	//项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
	//页面入口文件配置
	//entry: {mian : './app/main.js'},
	target: 'web',
	debug: false,
	context: path.resolve(__dirname, '..'),
	entry: [
		'webpack/hot/dev-server',
		'webpack-hot-middleware/client',
		'./app/react-redux/index.js'
	],
	//输出的文件名 合并以后的js会命名为bundle.js
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	output: {
		// path: path.join(__dirname, '.', '/app/dev'),
		path: BUILD_PATH,
		filename: 'bundle.js',
		publicPath: '//localhost:' + host + '/',
		chunkFilename: '[id].bundle.js'
	},
	resolve: {
		extensions: ['jsx', '', '.js', '.json', '.scss']
	},
	module: {
		loaders: [{
			test: /\.scss$/,
			loaders: ['style', 'css', 'sass'],
			include: APP_PATH
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url?limit=40000'
		}, {
			test: /\.(jsx|js)?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	},
	plugins: [
		new HtmlwebpackPlugin({
			title: '开发环境1',
			filename: 'index.html',
			template: './app/index.template.html'
		}),
		// new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		//commonsPlugin,
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				// Useful to reduce the size of client-side libraries, e.g. react
				NODE_ENV: JSON.stringify('development')
			},
			__CLIENT__: true,
			__SERVER__: false,
			__DEVELOPMENT__: true
		}),
		
	]
};