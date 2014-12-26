'use strict' ;

var
  util = require('util'),
  dao = require('../helper/dao'),
  bodyParser = require('koa-body-parser');

app.use(bodyParser());

module.exports = function *() {

  var data = this.request.body;
  var rows = yield dao.get({
    cate: this.request.header.referer.split(this.header.origin + '/').join(''),
    start: data.len - 1
  });

  this.body = rows.length > 0 ? swig.renderFile('tpl/list.html', {
    articles: rows
  }) : '';

};