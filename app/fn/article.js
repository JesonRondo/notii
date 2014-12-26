'use strict' ;

var
  util = require('util'),

  dao = require('../helper/dao'),
  data = require('../helper/data');

module.exports = function *() {
  var isfirst = false;

  var rows = yield dao.getByAlias([
    this.params.year,
    this.params.month,
    this.params.day,
    this.params.blog.split('.')[0],
  ].join('-'));


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

  this.body = swig.renderFile('article.html', util._extend(data, {
    title: rows[0].title,
    links: links,
    isfirst: isfirst,
    article: rows[0]
  }));
};