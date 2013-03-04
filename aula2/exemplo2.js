var util = require('util');

function funcSincrona(){
    throw {
      name: 'meu errro',
      message: 'minha mensagem'
    };
}

try{
    funcSincrona();
} catch(e){
    console.log(e.name);
    console.log(e.message);
}