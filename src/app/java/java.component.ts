import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Topic {

  constructor(public topicHeader: string, public topicDesc: string){

  }
}

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {

  topics: Topic[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.topics = [
      new Topic("Java Interview Questions", "Top 50 questions asked in Java interview"),
      new Topic("Java Code Samples", "Java code samples to explain java concepts"),
      new Topic("Java Articles", "Articles based on how to build scalable infrastrucre using java"),
      new Topic("Explore Latest Java Releases", "Explore latest Java release news from oracle"),
      new Topic("Share Java Interview Question", "Post interesting question asked in your java interview"),
      new Topic("Java love", "love java"),
      new Topic("Java fuure", "what is the future of java"),
      new Topic("Java laid", "what is the "),
      new Topic("Java old concepts", "old java concepts"),
      new Topic("Java Evolution", "How java evolution started"),
      new Topic("Java made easy", "steps to learn java")
    ]
  }

  onCardClick(topic: Topic) {
    console.log("selected card ", topic.topicHeader);
    if(topic.topicHeader == "Java Interview Questions") {
      this.router.navigate(['java', 'javaInterviewQuestions'])
    }else if(topic.topicHeader == "Share Java Interview Question") {
      this.router.navigate(['java', 'shareJavaInterviewQuestion'])
    }
  }


}
