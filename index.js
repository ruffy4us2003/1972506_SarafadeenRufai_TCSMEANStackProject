//Create references to load the required modules
const { Socket } = require('dgram');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);

const port = 9999

//Create a route for the application

app.get('/', (req, res) => {
    //res.send('<h1> Welcome to Socket IO </h1>'); //Just for testing
    res.sendFile(__dirname + '/index.html');
});

//To listening to the incoming socket and log it to console
io.on('connection', (socket)=>{
    console.log('A client has connected');

    socket.on('disconnect', ()=>{
        console.log('A client has disconnected...');
   });
   

});

io.on('connection', (socket)=>{
    socket.on('chat message', (msg)=>{
        console.log('Client Message: ' + msg);
    });
});


server.listen(port, ()=>{
    console.log(`Server is is listening on port number ${port}`);
});



