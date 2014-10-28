window.onload = function() {
  var button = document.getElementsByTagName("button")[0];
  button.onclick = function() {
    alert(prompt() + "さんの学籍番号は" + prompt() + "です。");
  };
};