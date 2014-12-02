Array.prototype.sum = function() {
  return this.reduce(function(p, c, i, arr) {
    return p + c;
  });
};


var a = [];

process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", getNum);
process.stdin.on("end", end);

function getNum(data) {
  a.push(Number(data));
}

function end() {
  process.stdout.write("Sum: " + a.sum() + "\n");
}
