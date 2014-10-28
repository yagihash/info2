window.onload = function() {
  var form = document.forms[0];
  form.onsubmit = function() {
    for(var i = checked = 0; i < this.chkbox.length; i++)
      checked += this.chkbox[i].checked;
    alert(checked % 2 ? "奇数です" : "偶数です");
    return false;
  };
};
