var connect = require('connect');
var http = require('http');

var sio = require('socket.io');
var spawn = require('child_process').spawn;

var app = connect(
  connect.favicon()
  , connect.logger()
  , connect.static(__dirname + '/public')
);

var server = http.createServer(app);
var io = sio.listen(server);

server.listen(8001);

var tail = spawn('tail', ['-f', './nohup.out']);

tail.stdout.on('data', function(data) {
  io.sockets.send(data.toString('utf8'));
});
