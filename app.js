const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/cousedb"
const app = express();

const port = 9000; //The port number for the server


//Connect to the database
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology:true} );
const con = mongoose.connection;

con.on("open", ()=>{
    console.log("The database has connected...");
});

//Declare the router module
const routerModule = require("./routes/courseRouter");
app.use('/courseRouter', routerModule);

app.use(express.json())



app.listen(port, function(){
    console.log(`The Server is running on the port number ${port}...`);
});