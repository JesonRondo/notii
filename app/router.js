'use strict' ;

var router = require('koa-router'),
  fn_cate = require('./fn/cate'),
  fn_about = require('./fn/about'),
  fn_article = require('./fn/article');

app.use(router(app));

app.get('/', fn_cate);

app.get('/about', fn_about);

app.get('/:cate?', fn_cate);

app.get('/:cate/:year/:month/:day/:blog', fn_article);
