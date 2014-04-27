(function() {

  window.resolution = [window.innerWidth, window.innerHeight];
  var style = document.createElement('style');
  style.innerHTML = '@-ms-viewport{height:1080px;}';
  document.head.appendChild(style);
  window.viewport = [window.innerWidth, window.innerHeight];
  
}).call(this);
