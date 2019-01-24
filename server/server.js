const path      = require('path');
const socketIO  = require('socket.io');
const http      = require('http');
const express   = require('express');
const publicPath= path.join(__dirname,'../public');

var app     = express();
var server  = http.createServer(app);
var io      = socketIO(server);
var port    = process.env.PORT || 3000;

app.use( express.static(publicPath))

io.on('connection',(socket)=>{
    console.log('New user connected');
    socket.on('disconnect',()=>{
        console.log('User disconnected');
    })
    socket.on('createMessage',(data)=>{
        console.log('createMessage',data);
        //socket.emit('newMessage',{'to':data.to,'receivedTime':new Date().getTime().toString()});
        io.emit('newMessage',{'to':data.to,'receivedTime':new Date().getTime().toString()});
    })
    
});
server.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})

