var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
app.get('/', function(request, response) {
 fs.readFileSync('index.html', 'utf8')
 var buf = new Buffer(200);
 buf.write("Hello World from index.html", "utf8")

 buf.toString('utf8')

 });

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
