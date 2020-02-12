import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share-java-interview-question',
  templateUrl: './share-java-interview-question.component.html',
  styleUrls: ['./share-java-interview-question.component.css']
})
export class ShareJavaInterviewQuestionComponent implements OnInit {

  shareJavaQuestion: FormGroup;
  company: string;
  question: string;
  answer: string;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.shareJavaQuestion = this.fb.group({

      company : [this.company],
      question: [this.question],
      answer: [this.answer, [
        Validators.maxLength(400)
      ]]

      })
  }

  onBack(){
    this.router.navigate(['java']);
  }

  onClick(){
    console.log("company " , this.shareJavaQuestion.get('company').value);
    console.log("question", this.shareJavaQuestion.get("question").value);
    console.log("answer", this.shareJavaQuestion.get("answer").value);
    this.shareJavaQuestion.reset();
  }
}
