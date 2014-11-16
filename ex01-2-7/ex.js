window.onload = function() {
  var t = document.createElement("span");
  document.body.appendChild(t);
  var button = document.getElementsByTagName("button")[0];
  button.onclick = function() {
    var result = (Math.random()*6 | 0) + 1
    if(t.hasOwnProperty("innerText"))
      t.innerText = result+'';
    else
      t.textContent = result+'';
  };
};
