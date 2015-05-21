'use strict';

var util = require('util'),
  data = require('../helper/data');

module.exports = function *() {
  this.body = swig.renderFile('h5/index.html', util._extend(data, {}));
};