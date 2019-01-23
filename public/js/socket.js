var socket = io();

socket.on('connect',function () {
    console.log('connected to server');

    socket.emit('createMessage',{'from':'vinayak.khadye','text':'I am fine'});
});
socket.on('disconnect',function () {
    console.log('disconnected from server');
});

socket.on('newMessage',function (data) {
    console.log('newMessage',data);
})