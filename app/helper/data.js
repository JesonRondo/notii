var
  md5 = require('md5'),
  config = require('../../conf/config');

module.exports = {
  debug: config.debug,
  avatar: (config.debug ? '' : config.cdnDomain) + '/img/avatar/1685674.png',
  blogName: 'LongZhou',
  domain: 'longzhou.me',
  cdnDomain: config.debug ? '' : config.cdnDomain,
  title: ' - Vic',
  flag: md5.digest_s('经历过了，就向前看吧'),
  navs: [{
    name: '首页',
    link: '/'
  }, {
    name: '扣德',
    link: '/code'
  }, {
    name: '足迹',
    link: '/travel'
  }, {
    name: '杂谈',
    link: '/misc'
  }, {
    name: '关于',
    link: '/about'
  }]
};