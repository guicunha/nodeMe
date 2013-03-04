var http = require('http');

var server = http.createServer(function(request, response){
   response.statusCode = 200;
   response.setHeader("Content-Type", "text/html");
   /*response.setHeader("Set-Cookie",[
       "curso=Node.JS; Path=/meus_cookies; Expires=Thu, 10 Jun 2021 10:18:14 GMT",
       "linguagem=JavaScript; Domain=cursonode.com.br; Expires=Wed, 09 Jun 2021 10:18:14 GMT"
   ]);
   */
   
   //console.log(request.headers['cookie']);
   //console.log(response.getHeader('Set-Cookie'));
   
   setInterval(function(){
      response.write('Escrevendo no response\n'); 
   }, 250);
   
   setTimeout(function(){
      response.end(); 
   }, 5000);
   
});
server.listen(8888);