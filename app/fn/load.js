'use strict' ;

var
  util = require('util'),

  conf = require('../../conf/config'),

  dao = require('../helper/dao'),
  bodyParser = require('koa-body-parser');

app.use(bodyParser());

module.exports = function *() {

  var data = this.request.body;
  var rows = yield dao.get({
    cate: this.request.header.referer.split(this.header.origin + '/').join(''),
    start: data.len
  });

  // cdn image
  if (!conf.debug) {
    for (var i = 0, len = rows.length; i < len; i++) {
      var reg = /(\/img\/.*?\.(jpg|png|gif))/ig;
      rows[i].text = rows[i].text.replace(reg, conf.cdnDomain + "$1");
    }
  }

  this.body = rows.length > 0 ? swig.renderFile('tpl/list.html', {
    articles: rows
  }) : '';

};