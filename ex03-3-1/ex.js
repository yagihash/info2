window.onload = function() {
  var form = document.forms[0];
  form.onsubmit = function() {
    alert("こんにちは、" + this.name.value + "さん");
    return false;
  };
};