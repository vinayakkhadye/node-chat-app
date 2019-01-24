var socket = io();

socket.on('connect',function () {
    console.log('connected to server');
    socket.emit('createMessage',{'from':'vinayak.khadye','to':'mahesh.kadam', 'text':'how is your son'});
});
socket.on('disconnect',function () {
    console.log('disconnected from server');
});

socket.on('newMessage',function (data) {
    console.log('newMessage',data);
})

socket.on('messageReceived',function (data) {
    console.log(data);
    console.log(`Message received by ${data.to} at ${data.receivedTime}`);
})
