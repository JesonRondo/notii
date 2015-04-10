'use strict';

var
  dao = require('../helper/dao'),
  data = require('../helper/data');

var actions = {
  'article': function() {

    var cate = this.request.query.cate;
    var start = this.request.query.start;
    var len = this.request.query.len;
    var alias = this.request.query.alias;

    return alias ? dao.getByAlias(alias) : dao.get({
      cate: cate,
      start: start,
      len: len,
    });
  },

  'global': function() {
    return data;
  },
};

module.exports = function *() {
  var actionName,
    responseData;

  actionName = this.params.apiname;

  if (!actions[actionName]) {
    this.response.status = 404;
    this.body = '404';
  } else {
    responseData = yield actions[actionName].call(this);
    this.body = responseData;
  }
};