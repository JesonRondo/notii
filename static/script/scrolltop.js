(function() {
  var $top = document.getElementById('J_back2top');

  window.addEventListener('scroll', function(e) {
    if (window.scrollY > 300) {
      $top.classList.add('show');
    } else {
      $top.classList.remove('show');
    }
  });
}());