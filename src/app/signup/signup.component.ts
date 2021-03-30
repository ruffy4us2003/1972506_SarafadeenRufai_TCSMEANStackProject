import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  signUpRef = new FormGroup({
    fName: new FormControl(),
    lName: new FormControl(),
    user2: new FormControl(),
    pass2: new FormControl()
  });

  signUpUser(){
    console.log(this.signUpRef.value);
  }

  //To navigate back to the main page
  homePage(){
    this.router.navigate(["login"]);

  } 

}

