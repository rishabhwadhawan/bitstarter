var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response){


fs.readFile(__dirname + '/index.html', 'utf8', function(err, data){
 if(err) throw err;
 
 response.write(data, 'utf8');
 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
