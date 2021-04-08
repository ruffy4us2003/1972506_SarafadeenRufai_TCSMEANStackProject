//To get user's input from the console

module.exports.record = function logUserRecords() {
    

let r = require("readline-sync");

let info1 = r.question("What is your first name: ");
let info2 = r.question("What is your last name: ");
let info3 = r.question("What is your gender: ");
let info4 = r.question("What is your email: ");

debugger; //To check user input

//To get the current date and time of user's 
var myDate = new Date();
console.log("The date is: " + myDate);

let userInfo = {"firstname":info1, "lastname": info2, "gender": info3, "email": info4, "dateAndTime": myDate};

debugger; //To check the syntax

//Create an array variable to store the user's input
let userDataArray = new Array();
userDataArray.push(userInfo);
console.log("The userDataArray is: " + userDataArray[0]); //To check what is pushed

debugger; //To chceck the output

//Convert it to JSON format
let infoJson = JSON.stringify(userDataArray);
console.log("The userInfo in JSON format is: " + userDataArray);


//Create a file to save the user's record with a flag
let fs = require("fs"); //For using the File System
let userFile = fs.writeFileSync("userRecords.json", infoJson, {flag: "a"} );
console.log("Record saved successfully");
fs.close();

debugger; // To check the file system's operation
return logUserRecords;
}

//To make the code reusable

module.exports.record = logUserRecords;