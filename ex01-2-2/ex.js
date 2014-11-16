window.onload = function() {
  var t = document.createElement("span");
  document.body.appendChild(t);
  var form = document.forms[0];
  form.onsubmit = function() {
    var n = Number(form.number.value) || alert("plz input the real number.");
    if(n) {
      if(t.hasOwnProperty("innerText"))
        t.innerText = (Math.ceil(n/100)*100).toString();
      else
        t.textContent = (Math.ceil(n/100)*100).toString();
    }
    return false;
  };
};
