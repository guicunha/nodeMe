var fs = require('fs');

/*
fs.readFile('./file.txt', 'utf8', function(err, data){
    if(err) throw err;
    console.log(data);
});

fs.writeFile('message.txt', 'Hello Node\n', function(err){
   if(err) throw err;
   console.log('salvo com sucesso');
});

fs.appendFile('message.txt', 'Segunda Linha\n', 'utf8', function(err){
   if(err) throw err;
    console.log('salvo com sucesso'); 
});


function mostrarStatus(dir, fileName){
    fs.lstat(dir + '/' + fileName, function(err, stats){
        console.log('É um diretório: ' + stats.isDirectory());
        console.log('É um arquivo: ' + stats.isFile());
        console.log('E um link simbolico: ' + stats.isSymbolicLink());
    });
}

mostrarStatus(__dirname, 'message.txt');


fs.watchFile('./message.txt', function(curr, prev){
  console.log(curr);
  console.log(prev);
});



fs.unlink('message.txt', function(err){
   if(err) throw err;
   console.log('apagado com sucesso');
});


fs.readdir('.', function(err, arquivos){
    console.log(arquivos);
});


function listaDir(path){
    fs.readdir(path, function(err, arquivos){
       listaArquivos(path, arquivos); 
    });
}

function listaArquivos(path, arquivos){
    if(!arquivos) return;
    arquivos.forEach(function(arquivo)
       var pathArquivo = path + '/' + arquivo;
       console.log(pathArquivo);
       fs.stat(pathArquivo, function(err, stats){
          if(stats.isDirectory()){
                listaDir(pathArquivo);
          } 
       });
    }
}

listaDir('../');
*/