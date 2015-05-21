'use strict';

var
  path = require('path'),
  fs = require('fs'),
  cofs = require('co-fs'),
  easyimg = require('easyimage');

var getScaleInfo = function(realPath) {
  var paths = realPath.split('@');

  try {
    var width, height;

    if (paths.length > 1) {
      realPath = paths[0];


      paths[1] = paths[1].split('.')[0];
      var sizeinfo = paths[1].split('x');

      width = sizeinfo[0];
      if (sizeinfo.length <= 1) { // no height
        height = 9999;
      } else {
        height = sizeinfo[1];
      }
    }

    return paths.length > 1 && width && height ? {
      width: width,
      height: height,
      url: realPath
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
    imgOutPath, img, exttype;

  var scaleInfo = getScaleInfo(realPath);
  realPath = scaleInfo.url;

  var isPathExist = yield cofs.exists(realPath);

  if (isPathExist
    && !fs.lstatSync(realPath).isDirectory()) {
    imgOutPath = realPath;

    if (scaleInfo.width) {
      var dstPath = path.resolve(staticPath, imgPath);
      yield easyimg.resize({
        src: realPath,
        dst: dstPath,
        width: scaleInfo.width,
        height: scaleInfo.height
      });
      imgOutPath = dstPath;
    }

  } else {
    imgOutPath = img404;
  }


  exttype = path.extname(imgOutPath).split('@')[0].split('.').join('');
  img = yield cofs.readFile(imgOutPath);

  this.response.type = 'image/' + exttype;
  this.body = img;

};