'use strict' ;

var router = require('koa-router'),
  fn_cate = require('./fn/cate'),
  fn_article = require('./fn/article');

app.use(router(app));

app.get('/', fn_cate);

app.get('/:cate?', fn_cate);

app.get('/:cate/:year/:month/:day/:blog', function *(next) {
  this.body = fn_article(
    this.params.cate,
    this.params.year,
    this.params.month,
    this.params.day,
    this.params.blog
  );
});
