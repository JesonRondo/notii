module.exports = {
  debug: false,

  cdnDomain: "https://longzhou.me",

  dbinfo: function() {
    return {
      host: '127.0.0.1',
      user: 'root',
      password: 'pazzword',
      database:'zombie',
      port: 3306
    };
  }
};