var http = require('http'),
    fileSystem = require('fs'),
    path = require('path'),
    util = require('util');

http.createServer(function(request, response) {
  var filePath = path.join(__dirname, 'hello.mp4');
  //var filePath = path.join(__dirname, 'video.mp4'); //Utilize um arquivo de vÃ­deo grande para ficar melhor
  var stat = fileSystem.statSync(filePath);

  var inicio = 0;
  var fim = 0;

  var range = request.headers.range;
  console.log(range);

  if (range) {
		inicio = parseInt(range.slice(range.indexOf("bytes=") + 6, range.indexOf("-")));
		fim = parseInt(range.slice(range.indexOf("-") + 1, range.length));    
  }

  if (isNaN(fim) || fim == 0) {
    fim = stat.size-1;
  }

  if (inicio > fim) return;

  response.writeHead(206, {
    //'Content-Type': 'audio/mpeg',
    'Content-Type': 'video/mp4',
    'Content-Range':'bytes '+ inicio + '-' + fim + '/' + stat.size,
    'Content-Length': stat.size,
    'Transfer-Encoding':'chunked'

  });
                         
  console.log('inicio:' + inicio);
  console.log('fim:' + fim);
  var readStream = fileSystem.createReadStream(filePath, { flags: 'r', start: inicio, end: fim});

  //Simples
  // readStream.on('data', function(data) {
  //   response.write(data);
  // });

  // readStream.on('end', function() {
  //   response.end();
  // });

  //Controla o write para nÃ£o saturar o flush no response
  // readStream.on('data', function(data) {
  //   var flushed = response.write(data);
  //   if(!flushed) {
  //     readStream.pause();
  //   }
  // });

  // response.on('drain', function() {
  //   readStream.resume();
  // });

  // readStream.on('end', function() {
  //   response.end();
  // });

  //Optimizada Simples
  util.pump(readStream, response);
})
.listen(2000);