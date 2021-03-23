
var cartData = [];

function inSessionStorage(){
    localStorage.setItem("cartInfo", JSON.stringify(cartData));
}

function sessionRetrieve() {
    var obj = JSON.parse(localStorage.getItem("cartInfo"));
    console.log(obj);
}


function onCartAdding(){
    var data = readFromCart();
    insertNewRecords(data);
}

function readFromCart(){

    var obj = {};
     obj = document.getElementById("name").innerHTML;
    obj = document.getElementById("price").innerHTML;
    return obj;

}

//function insertNewRecords()

