window.onload = function() {
  var button_ok = document.getElementsByTagName("button")[0];
  var button_reset = document.getElementsByTagName("button")[1];
  button_ok.onclick = function() {
    document.getElementsByTagName("h1")[0].innerText = "JavaScriptの説明";
  };
  button_reset.onclick = function() {
    document.getElementsByTagName("h1")[0].innerText = "JavaScriptとは";
  };
};
