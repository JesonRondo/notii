'use strict';

module.exports = function *() {
  this.body = swig.renderFile('hey.html', {});
};