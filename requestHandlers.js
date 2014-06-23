var start = function(response) {
  console.log("Handling start path.");
  response.writeHead(200, {"Content-type": "text/plain"});
  response.write("Hello start");
  response.end();
};

var upload = function(response) {
  console.log("Handling upload path.");
  response.writeHead(200, {"Content-type": "text/plain"});
  response.write("Hello upload");
  response.end();
};

exports.start = start;
exports.upload = upload;
