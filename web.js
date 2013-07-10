var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get(
fs.readFile('/index.html', 'utf8', function(err, html){
 if(err) throw err;
 console.log(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
