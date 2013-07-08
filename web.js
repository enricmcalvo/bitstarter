fs = require('fs');
var filename = 'index.html';
var filetext = fs.readFileSync(filename, 'utf8', function(err,data){
    if (err) {
        return console.log(err);
    }
    return data.toString('utf8');
});

var express = require('express');

var app = express.createServer(express.logger());

var buffer = Buffer

app.get('/', function(request, response) {
  response.send(filetext);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
