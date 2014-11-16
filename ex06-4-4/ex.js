window.addEventListener("DOMContentLoaded", function() {
  var canvas = document.querySelector("canvas");

  var Graph = new LightGraphInterface(canvas);
  var interval = setInterval(Graph.rewrite.bind(Graph), 1000);
});

function LightGraphInterface(canvas) {
  if(!canvas)
    throw "描画対象を指定してください。";
  else
    this.canvas = canvas;

  this.lux = 0;
  this.ctx = this.canvas.getContext("2d");
  this.canvas.width = 500;
  this.canvas.height = 300;
  this.barNumbers = 50;
  this.barWidth = this.canvas.width / this.barNumbers;

  this.luxValues = "0".repeat(this.barNumbers).split("").map(Number);

  this.updateLux = function(e) {
    this.lux = e.value;
  }

  this.rewrite = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "#FF0000";
    this.luxValues = this.luxValues.slice(-50, this.luxValues.push(this.lux));

    for(var i = 0; i < this.luxValues.length; i++) {
      var barTop = this.canvas.height - this.luxValues[i];
      var barHeight = this.canvas.height - barTop;
      this.ctx.fillRect(i * this.barWidth, barTop, this.barWidth, barHeight);
    }
  }

  if(window.hasOwnProperty("ondevicelight")) {
    var self = this;
    window.addEventListener("devicelight", this.updateLux.bind(self));
  } else {
    alert("Your browser doesn't support DeviceLightEvent");
  }
}
