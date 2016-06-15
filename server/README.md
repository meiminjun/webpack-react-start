教程参考：http://17koa.com/koa-generator-examples/

安装：
npm install -g koa-generator

koa-generator支持Koa1.x和2.x，安装后，可以分别使用koa和koa2分别创建。

## Koa 1.x

> koa helloworld

## Koa 2.x

> koa2 helloworld

## 更改视图引擎

> koa server -e

说明
-e, --ejs add ejs engine support (defaults to jade)

koa-generator使用的是koa-views，支持所有consolidate.js支持模板引擎