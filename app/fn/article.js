'use strict' ;

var
  util = require('util'),

  dao = require('../helper/dao'),
  data = require('../helper/data');

module.exports = function *() {
  var rows = yield dao.getByAlias([
    this.params.year,
    this.params.month,
    this.params.day,
    this.params.blog.split('.')[0],
  ].join('-'));

  var links = yield dao.links();

  this.body = swig.renderFile('article.html', util._extend(data, {
    title: rows[0].title,
    links: links,
    article: rows[0]
  }));
};