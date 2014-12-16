window.addEventListener("DOMContentLoaded", function() {
  var canvas = document.createElement("canvas");
  var edge = 10;
  var width = canvas.width = (usdjpy.length + 2) * edge;
  var height = canvas.height = 152;
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  var x = (0 * edge) + 2;
  var y = height - usdjpy[0][1];
  ctx.moveTo(x, y);
  ctx.strokeStyle = "#DD0000";
  for(var i = 1; i < usdjpy.length; i++) {
    var x = (i * edge) + 2;
    var y = height - usdjpy[i][1];
    ctx.lineTo(x, y);
  }
  ctx.stroke();

  ctx.fillStyle = "#111111";
  ctx.fillRect(0, 0, 2, height);
  ctx.fillRect(0, height - 2, width, 2);
  document.body.appendChild(canvas);
});
