var EventEmitter = require('events').EventEmitter;

var evento = new EventEmitter();

evento.on('newListener', function(event, listener){
   console.log('Evento: ' + event + 'adicionado com o listener' + listener); 
});

evento.on('Qualquer Coisa', function() {});
evento.on('Outra Coisa', function() {});