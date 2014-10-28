window.onload = function() {
  var canvas = document.getElementsByTagName("canvas")[0];
  canvas.width = 200;
  canvas.height = 200;
  var ctx = canvas.getContext("2d");

  var x, y;
  for(var y = 0; y < 200; y += 20) {
    for(var x = 0; x < 200; x += 20) {
      if((x + y) % 40 == 0) {
        ctx.fillStyle = (x+y) % 80 == 0 ? "#000000" : "#CCCCCC";
        ctx.fillRect(x, y, 20, 20);
      }
    }
  }
};