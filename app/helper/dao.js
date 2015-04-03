'use strict' ;

var co = require('co');
var mysql = require('mysql');
var wrapper = require('co-mysql');
var conf = require('../../conf/config');

var pool = mysql.createPool(conf.dbinfo());
var db = wrapper(pool);

module.exports = {

  get: function(filter) {
    var start = isNaN(filter['start']) ? 0 : +filter['start'],
      len = isNaN(filter['len']) ? 3 : +filter['len'];

    var sql = '';

    if (filter['cate']) {
      var sql = 'select d.name_alias as cate, concat("/", d.name_alias, "/", substring(a.extra1, 1, 4), "/", substring(a.extra1, 6, 2), "/", substring(a.extra1, 9, 2), "/", substring(a.extra1, 12)) as link, a.title, a.text, a.createtime from v_article as a, dir_article as d where d.name_alias="' + filter['cate'] + '" and d.did = a.did and a.status=0';
    } else {
      var sql = 'select d.name_alias as cate, concat("/", d.name_alias, "/", substring(a.extra1, 1, 4), "/", substring(a.extra1, 6, 2), "/", substring(a.extra1, 9, 2), "/", substring(a.extra1, 12)) as link, a.title, a.text, a.createtime from v_article as a, dir_article as d  where a.status=0 and a.did=d.did';
    }

    sql += ' order by a.createtime desc limit ' + start + ',' + len + ';'

    return db.query(sql);
  },

  links: function() {
    var sql = 'select * from v_info where did=1 and status=0';

    return db.query(sql);
  },

  getByAlias: function(alias) {
    var sql = 'select d.name_alias as cate, concat("/", d.name_alias, "/", substring(a.extra1, 1, 4), "/", substring(a.extra1, 6, 2), "/", substring(a.extra1, 9, 2), "/", substring(a.extra1, 12)) as link, a.title, a.text, a.createtime from v_article as a, dir_article as d where a.did=d.did and a.status=0 and a.extra1="' + alias + '"';

    return db.query(sql);
  }

};
