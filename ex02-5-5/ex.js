window.onload = function() {
  var points = [];
  var canvas = document.getElementsByTagName("canvas")[0];
  var pi = document.getElementById("pi");
  var w = canvas.width = 200;
  var h = canvas.height = 200;
  var r = w / 2;
  var ctx = canvas.getContext("2d");
  document.getElementById("drop").onclick = function() {
    for(var i = 0; i < 1000; i++)
      points.push(dropPoint(ctx, w, h));
    pi.innerText = calcRatio(w, h, r, points).toString();
  }
  document.getElementById("reset").onclick = function() {
    pi.innerText = "??";
    setCircle(ctx, w, h, r);
  }
  setCircle(ctx, w, h, r);
}

function setCircle(ctx, w, h, r) {
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, w, h);

  ctx.lineWidth = 0.5;
  ctx.strokeStyle = "#111111";
  
  ctx.beginPath();
  ctx.strokeRect(0, 0, w, h);
  ctx.arc(w / 2, h / 2, r, 0, Math.PI*2, true);
  ctx.stroke();
}

function dropPoint(ctx, width, height) {
  var x = Math.random() * width | 0;
  var y = Math.random() * height | 0;
  
  ctx.fillStyle = "#CCCCCC";
  ctx.fillRect(x, y, 1, 1);

  return [x, y];
}

function calcRatio(w, h, r, points) {
  var innerPoints = 0;
  for(var i = 0; i < points.length; i++) {
    if(distance(w / 2, h / 2, points[i][0], points[i][1]) <= r)
      innerPoints++;
  }
  return 4 * (innerPoints / points.length);
}

function distance(x1, y1, x2, y2) {
  with(Math)
    return sqrt(pow((x2-x1), 2) + pow((y2-y1), 2));
}
