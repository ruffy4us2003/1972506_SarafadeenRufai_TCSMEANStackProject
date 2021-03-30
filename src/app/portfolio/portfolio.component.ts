import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
     
  username = prompt("What is your Username? ");

  cName:any="";
  phoneNum: any="";

  saveDetails(item1:any, item2:any){
    //this.cName = name;
    //this.phoneNum = phone;

  }




}
