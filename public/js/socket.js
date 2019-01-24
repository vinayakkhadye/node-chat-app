var socket = io();

socket.on('connect',function () {
    console.log('connected to server');
    // socket.emit('createMessage',{'from':'vinayak.khadye','text':'how is your son'});
    
});
socket.on('disconnect',function () {
    console.log('disconnected from server');
});


socket.on('newMessage',function (data) {
    console.log(`New Message Notification : ${data.from} : ${data.text}`);
})

