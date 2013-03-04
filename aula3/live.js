var http = require('http');

var server = http.createServer();

server.on('request', function(request, response){
   console.log('Aconteceu um request'); 
   
   request.on('data', function(chunk){
       console.log('chegaram dados:' + chunk);
   });
   
   request.on('end', function(){
      console.log('requisição chegou toda');
      response.end('acabou o request. Isso é a resposta');
   });
   
});

console.log('Listeners: ' + server.listeners('resquest'));

server.listen(8888);
console.log('subiu o server no localhost 8888');