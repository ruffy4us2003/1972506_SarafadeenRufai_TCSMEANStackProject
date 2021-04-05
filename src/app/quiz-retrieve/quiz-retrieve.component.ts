import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-retrieve',
  templateUrl: './quiz-retrieve.component.html',
  styleUrls: ['./quiz-retrieve.component.css']
})
export class QuizRetrieveComponent implements OnInit {

  quizzes:Array<Quiz> = [];
  //Declare a variable for the increment
  currentQuiz = 0;
  

  constructor(public quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.loadQuizQuestions().subscribe(result=>this.quizzes=result);
  }

  radioChangeHandler(){
    //this.quizzes = event.target.value;
    this.currentQuiz++;
  }

  checkAnswer(){
    
  }

//correctAnswers(){



//}
  

}
