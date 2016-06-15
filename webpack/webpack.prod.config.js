/*
 * @Author: EX-MEIMINJUN001
 * @Date:   2015-12-07 11:16:42
 * @Last Modified by:   EX-MEIMINJUN001
 * @Last Modified time: 2015-12-17 14:58:09
 */
var webpack = require('webpack');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var entryFile = APP_PATH+"/reactLearn/index.jsx";

module.exports = {
	//项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
	//页面入口文件配置
    //entry: entryFile,
    entry:[
        path.resolve(__dirname,'app/main.js')
    ],
	//输出的文件名 合并以后的js会命名为bundle.js
	devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.jsx', '', '.js','.json', '.scss']
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
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
		// host:'10.6.160.183',
		port:4000
	},
	plugins: [
		new HtmlwebpackPlugin({
			title: 'react视频学习'
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		//commonsPlugin,
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				// Useful to reduce the size of client-side libraries, e.g. react
				NODE_ENV: JSON.stringify('production')
			},
			__CLIENT__: true,
			__SERVER__: false,
			__DEVELOPMENT__: true
		})
	]
};
