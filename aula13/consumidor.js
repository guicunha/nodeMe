var redis = require('redis');

var consumer = redis.createClient();

consumer.subscribe('mensagens');
consumer.on('message', function(channel, message){
   console.log('channel: ' + channel + 'message: ' + message);
});