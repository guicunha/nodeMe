var express = require('express');
var app = express();
var ejs = require('ejs');
//var engines = require('consolidate');

//app.use(express.bodyParser());

app.configure(function(){
   app.set('views', __dirname + '/views');
   app.register('.html', require('ejs'));
   app.set('view engine', 'html');
   
    app.set('view options', {
      open: '{{',
      close: '}}'
   });
  // app.register('.html', require('ejs'));
});

app.get('/', function(req, res){
   res.render('django',{
       nome: 'cunha'
   });
   //res.send('terminou o request');
});

/* 
 * 
 * 
app.all('/:nome?', function(req, res){
   console.log('query' + req.query.nome);
   console.log('body' + req.body.nome);
   console.log('params' + req.params.nome);
   res.send('terminou o request');
});
 * app.get('/', function(req, res){
   console.log('query: ' + req.query.nome);
   console.log('body: ' + req.body.nome);
   console.log('params: ' + req.params.nome);
   res.send('terminou o request');
});

app.post('/', function(req, res){
   console.log('query' + req.query.nome);
   console.log('body' + req.body.nome);
   console.log('params' + req.params.nome);
   res.send('terminou o request');
});
*/
app.listen(8888);