var http = require("http");
var server = http.createServer();
server.on("request", response);
server.listen(1234);
console.log("server started");

function response(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  if(req.url == "/hello") {
    res.write("Hello!");
  } else if(req.url == "/bye") {
    res.write("Bye!");
  } else {
    res.write("Sorry, I cannot understand.");
  }
  res.end();
}
