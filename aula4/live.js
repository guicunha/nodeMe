process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk){
    console.log('dados de entrada: ' + chunk);
});

process.on('SIGINT', function(){
    console.log('SIGINT. Pressione Control-D para sair.');
});