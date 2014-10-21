window.onload = function() {
  for(var n = 1; n < 1000; n *= 2)
    document.body.innerHTML += n.toString() + "<br>";
}
