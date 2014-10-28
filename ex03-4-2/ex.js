window.onload = function() {
  var button = document.getElementsByTagName("button")[0];
  button.onclick = function() {
    document.getElementsByTagName("h1")[0].innerText = "JavaScriptの説明";
  };
};
