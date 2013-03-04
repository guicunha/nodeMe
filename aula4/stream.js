var stream = require('stream');

var streamSaida = new stream.Stream();
streamSaida.writable = true;

streamSaida.write = function(chunk, encoding){
    this.emit('data', new Buffer(chunk, encoding));
};

streamSaida.on('data', function(data){
    console.log('Dados recebidos: ' + data);
});

streamSaida.write('fulano', 'utf8');
/*
var streamEntrada = new stream.Stream();
streamEntrada.pipe(streamSaida);

streamEntrada.on('resume', function(){
    this.emit('data', 'alguma coisa');
});

streamEntrada.resume();
*/