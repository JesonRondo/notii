'use strict' ;

var router = require('koa-router'),
  fn_h5 = require('./fn/h5'),
  fn_api = require('./fn/api'),
  fn_img = require('./fn/img'),
  fn_cate = require('./fn/cate'),
  fn_load = require('./fn/load'),
  fn_resume = require('./fn/resume'),
  fn_about = require('./fn/about'),
  fn_article = require('./fn/article');

app.use(router(app));

app.get('/m', fn_h5); // h5版本

app.get('/api/:apiname', fn_api); // 数据接口

app.get('/', fn_cate);

app.get('/resume', fn_resume);

app.get('/about', fn_about);

app.get('/@@', fn_img);

app.get('/:cate?', fn_cate);

app.get('/:cate/:year/:month/:day/:blog', fn_article);

app.post('/load', fn_load);

app.get(/.*/, function *() {
  this.response.redirect('/');
});