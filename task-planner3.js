let http = require("http"); //To load the http module
let url = require("url");  //To load the url module
let fs = require("fs"); //To load the file system module
let port=9999;          //Port number where the server listens

//Create a form to store the user input
let taskInfo = 
`<h2>Task Planner</h2>
<form action="/store" method="get">
    <h3>Task To Be Added!</h3>
    <label>Emp Id</label> <input type="text" name="eid"/> <br/>
    <label>Task Id</label> <input type="text" name="tid"/> ,<br/>
    <label>Task</label><input type="text" name="task"/> <br/>
    <label>Deadline</label><input type="date" name="deadline"/> <br/>
    <input type="submit" value="Add Task">

</form> ` ;



// create array Task array 
let taskArray = [];

let server = http.createServer((req,res)=> {
    let urlDetails = req.url;
    var pathInfo = url.parse(urlDetails, true).pathname;

    console.log("The URL details are " + urlDetails);

    if(req.url != "/favicon.ico"){
        if(urlDetails == "/"){
            res.setHeader("content-type", "text/html");
            res.end(taskInfo);
        }
         else if(pathInfo == "/store"){
            let data = url.parse(urlDetails,true).query;
             // take the value from url 
             var empId = data.eid;
             var taskId = data.tid;
             var task = data.task;
             var deadline = data.deadline;
            
            
            // convert to object 
            
            let urlValues = {"employeeId": empId, "employeeTaskId": taskId, "employeeTask": task, "employeeDeadline": deadline};

            console.log("The employeeID from urlvalues is " + urlValues.employeeId); //Just to confirm


            // store records in object using push method
            taskArray.push(urlValues); 

            //convert to string 
            urlDataToString = JSON.stringify(taskArray, null, 2);

            // store using fs module. 
            fs.writeFileSync("taskFile.json", urlDataToString);

        }else if(req.url=="/delete"){
                // read from file 
                let fileToRead = fs.readFileSync("taskFile.json");
               // console.log("The file read contains...\n" + fileToRead.toString()); //This works

                
                // convert to json
                let taskFileString = fileToRead.toString();
                let taskFileJson = JSON.parse(taskFileString);

                // check value using iterator or loop 
                for (let i = 0; i<taskFileJson.length; i++){
                    console.log("Employee ID is " + taskFileJson[i].employeeId + 
                    "\nEmployee Task ID is " + taskFileJson[i].employeeTaskId + 
                    "\nEmployee Task is " + taskFileJson[i].employeeTask +
                    "\nDeadline is " + taskFileJson[i].employeeDeadline);
                    console.log(" "); //To give space between the objects
                    
                }
                console.log("Printing of the file content successful");

                // delete using array method's 
                let userInput = require("readline-sync");

                let numOfDeletion = 0;

                let taskIdToDelete = userInput.question("Enter the Task ID to delete: "); // To get user input from the console
                let taskIdToDeleteString = taskIdToDelete.toString(); 

                for (let i = 0; i < taskFileJson.length; i++){
                    if (taskIdToDeleteString == taskFileJson[i].employeeTaskId){
                        delete taskFileJson[i];
                        numOfDeletion++;
                        console.log("The records for task id: " + taskIdToDelete + " have been deleted!");
                        
                    }
                    
                }

                //if task id not available display error message.
                if (numOfDeletion == 0) //To give the feedback if the taskId is not found
                    {
                        console.log("The task Id " + taskIdToDelete + " is not found!");
                    }

                    
                    console.log("The updated file is " + JSON.stringify(taskFileJson));
                
                    
                // store in file using fs module. 
                let updatedFile = JSON.stringify(taskFileJson, null, 2);
                fs.writeFileSync("updatedTaskFile.json", updatedFile);
                
                   
                    
        
                 
        }else if(req.url=="/display"){
            res.setHeader("content-type", "text/html");

            
                // To read from the updated file to display  
                let fileToDisplay = fs.readFileSync("updatedTaskFile.json");
                // convert to json 
                let fileToDisplayString = fileToDisplay.toString();

                let fileToDisplayJson = JSON.parse(fileToDisplayString);
                
                //iterator loop to display the file content
                console.log("Displaying from the display url...")
                for (let i = 0; i<fileToDisplayJson.length; i++){
                    console.log(fileToDisplayJson[i]);
                }
                
                // create tableData variable using backticks 
                
                let tableData =
                    `
                    <table>
                    <tr>
                            <td>${fileToDisplayString}</td>
                    </tr>
                    </table>
                    ` ;
                    // res.write(tableData);
                  
                
                console.log("The updated file displayed successfully!");
                
                    res.end(tableData);
        }
    }
    
});

server.listen(port,()=>console.log(`Server running on port number ${port}`));