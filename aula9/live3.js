var http = require('http');
var url = require('url');
var fs = require('fs');
var util = require('util');

var server = http.createServer(function(request, response){
   var requestData = url.parse(request.url); 
   var arquivo = __dirname + '/public' + requestData.pathname;
   
   console.log(requestData);
   console.log(arquivo);
   
   var fileReadStream = fs.createReadStream(arquivo);
   //util.pump(fileReadStream, response);
   fileReadStream.pipe(response);
   //response.end();
});

server.listen(8888);