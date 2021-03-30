import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Create a Reference for the Model Driven Form
  loginRef = new FormGroup({
    user: new FormControl(),
    pass: new FormControl()

  });

  //Create a logic for the submit button
  checkUser() {
    console.log(this.loginRef.value);
    this.SaveUserDetails();
    this.validateUserDetails();
    
  }
userArray:Array<any> = []; //To store users' login details

//Store User login details
  SaveUserDetails(){
    
       sessionStorage.setItem("loginInfo", this.loginRef.value);

  }
 msg:string = ""; //Login Message to display to the users
  //To validate user's login detail
  validateUserDetails(){
    var retrieve = sessionStorage.getItem("loginInfo");

    console.log(retrieve); //To check the retrieve
    if (retrieve == this.loginRef.value){
      this.msg = "Login is Successful";
    }
    else{
      this.msg = "Login failure, please try again!";
    }
  }
}
