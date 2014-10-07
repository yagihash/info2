window.onload = function() {
  var t = document.createElement("span");
  t.id = "t";
  document.body.appendChild(t);
  var button = document.getElementsByTagName("button")[0];
  button.onclick = function() {
    var result = (Math.random()*6 | 0) + 1
    t.innerText = result+'';
  }
}
