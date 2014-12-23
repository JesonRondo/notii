'use strict' ;

var
  util = require('util'),

  dao = require('../helper/dao'),
  data = require('../helper/data');

module.exports = function *() {
  var rows = yield dao.get({
    cate: this.params.cate
  });

  var links = yield dao.links();

  this.body = swig.renderFile('list.html', util._extend(data, {
    title: '只想颠倒整个世界',
    links: links,
    articles: rows
  }));
};