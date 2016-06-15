var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('index', {
    title: 'Hello World Koa5!'
  });
});

router.get('/detail', function *(next) {
  yield this.render('index', {
    title: 'Hello World Koa detail!'
  });
});
module.exports = router;
