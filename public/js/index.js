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

socket.on('newLocationMessage',function (data) {
    jQuery("#messages").append(`<li>${data.from} <a href="${data.url}" target="_blank">my current location</a></li>`);
})

jQuery('#form-message').on('submit',function(e) {
    e.preventDefault()
    socket.emit('createMessage',{
        'from':jQuery('[name=username]').val(),
        'text':jQuery('[name=message]').val()
    },
        (callbackData)=>{
            console.log('clear text');
        jQuery('[name=message]').val('');
        jQuery('[name=message]').focus();
    });
});

var sendLocationButton  = jQuery('#send-location');
sendLocationButton.on('click',function(){

    if(!navigator.geolocation){
        alert('geolocation not available');
        return false;
    }
    navigator.geolocation.getCurrentPosition(function(position){
        socket.emit('sendLocationMessage',{'latitude':position.coords.latitude,'longitude':position.coords.longitude},function(){
        });
    },function(){
        alert('unable to detect location');
    })
})
