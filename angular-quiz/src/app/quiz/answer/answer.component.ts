import { Component, signal, computed, inject, input } from '@angular/core';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'quiz-answer',
  templateUrl: './answer.component.html',
  styleUrl: './answer.component.css',
  standalone: true,
})
export class AnswerComponent {
  answerText = input.required<string>();
  answerIndex = input.required<number>();
  quizService = inject(QuizService);

  isCorrectAnswer = computed(()=> !!this.quizService.currentAnswer() 
  && this.answerText() === this.quizService.currentQuestion().correctAnswer,) 

  isWrongAnswer = computed(()=> this.answerText() === this.quizService.currentAnswer() 
  && this.quizService.currentAnswer() !== this.quizService.currentQuestion().correctAnswer);

  letterMapping = ['A', 'B', 'C', 'D'];
}
