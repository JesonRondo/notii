'use strict';

module.exports = function *() {
  this.body = swig.renderFile('h5/index.html');
};