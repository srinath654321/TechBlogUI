import { AlertDialogComponent } from './../alert-dialog/alert-dialog.component';
import { WorkExpAddDialogComponent } from './../work-exp-add-dialog/work-exp-add-dialog.component';
import { Certification } from './../certifications-add/Certification';
import { SkillExp } from './SkillExp';
import { UserPorfileEditDialogComponent } from './../user-porfile-edit-dialog/user-porfile-edit-dialog.component';
import { UserProfileEditComponent } from './../user-profile-edit/user-profile-edit.component';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { SkillsAddDialogComponent } from '../skills-add-dialog/skills-add-dialog.component';
import { CertificationsAddComponent } from '../certifications-add/certifications-add.component';
import { workExp } from '../work-exp-add-dialog/workExp';
import { Education } from '../education-details/Education';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private fb: FormBuilder, private matDialog: MatDialog, private route: ActivatedRoute, private router: Router) { }

  fullName: string;
  email: string;
  role: string;
  address: string;
  phone: string;
  sub: Subscription;
  about: string;
  skillExpArray: Array<SkillExp> = [new SkillExp("Angualr", 5)];
  certificationsArray: Array<Certification> = [new Certification("AWS", "08-12-2018", "", "http://aws.com")]
  workExpArray : Array<workExp> = [
    new workExp("Software Developer", "AMADEUS", "TUCSON", "08-12-2017", "",
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
    "Environment: Java, JDK1.8, Dropwizard, Jackson, Gson, Guice, Guava, Elastic, Log stash, kibana, HTML5, CSS3, Spring4.0, Hibernate, Spring JPA, Springboot, MySQL, Restful Web Services, Junit5, Mockito, PowerMock, GIT, Linux, Angular, Bamboo, Log4j, Maven, Gradle, RabbitMq, Jira, confluence")];

    educationArray: Array<Education> = [];

  ngOnInit() {

    this.fullName = "srinat kavuri";
    this.email = "srinath.kavuri@gmail.com"
    this.role = "Developer";
    this.address = "2000 E Roger Road Apt#I22 87719";
    this.phone = "+1 913 284 4805";
    this.about = "Experienced Application Developer with a demonstrated history of working in the information technology and services industry. Skilled in Java,Angular,Dropwizard,Spring,Hibernate,HTML,CSS,Bootstrap and Strong engineering professional graduated from University of Central Missouri.";


    this.educationArray.push(new Education("Baptla Engineering College", "07-12-2011", "05-15-2015", "Bachelors", "Mechanical Engineer", 8.5));
    this.educationArray.push(new Education("Baptla Engineering College", "07-12-2011", "05-15-2015", "Bachelors", "Mechanical Engineer", 8.5));
    
      this.router.events.subscribe( (event) => {
        if (event instanceof NavigationEnd) {
            const tree = this.router.parseUrl(this.router.url);
            if (tree.fragment) {
	              const element = document.querySelector("#" + tree.fragment);
              if (element) { 
                element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'}); 
              }
            }
        }
    });
  }

  eduDetailChange(education: Education) {
    let index = this.educationArray.indexOf(education);
    if( index == -1) {
      this.educationArray.push(education);
    }
  }

  removeWorkExp(workExperience: workExp){

    if(workExperience != undefined) {
      let dialogRef  = this.matDialog.open(AlertDialogComponent, {
        data: {
          label: "work experience"
        }
      });

      dialogRef.afterClosed().subscribe( result => {
        if (result == 'confirm') {
          console.log("deleting the work exp", workExperience)
        }
        if (result == "discard") {
          console.log("I am not doing deletion !!!!")
        }
      })
    }
  }
 
  openWorkExpAddDialog(){

    const dialogRef = this.matDialog.open(WorkExpAddDialogComponent, {
      width: '900px',
      height: '800px',
    })

    dialogRef.afterClosed().subscribe((form: FormGroup) => {

      if ( form != undefined) {
        console.log("work exp form data ", form)
        if(form.value.companyName != undefined) {
          this.workExpArray.push(new workExp(form.value.role, form.value.companyName, form.value.location, form.value.yearStarted, form.value.yearEnded, form.value.responsibilities));
      }
    }

    console.log("work exp data after dialog closed ", this.workExpArray.toString() );

    })

  }

  openWorkExpEditDialog(workExperience: workExp) {
        const dialogRef = this.matDialog.open(WorkExpAddDialogComponent, {
        width: '900px',
        height: '800px',
        data : {
          role: workExperience.role,
          companyName: workExperience.companyName,
          location: workExperience.location,
          yearStarted: workExperience.getYeatStartedDate(workExperience.yearStarted),
          yearEnded: workExperience.getYearEndedDate(workExperience.yearEnded),
          responsibilities: workExperience.responsibilities
        }
      })
    
    dialogRef.afterClosed().subscribe((form: FormGroup) =>{

      if ( form != undefined) {
        console.log("work exp form data ", form)
        if(form.value.companyName != undefined) {
          let index = this.workExpArray.indexOf(workExperience);
          this.workExpArray[index] = new workExp(form.value.role, form.value.companyName, form.value.location, form.value.yearStarted, form.value.yearEnded, form.value.responsibilities)
          //this.workExpArray.push(new workExp(form.value.role, form.value.companyName, form.value.location, form.value.yearStarted, form.value.yearEnded, form.value.responsibilities));
      }
    }

    console.log("work exp data after dialog closed ", this.workExpArray.toString() );

    })
  }


  openCertificationsAddDialog(){
    const dialogRef = this.matDialog.open(CertificationsAddComponent, {
      width: '800px',
      height: '500px'
    })

    dialogRef.afterClosed().subscribe((form: FormGroup) =>{
      if ( form != undefined) {
        if (form.value.name != undefined) {
          this.certificationsArray.push(new Certification(form.value.name, form.value.yearIssued, form.value.yearExpired, form.value.link));
        }
      }
      console.log("certifications array after dialog closed", this.certificationsArray.toString())
    })
  }

  openCertificationsEditDialog(certification: Certification){

  }

  
  removeCertification(certification : Certification) {

    if(certification != undefined) {
      let dialogRef = this.matDialog.open(AlertDialogComponent, {
        data:{
          label: "certification"
        }
      })

      dialogRef.afterClosed().subscribe( result => {
        if (result == 'confirm') {
          console.log("deleting the work exp", certification)
        }
        if (result == "discard") {
          console.log("I am not doing deletion !!!!")
        }
      })
    }

  }

  openSkillsAddDialog(){
    const dialogRef = this.matDialog.open(SkillsAddDialogComponent, {
      width: '800px',
      height: '400px',
    })

    dialogRef.afterClosed().subscribe((form: FormGroup) => {

      console.log("skills dialog data after closed", form);

      if (form != undefined) {
        if (form.value.skill != undefined && form.value.experience != undefined ) {
          this.skillExpArray.push(new SkillExp(form.value.skill, form.value.experience));
        }else if( form.value.skill != undefined && form.value.experience == undefined) {
          this.skillExpArray.push(new SkillExp(form.value.skill, 0))
        }

        console.log("skill exp array values ", this.skillExpArray.toString())
      }
    })
  }

  removeSkill(skillexp: SkillExp) {

    if (skillexp != undefined) {
      const dialogRef = this.matDialog.open(AlertDialogComponent, {
        data: {
          label: "Skill"
        }
      })

      dialogRef.afterClosed().subscribe(result => {
        if(result  == "confirm") {
          console.log("deleting skill")
        }

        if(result == "discard") {
          console.log("I am not deleting skill  !!!!!")
        }
      })
    }
  }

  openAboutEditDialog(){
    const dialogRef = this.matDialog.open(UserPorfileEditDialogComponent, {
      width: '800px',
      height: '480px',
      data :{
        about: this.about
      }
    });

    dialogRef.afterClosed().subscribe((form: FormGroup) => {

      console.log("about dialog after closed", form);
      
      if (form != undefined) {
        this.about = form.value.about;
      }

    })


  }

  openContactEditDialog(){
    const dialogRef = this.matDialog.open(UserProfileEditComponent, {
      width : '800px',
      height: '450px',
      data : {
        fullName: this.fullName,
        email: this.email,
        role: this.role,
        address: this.address,
        phone: this.phone
      }

    });
    
    this.sub = dialogRef.afterClosed().subscribe((form: FormGroup) =>{
      console.log("dialog after closed" , form);
      if(form != undefined) {
        this.fullName = form.value.fullName;
        this.email = form.value.email;
        this.role = form.value.role;
        this.address = form.value.address;
        this.phone = form.value.phone;
      }
    })
  }


}
