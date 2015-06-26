// resume
(function(document) {

  function rnd(n, m) {
    return parseInt(Math.random() * (m - n) + n);
  }

  var
    origin, body, copy,
    ow, oh, ocenter,
    w, h,
    row = 30,
    col = 20;

  body = document.body;
  origin = document.querySelector('.J_resume');

  ow = origin.offsetWidth;
  oh = origin.offsetHeight;

  w = ow / col;
  h = oh / row;

  ocenter = {
    x: w / 2,
    y: h / 2
  };

  for (var r = 0; r < row; r++) {
    for (var c = 0; c < row; c++) {
      copy = origin.cloneNode(true);

      var arg = {
        top: r * h,
        right: (c + 1) * w,
        bottom: (r + 1) * h,
        left: c * w
      };

      copy.style.clip = 'rect(' + arg['top'] + 'px,' + arg['right'] + 'px,' + arg['bottom'] + 'px,' + arg['left'] +'px)';
      copy.style.opacity = 0;
      copy.style.transition = '0.6s all ease';
      copy.style.WebkitTransform = 'perspective(800px) translate3d(' + (arg['left'] + w / 2) + 'px, ' + (arg['top'] + h / 2) + 'px, 600px) rotateY('+rnd(-180, 180)+'deg) rotateX('+rnd(-180, 180)+'deg) scale(2,2)';
      body.appendChild(copy);

      (function(copy) {
        setTimeout(function() {
          copy.style.WebkitTransform = 'translate3d(0,0,0)';
          copy.style.opacity = 1;
        }, rnd(300, 500));
      }(copy));
    }
  }

  origin.style.display = 'none';
}(document));
