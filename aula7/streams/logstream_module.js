var Stream = require('stream');
var util = require('util');

function LogStream(){
    this.readable = true;
    this.writable = true;
}

util.inherits(LogStream, Stream);

LogStream.prototype.write = function(data){
    console.log('data: ' + data);
    this.emit('data', data);
};

LogStream.prototype.end = function(data){
    if(data){
        this.write(data);
    }
    this.emit('end');
};

module.exports = LogStream;