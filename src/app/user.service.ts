import { Certification } from './certification/Certification';
import { SkillExp } from './skill/SkillExp';
import { WorkExp } from './work-experience/WorKExp';
import { Injectable } from '@angular/core';
import { Education } from './education-details/Education';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  

  getSkillsInfo(): Array<SkillExp> {
    return [new SkillExp("JAVA", 5), new SkillExp("Angular", 2)];
  }

  getEduDetails(): Array<Education> {
    
    return [new Education("Baptla Engineering College", new Date("07-12-2011"), new Date("05-15-2015"), "Bachelors", "Mechanical Engineer", 8.5, false),
    new Education("Baptla Engineering College", new Date("07-12-2011"), new Date("05-15-2015"), "Bachelors", "Mechanical Engineer", 8.5, false)]
  }

  getCertifications(): Array<Certification> {
    return [new Certification("AWS", new Date("08-12-2018"), undefined, "http://aws.com", true)]
  }

  getWorkExperiences() : Array<WorkExp>{
    return [
      new WorkExp("Software Developer", "AMADEUS", "TUCSON", new Date("08/1/2017"), undefined,
      "Worked on developing the code using Java8 features.\n" +
      "Worked with SpringBoot and SpringJPA for the development of internal backend RESTAPI.\n" +
      "Worked with Hibernate implementation of SpringJPA for better persistence.\n" +
      "Worked on developing the Rest based web services using JAX-RS API ad Jackson library.\n" +
      "Worked on developing application communicates with SOAP webservices using Apace HttpClinet.\n" +
      "Worked on developing the client side application using Angular.\n" +
      "Worked with Bootstrap and Angular Material for more responsive clientSide application.\n" +
      "Developed more configurable Java application using DropWizard framework and RabbitMq.\n" +
      "Created dashboards in Graphana based on generated metrics from application.\n" +
      "Implemented Metrics and Health Checks in the Java application to make it more consistent.\n" +
      "Worked on writing the unit tests using JUNIT and mocking the objects using MOCKITO and assertions using HamCrest.\n" +
      "Worked on migrating application from APL language to Java.\n" +
      "Worked with both MAVEN and GRADLE for build purpose.\n" +
      "Worked with Ansible for better configuration management.\n" +
      "Worked with Bamboo for CI/CD purpose.\n" +
      "Worked with JIRA for project management.\n" +
      "Extensively used GIT for version controlling and regularly pushed code to BitBucket.\n" +
      "Wrote technical and workflow documents which are used for reference by the development and operations teams.\n" +
      "Worked with PowerShell to automate the SQL Scripts execution on the server.\n" +
      "Working in on call to support production issues.\n" +
      "\n" +
      "Environment: Java, JDK1.8, Dropwizard, Jackson, Gson, Guice, Guava, Elastic, Log stash, kibana, HTML5, CSS3, Spring4.0, Hibernate, Spring JPA, Springboot, MySQL, Restful Web Services, Junit5, Mockito, PowerMock, GIT, Linux, Angular, Bamboo, Log4j, Maven, Gradle, RabbitMq, Jira, confluence", true)];
  }
}
