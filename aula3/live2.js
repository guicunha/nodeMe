var EventEmitter = require('events').EventEmitter;

var evento = new EventEmitter();

evento.once('eventounico', function(){
   console.log('so dispara uma vez'); 
});

evento.emit('eventounico');
evento.emit('eventounico');