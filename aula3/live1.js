var EventEmitter = require('events').EventEmitter;

var evento = new EventEmitter();

/*
evento.on('algumEvento', function(valor){
    console.log('valor recebido: ' + valor);
});

evento.emit('algumEvento', 'alguma coisa que eu quiser');
*/

var pegaNome = function(nome){
    console.log('nome: ' + nome);
};

evento.on('nome', pegaNome);

evento.emit('nome', 'GuiCunha');

var listenersNome = evento.listeners('nome');
console.log('listeners de nome: ' + listenersNome);