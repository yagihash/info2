window.onload = function() {
  var button = document.getElementsByTagName("button")[0];
  var c = new Counter();
  button.onclick = function() {
    alert(c());
  }
}

var Counter = function() {
  var n = 0;
  return function() {
    return n++ % 3;
  }
}
