var http = require('http');
var url = require('url');
var querystring = require('querystring');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/egenial_nodejs_post');

var AlunoSchema = new mongoose.Schema({
   name: {type: String, index: false, unique: true},
   idade: {type: Number, index: true}
});

mongoose.model('Aluno', AlunoSchema);
var Aluno = mongoose.model('Aluno');

var server = http.createServer(function(request, response){
   request.setEncoding('utf8');
   request.body='';
   
   request.on('data', function(chunk){
      request.body += chunk;
   });
   
   request.on('end', function(){
       console.log(request.body);
       var dadosAluno = querystring.parse(request.body);
       console.log(dadosAluno);
       
       var aluno = new Aluno(dadosAluno);
       aluno.save(function(err){
          if(err){
              console.log('erro ao salvar aluno');
              response.statusCode = 500;
              response.end('Erro al salvar o aluno');
              return;
          } 
          console.log('Aluno salvo com sucesso');
          response.end('aluno salvo com sucesso');
       });
   });
});

server.listen(8888);