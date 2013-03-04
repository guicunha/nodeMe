var redis = require('redis');

var client = redis.createClient();

client.select(0);

//client.set('nome','guiCorleone');

/*
 client.get('nome',function(err, nome){
   console.log(nome); 
});

client.exists('nome',function(err, existe){
   console.log(existe); 
});
* 

//client.del('nome');

//ver se existe
client.exists('nome',function(err, existe){
   console.log(existe); 
});

//incremento
client.incr('contador', function(err, retorno){
   console.log('contador: ' + retorno); 
});


//decremento
client.decr('contador', function(err, retorno){
   console.log('contador: ' + retorno); 
});


//client.flushdb();

//client.hset('aluno', 'nome', 'joaozinho');

client.hget('aluno', 'nome', function(err, nome){
   console.log('nome do aluno: ' + nome); 
});



client.hset('aluno', 'idade', 20);

client.hlen('aluno', function(err, totalAtrb){
    console.log('total de atributos aluno: ' + totalAtrb);
});

*/
client.rpush('eganial:alunos', 'Antonio');
client.lpush('eganial:alunos', 'Sandro');
client.rpush('eganial:alunos', 'Fabio');

client.quit();