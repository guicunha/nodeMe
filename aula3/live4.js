var util = require('util');
var events = require('events');

function Panela(){
    events.EventEmitter.call(this);
}

util.inherits(Panela, events.EventEmitter);

Panela.prototype.cozinar = function(prato){
    var self = this;
    console.log('Cozinhando o ' + prato);
    setTimeout(function() {
        self.emit('Comida Pronta', prato);
    }, 3000);
};

var panela = new Panela();

panela.on('Comida Pronta', function(prato){
   console.log(prato + ' está pronto'); 
});

panela.cozinar('feijoada');
panela.cozinar('batata');
console.log('feijao demorado sera?');