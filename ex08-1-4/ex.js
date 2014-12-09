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
  var template = fs.readFileSync(path + "/ex3.ejs", "utf-8");

  var html = ejs.render(template, {
    title: "タイトル文字列",
    content: "<strong>テンプレートへ挿入する文</strong>"
  });
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(html);
  res.end();
}
