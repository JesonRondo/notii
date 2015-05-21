'use strict';

var
  util = require('util'),

  conf = require('../../conf/config'),

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

  // cdn image
  if (!conf.debug) {
    for (var i = 0, len = rows.length; i < len; i++) {
      var reg = /(\/img\/.*?\.(jpg|png|gif))/ig;
      rows[i].text = rows[i].text.replace(reg, conf.cdnDomain + "$1");
    }
  }

  this.body = swig.renderFile('list.html', util._extend(data, {
    title: '时间是静止的，是我们在流逝',
    links: links,
    articles: rows,
    isfirst: isfirst,
    cate: cate ? '/' + cate : '/'
  }));
};