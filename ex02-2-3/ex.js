window.onload = function() {
  for(var i = 100, o = []; i; i--) {
    o.push(i.toString());
  }
  document.body.innerHTML = o.join(", ");
};