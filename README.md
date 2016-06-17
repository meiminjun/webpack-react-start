# 这是一个webpack+react+es6 的初始化模板

> npm install   // 命令行输入

## 1.开启后端服务器

> npm run server-watch

## 2.开启前端

> npm run client-watch

---

## webpack 学习网站
http://hammercui.github.io/post/react%E5%9F%BA%E7%A1%80%EF%BC%9Areact-webpack%E5%BF%AB%E9%80%9F%E6%90%AD%E5%BB%BA2%EF%BC%9A%E5%BC%80%E5%8F%91%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E7%9A%84%E6%90%AD%E5%BB%BA/
开发环境

---

## webpack 基本命令

> webpack --entry entry.js --output bundle.js
> webpack --config webpack.config.js
> webpack --config webpack.config.js -d：开发模式
> webpack --config webpack.config.js -w：观察模式
> webpack --config webpack.config.js -p：生成模式


---

## 学习react教程：

1. 参考：https://github.com/xiaokekeT/ddx

---

## webpack 遇到的一些坑：

### 添加代码热切换




### 有时候会遇到不能热更新的情况

> 可以使用`module.hot.accept();`解决

更多请参考：

https://www.garysieling.com/blog/3183-2

http://webpack.github.io/docs/hot-module-replacement-with-webpack.html

# webpack 的一些常用插件：

1. webpack-dev-middleware/webpack-hot-middleware // 热更新

> npm install --save-dev webpack-dev-middleware
> npm install --save-dev webpack-hot-middleware


2. babel


- [ ] 添加一个npm 下载地址
- [x] Mars

---

# npm 的一些常用插件：

## 添加自动重启node服务
npm install nodemon
参考：https://www.npmjs.com/package/nodemon

# react UI 组件推荐

http://www.material-ui.com/#/