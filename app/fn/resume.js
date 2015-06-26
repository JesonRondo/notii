'use strict' ;

var
  util = require('util'),

  data = require('../helper/data');

module.exports = function *() {
  this.body = swig.renderFile('resume.html', util._extend(data, {
  }));
};
