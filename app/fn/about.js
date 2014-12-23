'use strict' ;

var
  util = require('util'),

  dao = require('../helper/dao'),
  data = require('../helper/data');

module.exports = function *() {
  var links = yield dao.links();

  this.body = swig.renderFile('about.html', util._extend(data, {
    title: 'Halo Nice 2 meet u',
    links: links
  }));
};