window.onload = function() {
  var t = document.createElement("span");
  t.id = "t";
  document.body.appendChild(t);
  var form = document.forms[0];
  form.onsubmit = function() {
    var n = Number(form.number.value) || alert("plz input the real number.");
    if(n)
      t.innerText = (n | 0).toString();
    return false;
  }
}
