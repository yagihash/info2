var http = require("http");
var fs = require("fs");
var ejs = require("ejs");
var qs = require("querystring");

var server = http.createServer();
var port = 1234;

var path = fs.realpathSync('./');
var messages = [];

server.on("request", response);
server.listen(port);
console.log("server is running on " + port);

function response(req, res) {
  template = fs.readFileSync(path + "/ex6.ejs", "utf-8");
  data = "";

  function returnHTML() {
    var html = ejs.render(this.template, {
      title: "簡易掲示板",
      messages: messages,
    });
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(html);
    res.end();
  }
  
  function getData(chunk) {
    data += chunk
  }

  function getDataEnd() {
    obj = qs.parse(data);
    messages.push({
      content: obj.msg,
    });
    returnHTML();
  }

  if (req.method == "POST") {
    req.on("data", getData);
    req.on("end", getDataEnd);
  } else {
    returnHTML();
  }
}
