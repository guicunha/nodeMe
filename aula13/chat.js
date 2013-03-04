var connect = require('connect');
var http = require('http');
var redis = require('redis');
var sio = require('socket.io');
var spawn = require('child_process').spawn;

var client = redis.createClient();

var app = connect(
  connect.favicon()
  , connect.logger()
  , connect.static(__dirname + '/public')
);

var server = http.createServer(app);
var io = sio.listen(server);

server.listen(8001);


var mensagens = [];

//salva a mensagem em um array, somente 10
function armazenarMensagens(nick, mensagem){
  
    var msg = {
        hora: new Date().toLocaleTimeString(),
        nome: nick,
        texto: mensagem
    };
    
    mensagens.push(msg);
    
    if(mensagens.length > 1000){
        mensagens.splice(0, 1);
    }
    return msg;
};

function enviarMensagens(client){
    mensagens.forEach(function(msg){
       client.emit('mensagem', msg);
    });
}

var consumer = redis.createClient();
var publisher = redis.createClient();

//escutando o mensagens, assinando um canal
consumer.subscribe('mensagens');
consumer.on('message', function(channel, message){
   console.log('channel: ' + channel + 'message: ' + message);
   var msg = JSON.parse(message);
   io.sockets.emit('mensagem', msg);
});

io.sockets.on('connection', function(socket){
    
    socket.on('set nick', function(name){
        console.log('nick: ' + name);
        socket.set('nick', name, function(){
           socket.emit('ready');
           enviarMensagens(socket);
        });
    });
    
    socket.on('mensagem', function(mensagem){
        console.log('chegou mensagem: ' + mensagem);
        socket.get('nick', function(err, name){
           var msg = armazenarMensagens(name, mensagem);
            //clientRedis.publish('mensagem', msg);
            //io.sockets.emit('mensagem', msg);
            publisher.publish('mensagens', JSON.stringify(msg));
        });
    });
});