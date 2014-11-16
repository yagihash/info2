window.onload = function() {
  var t = document.createElement("span");
  document.body.appendChild(t);
  var r2d = document.forms[0];
  var d2r = document.forms[1];
  r2d.onsubmit = function() {
    var result = calc.call(this, toDegrees);
    if(t.hasOwnProperty("innerText"))
      t.innerText = result.toString();
    else
      t.textContent = result.toString();
    return false;
  };
  d2r.onsubmit = function() {
    var result = calc.call(this, toRadians);
    if(t.hasOwnProperty("innerText"))
      t.innerText = result.toString();
    else
      t.textContent = result.toString();
    return false;
  };
};

function toDegrees(r) {
  return r * 180 / Math.PI;
}

function toRadians(d) {
  return d * Math.PI / 180;
}

function calc(f) {
  return f(this.n.value);
}
