import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-java-interview-questions',
  templateUrl: './java-interview-questions.component.html',
  styleUrls: ['./java-interview-questions.component.css']
})
export class JavaInterviewQuestionsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['java']);
  }
}
