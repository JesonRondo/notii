'use strict';

var
  path = require('path'),
  fs = require('fs'),
  cofs = require('co-fs');

var getScaleInfo = function(realPath) {
  var paths = realPath.split('@');

  try {
    var width, height;

    if (paths.length > 1) {
      width = paths[1].split('x')[0];
      height = paths[1].split('x')[1];
    }

    return paths.length > 1 && width && height ? {
      width: width,
      height: height,
      url: paths[0]
    } : {
      url: realPath
    };
  } catch(e) {
    return {
      url: realPath
    };
  }
};

module.exports = function *() {

  var
    staticPath = 'static/',
    imgPath = this.query.imgpath,
    realPath = path.resolve(staticPath, imgPath),
    img404 = path.resolve(staticPath, 'img/404.jpg'),
    imgOutPath, img;

  var scaleInfo = getScaleInfo(realPath);
  realPath = scaleInfo.url;

  var isPathExist = yield cofs.exists(realPath);

  if (isPathExist
    && !fs.lstatSync(realPath).isDirectory()) {
    imgOutPath = realPath;
  } else {
    imgOutPath = img404;
  }

  var exttype = path.extname(imgOutPath).split('.').join('');

  img = yield cofs.readFile(imgOutPath);

  if (scaleInfo.width) {
    // img = yield gm(img).toBuffer(function() {});
  }

  this.response.type = 'image/' + exttype;
  this.body = img;

};