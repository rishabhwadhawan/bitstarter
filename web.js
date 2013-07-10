var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get(
fs.readFile(__dirname + '/bitstarter/index.html', 'utf8', function(err, html){
 if(err){
   console.log(err);
  }else{
     connection.sentUTF( JSON.stringify({
            content: html, 
            data: {}
        }));
      }
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
