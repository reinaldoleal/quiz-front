import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  indexQuestion = 0;
  questions: Question[];

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe(questions => {
      this.questions = questions;
    });
  }

  next(): void {
    this.indexQuestion++;
    parent.postMessage({type: 'ais-exit', direction: 'FORWARD', url: 'ais.exit.url'}, '*');
  }

  prior(): void {
    this.indexQuestion--;
    parent.postMessage({type: 'ais-exit', direction: 'BACK', url: 'ais.exit.back.url'}, '*');
  }

  continue(): void {
    parent.postMessage({type: 'ais-exit', direction: 'CLOSE', url: 'ais.exit.close.url'}, '*');
  }

  onLinkClick(event: MatTabChangeEvent): void {
    // console.log(event.index);
  }

}
