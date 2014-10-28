window.onload = function() {
  var form = document.forms[0];
  form.onsubmit = function() {
    return false;
  };
  form.n1.onkeyup = function() {
    form.sum.value = Number(this.value) + Number(form.n2.value);
  };
  form.n2.onkeyup = function() {
    form.sum.value = Number(this.value) + Number(form.n1.value);
  };
};