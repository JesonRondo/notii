var
  md5 = require('md5'),
  config = require('../../conf/config');

module.exports = {
  debug: config.debug,
  title: ' - Vic',
  flag: md5.digest_s('祝你幸福还是给你幸福')
};