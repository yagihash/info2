var http = require("http");
var fs = require("fs");
var ejs = require("ejs");

var server = http.createServer();
var port = 1234;

var path = fs.realpathSync('./');

server.on("request", response);
server.listen(port);
console.log("server is running on " + port);

function response(req, res) {
  var template = fs.readFileSync(path + "/ex5.ejs", "utf-8");

  for( var n = 0,num = [],base = 2; n < 11; n++ ) {
    num.push({
      base: base,
      value: Math.pow(base, n),
      n: n,
    });
  }
  var html = ejs.render(template, {
    title: "2のn乗",
    num: num,
  });
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(html);
  res.end();
}
