var http = require('http');
var url = require('url');
var meuModulo = require('meu_modulo');
var querystring = require('querystring');

var server = http.createServer(function(request, response){
    
    var queryString = querystring.parse(url.parse(request.url).query);
    var aluno = queryString.aluno;
    var mensagem = meuModulo(aluno);
    
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end(mensagem);
});

server.listen(8000);