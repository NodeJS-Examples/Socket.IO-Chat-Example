var app = require('express')();
var server = app.listen(3000);
var io = require('socket.io').listen(server);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});


//http.listen(3000);