## 这是一个webpack+react+es6 的初始化模板

```bash

 npm install   // 命令行输入

```

webpack --config webpack_learn.config.js  // 更改配置文件

http://hammercui.github.io/post/react%E5%9F%BA%E7%A1%80%EF%BC%9Areact-webpack%E5%BF%AB%E9%80%9F%E6%90%AD%E5%BB%BA2%EF%BC%9A%E5%BC%80%E5%8F%91%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E7%9A%84%E6%90%AD%E5%BB%BA/
开发环境

1. webpack 
2. 执行npm run dev
> 然后浏览器输入http：//localhost：8888/

生产环境
> 执行npm run build，会在build目录生成build.js文件

## webpack 基本命令
webpack --entry entry.js --output bundle.js
webpack --config webpack.config.js
webpack --config webpack.config.js -d：开发模式
webpack --config webpack.config.js -w：观察模式
webpack --config webpack.config.js -p：生成模式

# 添加koa热切换
参考：https://segmentfault.com/a/1190000004968387

npm install --save-dev koa-webpack-hot-middleware
npm install --save-dev koa-webpack-dev-middleware


# 学习react教程：

1. 参考：https://github.com/xiaokekeT/ddx
1. 参考：

# webpack 遇到的一些坑：

## 有时候会遇到不能热更新的情况

> 可以使用`module.hot.accept();`解决

更多请参考：

https://www.garysieling.com/blog/3183-2

http://webpack.github.io/docs/hot-module-replacement-with-webpack.html

# webpack 的一些常用插件：

1. webpack-dev-middleware/webpack-hot-middleware // 热更新
1. babel


# npm 的一些常用插件：

## 添加自动重启node服务
npm install nodemon
参考：https://www.npmjs.com/package/nodemon

# react UI 组件推荐

http://www.material-ui.com/#/