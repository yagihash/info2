var http = require("http");
var fs = require("fs");
var ejs = require("ejs");

var server = http.createServer();
var port = 1234;

var path = fs.realpathSync('./');

server.on("request", response());
server.listen(port);
console.log("server is running on " + port);

function response(req, res) {
  var n = 0;
  return function(req, res) {
    var template = fs.readFileSync(path + "/ex4.ejs", "utf-8");

    n += 1;
    var html = ejs.render(template, {
      title: "タイトル文字列",
      content: "テンプレートへ挿入する文",
      num: n,
    });
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(html);
    res.end();
  };
}
