const path      = require('path');
const socketIO  = require('socket.io');
const http      = require('http');
const express   = require('express');
const publicPath= path.join(__dirname,'../public');
const {geneateMessage, geneateLocationMessage} = require('./utils/mssage');
var app     = express();
var server  = http.createServer(app);
var io      = socketIO(server);
var port    = process.env.PORT || 3000;

app.use( express.static(publicPath))

io.on('connection',(socket)=>{
    console.log('New user connected');

    socket.emit('newMessage', geneateMessage('admin','Welcome to the chat app'));
    socket.broadcast.emit('newMessage',geneateMessage('admin','New User joined'));

    socket.on('disconnect',()=>{
        console.log('User disconnected');
    })
    socket.on('createMessage',(data, callback)=>{
        io.emit('newMessage',geneateMessage(data.from,data.text));
        callback('clear');
    })
    socket.on('sendLocationMessage',(position,callback)=>{
        io.emit('newLocationMessage',geneateLocationMessage('Admin', position.latitude, position.longitude));
        callback();
    })
});
server.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})

