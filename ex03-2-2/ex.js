window.onload = function() {
  var button = document.getElementsByTagName("button")[0];
  button.onclick = function() {
    alert(prompt("名前") + "さんの学籍番号は" + prompt("学籍番号") + "です。");
  };
};
