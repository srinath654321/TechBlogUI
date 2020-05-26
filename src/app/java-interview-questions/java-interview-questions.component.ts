import { InterviewQuestion } from './../interview-question';
import { EducationDetailsService} from './../education-details.service';
import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

export class QuestionAnswerReport {
  question: string;
  questionAnswer: string;
  userAnswer : string;
  isvalid : boolean;

  constructor(question: string, questionAnswer: string, userAnswer: string, isvalid: boolean) {
    this.question = question;
    this.questionAnswer = questionAnswer;
    this.userAnswer = userAnswer;
    this.isvalid = isvalid;
  }
}

@Component({
  selector: 'app-java-interview-questions',
  templateUrl: './java-interview-questions.component.html',
  styleUrls: ['./java-interview-questions.component.css']
})
export class JavaInterviewQuestionsComponent implements OnInit {

  interViewQuestionArray : InterviewQuestion[];
  firstQuestion : InterviewQuestion;
  numberOfQuestions: number;
  questionTracker: number = 0;
  issubmitted: boolean;

  questionAnswerReport : QuestionAnswerReport[] = [];

  selectedOption: string;

  questionAnswerMap = new Map<string, string>();

  constructor(private router: Router, private eduservice: EducationDetailsService) {}

  ngOnInit() {
    this.eduservice.getQuestions().subscribe((data:any) => {
      console.log(data)
      this.interViewQuestionArray = data;
      console.log(this.interViewQuestionArray);
      this.firstQuestion = this.interViewQuestionArray[0];
      this.numberOfQuestions = this.interViewQuestionArray.length;
    });
  }

  onBack() {
    this.router.navigate(['java']);
  }

  onNext() {
    if (this.selectedOption != undefined) {
      console.log(this.questionTracker, this.selectedOption);
      this.questionAnswerMap.set(this.firstQuestion.qid, this.selectedOption);
    }
    console.log(this.interViewQuestionArray);
    this.questionTracker = this.questionTracker + 1;
    this.firstQuestion = this.interViewQuestionArray[this.questionTracker];
    let userAnswer = this.questionAnswerMap.get(this.firstQuestion.qid)
    if (userAnswer != undefined) {
      this.selectedOption = userAnswer;
    }
    console.log(this.firstQuestion);
  }

  onQuestionBack() {
    this.questionTracker = this.questionTracker - 1;
    this.firstQuestion =  this.interViewQuestionArray[this.questionTracker]
    let userAnswer = this.questionAnswerMap.get(this.firstQuestion.qid);
    if (userAnswer != undefined) {
      this.selectedOption = userAnswer;
    }
    if (this.selectedOption != undefined) {
      this.questionAnswerMap.set(this.firstQuestion.qid, this.selectedOption);
    }
  }

  onsubmit() {
    if (this.selectedOption != undefined) {
      this.questionAnswerMap.set(this.firstQuestion.qid, this.selectedOption);
    }

    this.issubmitted = true;
    console.log(this.questionAnswerMap);

    this.interViewQuestionArray.forEach(question => {
      let userAnswer = this.questionAnswerMap.get(question.qid);
      if (userAnswer === question.answer) {
        this.questionAnswerReport.push(new QuestionAnswerReport(question.question,
          question.answer, userAnswer, true));
      } else {
        this.questionAnswerReport.push(new QuestionAnswerReport(question.question,
          question.answer, userAnswer, false));
      }
    })

    console.log(this.questionAnswerReport);
  }
}
