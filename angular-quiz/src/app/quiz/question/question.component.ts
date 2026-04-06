import { Component, inject } from '@angular/core';
import { AnswerComponent } from "../answer/answer.component";
import { QuizService } from '../services/quiz.service';
@Component({
  selector: 'quiz-question',
  imports: [AnswerComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
  standalone: true,
})
export class QuestionComponent {
  quizService = inject(QuizService);
}
