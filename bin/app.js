var koa = require('koa');

global.app = koa();

require('../app/router');

app.listen(3000);