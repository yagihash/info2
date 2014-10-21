window.onload = function() {
  for(var i = 2, o = []; i <= 100; i++) {
    if(!(i % 2))
      o.push(i.toString());
  }
  document.body.innerHTML = o.join(", ");
}
