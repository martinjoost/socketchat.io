const socket = io()


//DOM ELEMENTS
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

btn.addEventListener('click', function(){
    socket.emit('chat:message',{
        message: message.value,
        username: username.value,
    })
})