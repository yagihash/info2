window.onload = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  ctx.lineWidth = 10.0;
  ctx.strokeStyle = "black";
  ctx.fillStyle = "lightgrey";

  ctx.fillRect(50, 50, 100, 100);
  ctx.strokeRect(50, 50, 100, 100);
};