import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { TASKS } from './tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(public http: HttpClient) { }

  saveTasksToServer(tasks:any)
  {
    this.http.post("http://localhost:3000/to-do-tasks", tasks)
    .subscribe(result=>console.log(result), error=>console.log(error));
    
    
  }
  loadJsonData():Observable<TASKS[]>{
    return this.http.get<TASKS[]>("http://localhost:3000/to-do-tasks");
  }
}
