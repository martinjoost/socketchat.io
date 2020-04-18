
const path = require('path');
const express = require('express');


const SocketIO  = require('socket.io');  
const io = SocketIO(server);
const app = express();

//websockets
io.on('connection', ()=>{
    console.log("Conectado");
    
})


//settings 
app.set('port', process.env.PORT || 3000);

//static files
app.use(express.static(path.join(__dirname, 'public')));


//start server
const server = app.listen(app.get('port', ), ()=>{
    console.log('server on port', app.get('port'));
})
