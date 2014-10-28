window.onload = function() {
  var t = document.createElement("span");
  document.body.appendChild(t);
  var form = document.forms[0];
  form.onsubmit = function() {
    if(form.number.value.length != 8)
      alert("plz input the 8-digits number.\nex.) 20141001");
    else
      var y = Number(form.number.value) || alert("plz input the real number.");

    if(y) {
      y = form.number.value;
      t.innerText = Number(y.slice(0, 4)).toString() + "年" +
                    Number(y.slice(4, 6)).toString() + "月" +
                    Number(y.slice(6, 8)).toString() + "日";
    }
    return false;
  };
};