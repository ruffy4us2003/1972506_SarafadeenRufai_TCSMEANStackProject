// /*THIS FILE IS ABANDONED DUE TO ERRORS....THE CORRECCT VERSION IS "task-planner3.js"

// //This is a task planner project

// let http = require("http"); //To load http module
// let url = require("url"); //To load url module
// let fs = require("fs"); //To load file system module
// let port=9999;

// let taskInfo = 
// `<h2>Task Planner</h2>
// <form action="/store" method="get">
//     <h3>Task To Be Added!</h3>
//     <label>Emp Id</label> <input type="text" name="eid"/> <br/>
//     <label>Task Id</label> <input type="text" name="tid"/> ,<br/>
//     <label>Task</label><input type="text" name="task"/> <br/>
//     <label>Deadline</label><input type="date" name="deadline"/> <br/>
//     <input type="submit" value="Add Task">

// </form> ` ;



// // create array Task array 
// var taskArray = new Array();


// let server = http.createServer((req,res)=> {

//     let urlDetails = req.url;
//     console.log(urlDetails);

//     let pathInfo = url.parse(urlDetails, true).pathname;

//     if(req.url != "/favicon.ico"){

        
//         //To display the form in html format
//         if(urlDetails =="/"){
//             res.setHeader("content-type", "text/html");
//             res.write(taskInfo);

//         }
//             //To get and store the task info
//          else if (pathInfo == "/store")  {
                      
//          let data = url.parse(urlDetails,true).query; // take the value from url 
        
//          console.log(data);
         
//          // convert to object 
//             let urlData = JSON.stringify(data);
           
//             console.log("The dataToString is " + urlData);
//             res.write("Task Info passed successfully");
            
//             res.write(urlData);

//             // store records in object using push method

//             taskArray.push(urlData);
            

//             //Just to check if the push method works
//             console.log("The task info in Array is " + taskArray); 

            
//             //convert to string to save it in a file
//             var taskArrayToString = JSON.stringify(taskArray, null, 2);                 
//             console.log("The ID of first employee" + taskArrayToString[0].eid);

//             // store using fs module.
            
//             fs.writeFileSync("taskFile.json", taskArrayToString);
            
//             console.log("Task's Records saved successfully");
        
//         }else if(req.url=="/delete"){
//                 // read from file 
//                 let fileToRead = fs.readFileSync("taskFile.json");
//                 let fileToString = fileToRead.toString(); //To make the file readable

//                 console.log("The file read is " + fileToString); //To check the file output
//                 res.write("The file read is " + fileToString);
                
//                 // convert to json 
//                 let fileToJson = JSON.parse(fileToString);

//                 //res.write(`The file to read is ${fileToJson}`); //Just to confirm the read operation

//                 // check value using iterator or loop 
//                  res.write("The value of each of the elements in the file");
//                  for (let i = 0; i < fileToJson.length; i++){
//                    /*
//                     console.log(fileToJson[i].eid);
//                     console.log(fileToJson[i].tid);
//                     console.log(fileToJson[i].deadline);
//                     console.log();
//                     */
                    
//                     res.write(fileToJson[i]);
//                     // res.write(fileToJson[i].tid);
//                     // res.write(fileToJson[i].deadline);
//                     // res.write("Operation check value DONE!");

//                     // res.write(" ");

//                 }
                    
//                 res.write("The id of the first element is " + fileToJson[0].eid);
//                 // delete using array method's 
//                 //let fileArray = new Array(); //Array object to modify the file
                
//                // let fileToString = JSON.stringify(fileToJson);
             
                
//                 //fileArray.push(fileToString); //save the file in Array
                       
                
//                 //console.log("The employee ID of the 1st element of the fileArray: " + fileArray[0].eid);

//                 // store in file using fs module. 
//                 //if task id not available display error message. 


//         }else if(req.url=="/display"){
//                 // read from file 
//                 // convert to json 
//                 //iterator loop 
//                 // create tableData variable using backticks 
//                 /*
//                     <table>
//                     <tr>
//                             <td>${variableName}</td>
//                     </tr>
//                     </table>
//                     res.end(tableDatavariable);
//                 */
//         }
//     }
//     res.end();
    
// });

// server.listen(port,()=>console.log(`Server running on port number ${port}`));

// 