var koa = require('koa');

global.app = koa();
global.swig = require('swig');

swig.setDefaults({
  loader: swig.loaders.fs(__dirname + '/../app/view')
});

require('../app/router');

app.listen(3011);