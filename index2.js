//Create references to load the required modules
const { Socket } = require('dgram');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);

const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const port = 9990;

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
/*
io.on('connection', (socket)=>{
    socket.on('name', (cname)=>{
        console.log('clientName: ' + cname);
    });
});

*/

//Array to hold the chat log
var chatLog = [];

io.on('connection', (socket)=>{
    socket.on('chat message', (msg)=>{
        console.log('clientMessage: ' + msg);

        //Store the chatlog in an array
        //  var chatLog = [];
        
        //let msgJson = JSON.parse(msg)
        let chatMessage = {"clientMessage": msg};
        let msgToString = JSON.stringify(chatMessage)

        // console.log("The chatMessage before Push is: " + chatMessage.clientMessage);
        console.log("The chatMessage before Push is: " + msgToString);

        // chatLog.push(chatMessage);
        chatLog.push(msgToString);
        
        console.log("The chatLog after PUSH contains: " + chatLog.toString() );

    });
});

 console.log("The final chat records: " + chatLog.toString());


let chatLogJson = JSON.parse(chatLog);

mongoClient.connect(url, {useUnifiedTopology: true}, (err1, client)=>{
    if(!err1){
        let db = client.db("chatlog");

        db.collection("ChatCollection").insertOne(chatLogJson, (err2, result)=>{
            if(!err2){
                console.log("The records were successfully recorded in mongoDB: " + result );
            } else{
                console.log("Error occurred " + err2);
            }
        })
    }
});

server.listen(port, ()=>{
    console.log(`Server is is listening on port number ${port}`);
});



