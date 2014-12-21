var dao = require('../helper/dao');

module.exports = function *() {
  var rows = yield dao.get({});

  console.log(rows);

  this.body = 'user.name';
};