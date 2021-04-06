import { Component, OnInit } from '@angular/core';
import { TASKS } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

 userId ="";
 userName = "";
 userTask = "";
 userDeadline = "";
 

  constructor( public taskServices: TasksService) { }

  ngOnInit(): void {
  }
   retrieve:any = "";
  storeTasks(tasksRef: any){
  
    console.log(tasksRef);
    this.taskServices.saveTasksToServer(tasksRef);
    let obj = sessionStorage.setItem("info", tasksRef)
    this.retrieveTaskData();
    
    
    this.userId = tasksRef.id;
    this.userName = tasksRef.name;
    this.userTask = tasksRef.task;
    this.userTask = tasksRef.date;
  
  }
   
  
  retrieveTaskData() {
    this.retrieve = sessionStorage.getItem("info");

   }
  
  

}
