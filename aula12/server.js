var WebsocketServer = require('ws').Server;
var wss = new WebsocketServer({port: 8080});

wss.on('connection', function(ws) {
  console.log('cliente: %s', ws);
  ws.on('message', function(message) {
    console.log('mensagem: %s', message);
  });

  ws.send('mensagem do servidor');

  ws.on('close', function() {
    console.log('cliente desconectou');
  });
});