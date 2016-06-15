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
var entryFile = APP_PATH + '/index';
var env = process.env.NODE_ENV;
var host = 4000;
module.exports = {
	//项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
	//页面入口文件配置
	//entry: {mian : './app/main.js'},
	entry: [
		// 'webpack/hot/dev-server',
		'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
		entryFile
	],
	//输出的文件名 合并以后的js会命名为bundle.js
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	output: {
		publicPath: '//localhost:' + host + '/', // 服务器根路径
		path: BUILD_PATH,
		filename: 'dev.js'
	},
	resolve: {
		extensions: ['.jsx', '', '.js', '.json', '.scss']
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
			include: APP_PATH,
			query: {
				presets: ['es2015', 'react']
			}
		}]
	},
	// devServer: {
	// 	historyApiFallback: true,
	// 	hot: true,
	// 	inline: true,
	// 	progress: true,
	// 	// host:'10.6.160.183',
	// 	port: 8889
	// },
	plugins: [
		new HtmlwebpackPlugin({
			title: 'Hello World app2'
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		//commonsPlugin,
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
	      'process.env.NODE_ENV': JSON.stringify(env)
	    })
	]
};