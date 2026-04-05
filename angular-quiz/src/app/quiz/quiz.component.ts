import { Component, Inject, inject } from '@angular/core';
import { AnswerComponent } from './answer/answer.component';
import { QuestionComponent } from './question/question.component';
import { QuizService } from './services/quiz.service';

@Component({
  selector: 'quiz',
  imports: [QuestionComponent, AnswerComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
  standalone: true,
})
export class QuizComponent {  
  quizService = inject(QuizService);
}
