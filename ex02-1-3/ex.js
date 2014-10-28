window.onload = function() {
  var n = 100, o = [];
  while(n) {
    o.push(n--);
  }
  document.body.innerHTML = o.join(", ");
};