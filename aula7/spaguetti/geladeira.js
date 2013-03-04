var util = require('util');
var EventEmitter = require('events').EventEmitter;


function Geladeira() {
    EventEmitter.call(this);
}

util.inherits(Geladeira, EventEmitter);

Geladeira.prototype.pegarItem = function(item){
    var self = this;
    
   console.log('Pegando ' + item + ' na geladeira');
   setTimeout(function () {self.emit('item disponivel', item);}, 1500);
};

module.exports = Geladeira;