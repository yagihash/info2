window.onload = function() {
  var n = 0, a = 1;
  while(a < 1000) {
    var output = "2<sup>" + n.toString() + "</sup> = " + a.toString() + "<br>";
    document.body.innerHTML += output;
    a *= 2;
    n++;
  }
}
