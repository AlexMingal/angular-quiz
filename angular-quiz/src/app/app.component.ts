import { Component, signal } from '@angular/core';
import { QuizComponent } from "./quiz/quiz.component";

@Component({
  selector: 'app-root',
  imports: [QuizComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
