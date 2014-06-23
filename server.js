var http = require("http");
var url = require("url");

var start = function(route, handle) {
  var onRequest = function(request, response) {
    var pathname = url.parse(request.url).pathname;

    route(handle, pathname, response);

    console.log("Request for " + pathname + " received.");
    response.writeHead(200, {"Content-type": "text/plain"});
    response.write("Hello World!");
    response.end();
  };

  http.createServer(onRequest).listen(8888);
};

exports.start = start;


