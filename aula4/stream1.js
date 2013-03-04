var http = require('http');
var util = require('util');

var server = http.createServer();

server.on('request', function(request, response){
   console.log('Aconteceu um request'); 
   
   request.on('data', function(data){
       console.log('chegaram dados:' + data);
       response.write('recebi seus dados: ' + data);
   });
   
   request.on('end', function(){
      console.log('requisição chegou toda');
      response.end('acabou o request. Isso é a resposta');
   });
   
});

server.listen(8888);
console.log('subiu o server no localhost 8888');