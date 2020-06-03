import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

export class Topic {

  constructor(public topicHeader: string, public topicDesc: string, public topicName ?: string){

  }
}

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private router: Router) { }

  topic: string;
  topics: Topic[] = [];
  routeSub: Subscription;

  ngOnInit(): void {

   this.routeSub =  this.route.queryParams.subscribe(params => {
      this.topic = params['topic'];

      console.log("topic showing now is  ", this.topic);

      if (this.topic.toLowerCase() === 'java') {
        this.topics = [
          new Topic("Interview Questions", "Top 50 questions asked in Java interview", this.topic),
          new Topic("Code Samples", "Java code samples to explain java concepts", this.topic),
          new Topic("Articles", "Articles based on how to build scalable infrastrucre using java"),
          new Topic("Explore Latest Java Releases", "Explore latest Java release news from oracle"),
        ]
      } else  if (this.topic.toLowerCase() === 'sql') {
        this.topics = [new Topic("Interview Questions", "Top 50 questions asked in Sql interview", this.topic),
        new Topic("Articles", "Articles based on how to build scalable infrastrucre using sql", this.topic)];
      } else {
        this.topics = [];
      }
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  onCardClick(topic: Topic) {
    console.log("selected topic" , topic);

    if (topic.topicName.toLowerCase() == "java") {
      console.log(topic.topicName.toLowerCase())
      if (topic.topicHeader === "Interview Questions") {
        console.log("routing started")
        this.router.navigate(['java', 'javaInterviewQuestions'])
      } else if (topic.topicHeader == "Share Java Interview Question") {
        this.router.navigate(['java', 'shareJavaInterviewQuestion'])
      }
    }
  }

}
