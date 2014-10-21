window.onload = function() {
  var n = 1;
  while(n < 1000) {
    document.body.innerHTML += n.toString() + "<br>";
    n *= 2;
  }
}
