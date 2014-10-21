window.onload = function() {
  var canvas = document.getElementsByTagName("canvas")[0];
  canvas.width = 200;
  canvas.height = 200;
  var ctx = canvas.getContext("2d");
  var x = canvas.width / 2, y = canvas.height / 2;
  var r = 80, n = 5;

  ctx.lineWidth = 3.0;
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = "#CCCCCC";

  with(Math) {
    ctx.beginPath();
    ctx.moveTo(x + sin(0 * 2 * PI / n) * r, y - cos(0 * 2 * PI / n) * r);
    for(var i = 0; i <= 5 * 2; i += 2) {
      ctx.lineTo(x + sin(i * 2 * PI / n) * r, y - cos(i * 2 * PI / n) * r);
    }
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
}