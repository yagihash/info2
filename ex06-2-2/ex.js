window.addEventListener("DOMContentLoaded", function() {
  var canvas = document.querySelector("canvas");
  canvas.width = 300;
  canvas.height = 10;

  if(window.hasOwnProperty("ondevicelight")) {
    window.addEventListener("devicelight", function(e) {
      rewriteLuxGraph.call(canvas, e);
    });
  } else {
    alert("Your browser doesn't support DeviceLightEvent");
  }

  function rewriteLuxGraph(e) {
    var w = this.width = e.value, h = this.height;
    var ctx = this.getContext("2d");

    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, w, h);
  }
});
