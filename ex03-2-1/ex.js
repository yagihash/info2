window.onload = function() {
  var button = document.getElementsByTagName("button")[0];
  button.onclick = function() {
    alert("こんにちは、" + prompt() + "さん");
  }
};