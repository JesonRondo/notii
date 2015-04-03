'use strict';

var
  dao = require('../helper/dao'),
  data = require('../helper/data'),
  bodyParser = require('koa-body-parser');

var actions = {
  'menu': function() {
    return data.navs;
  },

  'article': function() {
    return dao.get({
      cate: this.request.query.cate
    });
  }
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