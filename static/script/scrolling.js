(function(window, document) {

  var
    $top = document.getElementById('J_back2top'),
    $articles = document.getElementById('J_articles'),
    isLock = false,
    isLoaded = $articles ? false : true; // 是否加载完毕

  var
    clientHeight, scrollY, globalHeight,
    xhr = new XMLHttpRequest();

  var load = function(url, params, cb) {
    isLock = true;

    //格式化参数
    function formatParams(data) {
      var arr = [];
      for (var name in data) {
        arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
      }
      return arr.join("&");
    }

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        var status = xhr.status;
        if (status >= 200 && status < 300) {
          cb && cb(xhr.responseText, xhr.responseXML);
          isLock = false;
        }
      }
    };

    xhr.open('POST', url, true);

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(formatParams(params));
  };

  var scrollHandle = function() {
    // back2top
    if (window.scrollY > 300) {
      $top.classList.add('show');
    } else {
      $top.classList.remove('show');
    }

    // load
    globalHeight = document.body.scrollHeight;;
    scrollY = window.scrollY;
    clientHeight = document.body.clientHeight;

    if (!isLoaded && !isLock
      && (globalHeight - scrollY - clientHeight < clientHeight)) {

      load('/load', {
        len: $articles.getElementsByClassName('article').length
      }, function(responseText) {
        if (responseText) {
          $articles.innerHTML += responseText;
        } else {
          isLoaded = true;
        }
      });

    }
  };

  window.addEventListener('scroll', scrollHandle);
  scrollHandle();

}(window, document));