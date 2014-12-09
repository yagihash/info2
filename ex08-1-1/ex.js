function response(req, res) {
    res.writeHead(200, {"Content-type": "text/html"});
    res.write("<!DOCTYPE html>");
    res.write("<html lang=\"ja\">");
    res.write("<head>");
    res.write("<meta charset=\"utf-8\">");
    res.write("<title>node.jsでHTML</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>node.jsでHTML</h1>");
    res.write("<p>実際にnode.jsでHTMLを返してみます。これがその結果です。</p>");
    res.write("</body>");
    res.write("</html>");
    res.end();
}

var http = require("http");
var server = http.createServer();
server.on("request", response);
server.listen(1234);
console.log("server started.");
