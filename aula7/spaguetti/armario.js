var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Armario() {
    EventEmitter.call(this);
}

util.inherits(Armario, EventEmitter);

Armario.prototype.copo = {
    servir: function(suco){
        console.log('servir um suco de ' + suco);
        //setTimeout(function () {callback();}, 1500);
    }
};

Armario.prototype.pegarItem = function(item, callback){
    var self = this;
    console.log('Pegando copo no armario');
    setTimeout(function () {self.emit('item disponivel', self.copo);}, 1500);
};

module.exports = Armario;