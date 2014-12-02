function getString(data) {
  process.stdout.write("Input string: " + data);
}

function end() {
  process.stdout.write("end\n");
}

process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", getString);
process.stdin.on("end", end);
