var mysql = require('mysql');

var connection = mysql.createConnection({
host : 'mysql02.cromg.org.br',
user : 'cromg',
password : '@cromgMysql',
database: 'cromg'
});

connection.connect();

/*
connection.query('insert into pessoas (nome, idade) values(?, ?)', ['Emerson', 31], function(err, info){
    console.log(err);
    console.log(info);
});


connection.query('SELECT * FROM pessoas', function(err, rows, fields){
    if(err) throw err;
    
    rows.forEach(function(row){
       console.log('nome: ' + row.nome + ' idade: ' + row.idade);
    });
    //console.log(fields);
});



connection.query('SELECT * FROM pessoas where id = ?', [2] ,function(err, rows, fields){
    if(err) throw err;
    
    rows.forEach(function(row){
       console.log('nome: ' + row.nome + ' idade: ' + row.idade);
    });
    //console.log(fields);
});



connection.query('update pessoas set nome = ?, idade = ? where id = ?', ['fulaninho2', 27, 13], function(
        err, info){
            console.log(err);
            console.log(info);
        });
*/

connection.query('delete from pessoas where id = ?', [3], function(err){
   console.log(err); 
});

connection.end();