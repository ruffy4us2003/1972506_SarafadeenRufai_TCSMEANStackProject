import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(public http:HttpClient) { }

  //Create a class to load the Quiz
  loadQuizQuestions(): Observable<Quiz[]>{
    return this.http.get<Quiz[]>("/assets/quiz2.json");

  }
}
