var connect = require('connect');
var url = require('url');
var RedisStore = require('connect-redis')(connect);

var server = connect(
    connect.favicon(),
    connect.cookieParser(),
    connect.bodyParser(),
    connect.methodOverride(),
    connect.session({ secret: 'nodejs', store: new RedisStore({ttl: 60})}),
    connect.logger(),
    connect.responseTime(),
    cookieLogger(),
    /*function(req, res, next){
       var requesData = url.parse(req.url, true);
      if(!req.session.aluno){
          req.session.aluno = requesData.query.aluno;
          console.log('colocou o nome do aluno na sessao');
      }
      console.log('Aluno na sessão: ' + req.session.aluno);
      
      //res.end();
      next();
    },*/
    function(req, res){
        //console.log(req.body);
        //console.log(req.body.nome);
        //console.log(req.body.idade);
        
        console.log(req.method);
        console.log(req.originalMethod);
        
        res.end();
    },
    connect.static(__dirname + '/public')
).listen(8888);
    
function cookieLogger(){
    return function(req, res, next){
        console.log(req.cookies);
        next();
    };
}