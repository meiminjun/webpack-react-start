var app = require('koa')()
  , koa = require('koa-router')()
  , logger = require('koa-logger')
  , json = require('koa-json')
  , views = require('koa-views')
  , onerror = require('koa-onerror');

var index = require('./routes/index');
var users = require('./routes/users');

/*// ---------------------koa热切换------------------------------
// Step 1: Create & configure a webpack compiler
var webpack = require('webpack');
var webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : '../webpack.config.js');
console.log(webpackConfig);
var compiler = webpack(webpackConfig);
// Step 2: Attach the dev middleware to the compiler & the server
app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
// Step 3: Attach the hot middleware to the compiler & the server
app.use(require("koa-webpack-hot-middleware")(compiler));


// ---------------------koa热切换------------------------------
*/
// 利用webpack-hot-middleware 热切换
var webpack = require('webpack');
var proConfig = '../webpack/webpack.prod.config.js';
var devConfig = '../webpack/webpack.dev.config.js';
var webpackConfig = require(process.env.NODE_ENV == "production" ? proConfig : devConfig);
var compiler = webpack(webpackConfig);
var hotMiddleware = require("webpack-hot-middleware")(compiler);
var devMiddleware = require("webpack-dev-middleware")(compiler, {
  noInfo: false, publicPath: webpackConfig.output.publicPath
});
app.use(function * (next) {
  yield devMiddleware.bind(null, this.req, this.res);
  yield next;
});
app.use(function* (next) {
  yield hotMiddleware.bind(null, this.req, this.res);
  yield next;
});
// ----------------------------------------------------------------------------------------

app.use(views('views', {
  root: __dirname + '/views',
  default: 'ejs'
}));
app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(require('koa-static')(__dirname + '/public'));


// routes definition
koa.use('/api', index.routes(), index.allowedMethods());
koa.use('/users', users.routes(), users.allowedMethods());

// mount root routes
app.use(koa.routes());

app.on('error', function(err, ctx){
  logger.error('server error', err, ctx);
});

module.exports = app;
