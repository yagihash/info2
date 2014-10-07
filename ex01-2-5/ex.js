window.onload = function() {
  var t = document.createElement("span");
  document.body.appendChild(t);
  var form = document.forms[0];
  form.onsubmit = function() {
    var result = distance.call(this);
    t.innerText = result.toString();
    return false;
  }
}

function distance() {
  var x1 = Number(this.x1.value), y1 = Number(this.y1.value);
  var x2 = Number(this.x2.value), y2 = Number(this.y2.value);
  with(Math)
    return sqrt(pow((x2-x1), 2) + pow((y2-y1), 2));
}
