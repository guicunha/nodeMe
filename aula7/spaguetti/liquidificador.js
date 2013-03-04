var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Liquidificador() {
    EventEmitter.call(this);
    this.suco = null;
}

util.inherits(Liquidificador, EventEmitter);

Liquidificador.prototype.espremer = function(fruta){
    var self = this;
    console.log('vou espremer a fruta: ' + fruta);
    setTimeout(function () {
        self.suco = fruta;
        self.emit('espremido', self.suco);
    }, 1500);
};

module.exports = Liquidificador;