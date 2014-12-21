module.exports = {
  debug: true,

  dbinfo: function() {
    return this.debug ? {
      // local
      host: '115.126.23.9',
      user: 'root',
      password: 'pazzword',
      database:'zombie',
      port: 3306
    } : {
      // online
      host: '127.0.0.1',
      user: 'root',
      password: 'pazzword',
      database:'zombie',
      port: 3306
    };
  },

  template: function(tpl, isPjax) {
    var map = {
      // cate
      'cate': {
        'normal': 'cate',
        'pjax': 'cate_cnt'
      },
      // article
      'article': {
        'normal': 'article',
        'pjax': 'article_cnt'
      }
    };

    return map[tpl][isPjax ? 'pjax' : 'normal'];
  }
};