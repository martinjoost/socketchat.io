const socket = io()


//DOM ELEMENTS
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('window__output');
let actions = document.getElementById('window_actions');

btn.addEventListener('click', function(){
    socket.emit('chat:message',{
        message: message.value,
        username: username.value,
    })
})

message.addEventListener('keypress', function(){
    socket.emit('chat:typing', {
        message: message.value,
        username: username.value,
    })
})

socket.on('chat:message', function(data){
    console.log("data chat:message: ",data);
    
    output.innerHTML += `
                        <p>
                            <strong>
                                ${data.username}
                            </strong>
                            <span>${data.message}</span>
                        </p>
                        `   
})
socket.on('chat:typing', function(data){
    console.log(data);
    
    actions.innerHTML = `
                        
                        <p><em>${data.username} is Typing..</em> </p>

                        `
})