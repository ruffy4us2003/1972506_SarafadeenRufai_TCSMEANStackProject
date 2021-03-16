var clientsBudget =[]; //To store data from the user

function storeInSession() {
    sessionStorage.setItem("budgetInfo", clientsBudget)
}

function retrieveFromSession() {
    var obj = sessionStorage.getItem("budgetInfo");
    console.log(obj);
}

function budgetFunction(){
    // var name = document.write("Please enter your name: "); //This is just a test to break the code!
    // alert("How are you, " + name + "?" );
    var userInput = readUserInput(); //To read user's data
    insertNewRecord(userInput);
    clientsBudget.push(userInput);      //in empObj
    clearData();
    
}

function readUserInput() {
    var obj = {}    // empty object
    obj.cname = document.getElementById("cname").value;
    obj.pname = document.getElementById("pname").value;
    obj.budget = document.getElementById("budget");
    console.log(obj);
    return obj; 
}
function insertNewRecord(userInput){
 var table = document.getElementById("annualbudget")
 var body = table.getElementsByTagName("tbody")[0];
 var newRow = body.insertRow(body.length);  // The table row is  created 

 var cell1 = newRow.insertCell(0);          // cell created 
 cell1.innerHTML=userInput.cname;                 // value placed 

 var cell2 = newRow.insertCell(1);          // cell created 
 cell2.innerHTML=userInput.pname;            // value placed

 var cell3 = newRow.insertCell(2)
 cell3.innerHTML=userInput.budget

}

function clearData() {
document.getElementById("cname").value="";
document.getElementById("pname").value="";
document.getElementById("budget").value="";
}


