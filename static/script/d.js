(function(window, document) {

  document.addEventListener('DOMContentLoaded', function() {
    // start page
    var $html = document.getElementsByTagName('html')[0];
    
    $html.classList.remove('start');
    setTimeout(function() {
      $html.removeAttribute('class');

      // widget
      var $widget = document.getElementById('J_widget');
      if ($widget) {
        var $imgs = $widget.getElementsByTagName('img');
        for (var i = 0, len = $imgs.length; i < len; i++) {
          $imgs[i].setAttribute('src', $imgs[i].getAttribute('d-src'));
          $imgs[i].removeAttribute('d-src');
        }
        $widget.classList.remove('hide');
      }
    }, 800);    

    // code pre
    prettyPrint();
  }, false);

}(window, document));