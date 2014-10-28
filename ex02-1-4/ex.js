window.onload = function() {
  var n = 2, o = [];
  while(n <= 100) {
    if(!(n % 2))
      o.push(n);
    n++;
  }
  document.body.innerHTML = o.join(", ");
};