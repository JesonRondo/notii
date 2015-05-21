'use strict' ;

var
  util = require('util'),

  conf = require('../../conf/config'),

  dao = require('../helper/dao'),
  data = require('../helper/data');

module.exports = function *() {
  var isfirst = false;

  var links = yield dao.links();

  // 首次进入
  if (!this.request.header.referer
    || this.request.header.referer.indexOf(data.domain) < 0) {
    isfirst = true;
  }

  this.body = swig.renderFile('about.html', util._extend(data, {
    title: 'Halo Nice 2 meet u',
    links: links,
    isfirst: isfirst,
    cate: '/about'
  }));
};