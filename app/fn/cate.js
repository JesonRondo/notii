'use strict' ;

var
  util = require('util'),

  dao = require('../helper/dao'),
  data = require('../helper/data');

module.exports = function *() {
  var isfirst = false,
    cate = this.params.cate;

  var rows = yield dao.get({
    cate: cate
  });

  // 错误页重定向
  if (rows.length === 0
    && this.request.url !== '/') {
    this.response.redirect('/');
    return;
  }

  var links = yield dao.links();

  // 首次进入
  if (!this.request.header.referer
    || this.request.header.referer.indexOf(data.domain) < 0) {
    isfirst = true;
  }

  this.body = swig.renderFile('list.html', util._extend(data, {
    title: '时间是静止的，是我们在流逝',
    links: links,
    articles: rows,
    isfirst: isfirst,
    cate: cate ? '/' + cate : '/'
  }));
};