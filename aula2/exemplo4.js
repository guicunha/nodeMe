var util = require('util');
function funcaAsincrona(mensagem){
    this.name = 'Meu Erro';
    Error.call(this, mensagem);
    Error.captureStackTrace(this, arguments.callee);
}

funcaAsincrona.prototype.__proto__ = Error.prototype;

function MinhaFuncao(){
    throw  new funcaAsincrona("Meu erro Personalizado");
}

try{
    funcSincrona();
} catch(e){
    console.log(util.inspect(e));
}
