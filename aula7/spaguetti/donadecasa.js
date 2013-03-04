var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Geladeira = require('./geladeira');
var Liquidificador = require('./liquidificador');
var Armario = require('./armario');


function DonaDeCasa(){
    EventEmitter.call(this);
}

util.inherits(DonaDeCasa, EventEmitter);

DonaDeCasa.prototype.fazerSuco = function(fruta){
    var self = this;
    
    var geladeira = new Geladeira();
    var liquidificador = new Liquidificador();
    var armario = new Armario();
    
    
    geladeira.on('item disponivel', function(fruta){
        console.log('item: ' + fruta);
        liquidificador.espremer(fruta);
    });

    liquidificador.on('espremido', function(suco){
           console.log('espremi o suco de ' + suco);
           armario.pegarItem('copo');
    });

    armario.on('item disponivel', function(copo){
       console.log('peguei o copo'); 
       copo.servir(liquidificador.suco);
       self.emit('suco servido', liquidificador.suco);
    });

    geladeira.pegarItem(fruta);

};

module.exports = DonaDeCasa;