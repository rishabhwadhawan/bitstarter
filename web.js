var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var server;
server = http.createServer(function(req, res{

fs.readFile(__dirname + '/index.html', 'utf8', function(err, data){
 if(err) throw err;
 len = res.write(data, 'utf8');
 console.log(len + "bytes: " + buf.toString('utf8', 0, len));
 });

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
