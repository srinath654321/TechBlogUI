import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-share-interview-question',
  templateUrl: './share-interview-question.component.html',
  styleUrls: ['./share-interview-question.component.css']
})
export class ShareInterviewQuestionComponent implements OnInit {

  shareJavaQuestion: FormGroup;
  company: string;
  question: string;
  answer: string;
  topic: string;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.topic = params['topic'];
      console.log("query param", params)
    })
    
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
