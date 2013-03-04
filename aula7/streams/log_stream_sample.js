var http = require('http');
var fs = require('fs');
var LogStream = require('./logstream_module');


http.createServer(function(req, res){
 
   var logStream = new LogStream();
   fs.createReadStream('./arquivo_log.txt').pipe(logStream).pipe(res);
   
   
}).listen(8000);