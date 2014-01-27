var express = require('express'),
    app = express(),
    http = require('http').createServer(app),
    io = require('socket.io').listen(http);

http.listen(3000);


io.sockets.on('connection', function(socket){
    socket.on('send msg', function(data){
        io.sockets.emit('get msg', data);
    })
})

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/bower_components'));