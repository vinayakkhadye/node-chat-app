var socket = io();
socket.on('connect',function () {
    console.log('connected to server');
});
socket.on('disconnect',function () {
    console.log('disconnected from server');
});
socket.on('newMessage',function (data) {
    jQuery("#messages").append(`<li>${data.from} : ${data.text}</li>`);
})

jQuery('#form-message').on('submit',function(e) {
    e.preventDefault()
    socket.emit('createMessage',{
        'from':jQuery('[name=username]').val(),
        'text':jQuery('[name=message]').val()},
        (callbackData)=>{
        console.log(callbackData);
    });
});