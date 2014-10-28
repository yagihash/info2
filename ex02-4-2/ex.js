window.onload = function() {
  var form = document.forms[0];
  var canvas = document.getElementsByTagName("canvas")[0];
  canvas.width = 200;
  canvas.height = 200;
  var pi = document.getElementById("pi");
  var ctx = canvas.getContext("2d");
  form.onsubmit = function() {
    return false;
  };
  form.n.onkeyup = function() {
    var n = form.n.value - 0;

    var x = canvas.width / 2, y = canvas.height / 2;
    var r = 80;

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 3.0;
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#CCCCCC";

    var sum = 0;
    with(Math) {
      ctx.beginPath();
      var strtX = x + sin(0 * 2 * PI / n) * r;
      var strtY = y - cos(0 * 2 * PI / n) * r;
      ctx.moveTo(strtX, strtY);
      for(var i = 1; i <= n; i++) {
        var dstX = x + sin(i * 2 * PI / n) * r;
        var dstY = y - cos(i * 2 * PI / n) * r;
        ctx.lineTo(dstX, dstY);
        sum += distance(strtX, strtY, dstX, dstY);
        strtX = dstX, strtY = dstY;
      }
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    }
    pi.innerText = (sum / (r * 2)).toString();
    this.focus();
    return false;
  };
};

function distance(x1, y1, x2, y2) {
  with(Math)
    return sqrt(pow((x2-x1), 2) + pow((y2-y1), 2));
}

