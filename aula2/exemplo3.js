var util = require('util');

function funcSincrona(){
    throw new Error("Meu erro");
}
try{
    funcSincrona();
} catch(e){
    console.log(util.inspect(e));
}


