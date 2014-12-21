'use strict' ;

var co = require('co');
var mysql = require('mysql');
var wrapper = require('co-mysql');
var conf = require('../config');

var pool = mysql.createPool(conf.dbinfo());
var db = wrapper(pool);

module.exports = {

  get: function(filter) {
    var start = isNaN(filter['start']) ? 0 : +filter['start'],
      len = isNaN(filter['len']) ? 3 : +filter['len'];

    var sql = '';

    if (filter['cate']) {
      var sql = 'select * from v_article, dir_article where dir_article.name_alias="' + filter['cate'] + '" and dir_article.did = v_article.did and v_article.status=0';
    } else {
      var sql = 'select * from v_article where status=0';
    }

    sql += ' order by createtime desc limit ' + start + ',' + len + ';'

    return db.query(sql);
  }

};
