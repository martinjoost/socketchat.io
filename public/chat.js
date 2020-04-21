const socket = io()


//DOM ELEMENTS
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

btn.addEventListener('click', function(){
    console.log ( 
        username.value,
        message.value,
     );
})