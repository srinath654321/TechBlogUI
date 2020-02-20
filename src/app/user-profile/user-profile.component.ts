import { SkillExpEvent } from './../skill/SkillExpEvent';
import { CertificationEvent } from './../certification/CertificationEvent';
import { CertificationDialogComponent } from './../certification-dialog/certification-dialog.component';
import { UserAboutEditDialogComponent } from './../user-about-edit-dialog/user-about-edit-dialog.component';
import { UserContactEditDialogComponent } from './../user-contact-edit-dialog/user-contact-edit-dialog.component';
import { UserService } from './../user.service';
import { EducationDialogComponent } from './../education-dialog/education-dialog.component';
import { WorkExpEvent } from './../work-experience/WorkExpEvent';
import { WorkExp } from './../work-experience/WorKExp';
import { EducationEvent } from './../education-details/EducationEvent';
import { WorkExpAddDialogComponent } from './../work-exp-add-dialog/work-exp-add-dialog.component';
import { MatDialog} from '@angular/material/dialog';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { Education } from '../education-details/Education';
import { Certification } from '../certification/Certification';
import { SkillExp } from '../skill/SkillExp';
import { SkillDialogComponent } from '../skill-dialog/skill-dialog.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private fb: FormBuilder, private matDialog: MatDialog, 
  private router: Router, private userService: UserService) { }

  imageLocation :string;
  fullName: string;
  email: string;
  role: string;
  address: string;
  phone: string;
  sub: Subscription;
  about: string;
  workExpArray: Array<WorkExp>;
  skillExpArray: Array<SkillExp>;
  certificationArray: Array<Certification>;
  educationArray: Array<Education> = [];
  show: boolean = false;

  ngOnInit() {

    this.imageLocation = "assets/images/SRINATH.jpg";
    this.fullName = "srinat kavuri";
    this.email = "srinath.kavuri@gmail.com"
    this.role = "Developer";
    this.address = "2000 E Roger Road Apt#I22 87719";
    this.phone = "+1 913 284 4805";
    this.about = "Experienced Application Developer with a demonstrated history of working in the information technology and services industry. Skilled in Java,Angular,Dropwizard,Spring,Hibernate,HTML,CSS,Bootstrap and Strong engineering professional graduated from University of Central Missouri.";
    
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


    this.workExpArray = this.userService.getWorkExperiences();
    this.certificationArray =  this.userService.getCertifications();
    this.skillExpArray = this.userService.getSkillsInfo();
    this.educationArray = this.userService.getEduDetails();
  }


  fireWorkExpEvent(workExpEvent: WorkExpEvent) {
    console.log("work exp event firing started ",  workExpEvent);
    if (workExpEvent.eventType == "ADD") {
      this.workExpArray.push(workExpEvent.newWorkExp);
    }else if (workExpEvent.eventType == "EDIT") {
      let index = this.workExpArray.indexOf(workExpEvent.oldWorkExp);
      this.workExpArray[index] = workExpEvent.newWorkExp;
    }else if (workExpEvent.eventType = "DELETE") {
      this.workExpArray = this.workExpArray.filter(workExp => workExp != workExpEvent.newWorkExp);
    }
  }


  fireEducationEvent(eduEvent: EducationEvent) {
    console.log("education event fire started " ,eduEvent);
    if (eduEvent.eventType == "ADD") {
      this.educationArray.push(eduEvent.newEducation);
    }else if(eduEvent.eventType == "DELETE") {
      this.educationArray = this.educationArray.filter(edu => edu != eduEvent.newEducation);
    }else if( eduEvent.eventType = "EDIT") {
      let index = this.educationArray.indexOf(eduEvent.oldEducation);
      this.educationArray[index] = eduEvent.newEducation;
    }
  }

  fireCertificationEvent(certificationEvent: CertificationEvent) {
    console.log("certification event fire started " , certificationEvent);
    if (certificationEvent.eventType == "ADD") {
      this.certificationArray.push(certificationEvent.newCertification);
    }else if(certificationEvent.eventType == "DELETE") {
      this.certificationArray = this.certificationArray.filter(certi => certi != certificationEvent.newCertification);
    }else if( certificationEvent.eventType = "EDIT") {
      let index = this.certificationArray.indexOf(certificationEvent.oldCertification);
      this.certificationArray[index] = certificationEvent.newCertification;
    }
  }

  fireSkillExpEvent(skillExpEvent: SkillExpEvent) {
    console.log("certification event fire started " , skillExpEvent);
    if (skillExpEvent.eventType == "ADD") {
      this.skillExpArray.push(skillExpEvent.newSkillExp);
    }else if(skillExpEvent.eventType == "DELETE") {
      this.skillExpArray = this.skillExpArray.filter(skill => skill != skillExpEvent.newSkillExp);
    }else if( skillExpEvent.eventType = "EDIT") {
      let index = this.skillExpArray.indexOf(skillExpEvent.oldSkillExp);
      this.skillExpArray[index] = skillExpEvent.newSkillExp;
    }
  }

 
  openWorkExpAddDialog() {
    const dialogRef = this.matDialog.open(WorkExpAddDialogComponent, {
      width: '900px',
      height: '800px',
    })

    dialogRef.afterClosed().subscribe((form: FormGroup) => {

      if ( form != undefined) {
        console.log("work exp form data ", form)
        if(form.value.companyName != undefined) {
          this.workExpArray.push(new WorkExp(form.value.role, form.value.companyName, form.value.location, 
            form.value.yearStarted, form.value.yearEnded, form.value.responsibilities, form.value.stillWorking));
      }
    }

    console.log("work exp data after dialog closed ", this.workExpArray.toString() );

    })

  }

  openEducationAddDialog() {
    const dialogRef  = this.matDialog.open(EducationDialogComponent, {
      width: '800px',
      height: '500px'
    })

    dialogRef.afterClosed().subscribe((form : FormGroup) => {

      if ( form != undefined) {
        this.educationArray.push(new Education (form.value.schoolName, form.value.yearStarted, form.value.yearEnded, form.value.typeOfDegree,
          form.value.courseName, form.value.gpa, form.value.stillStudying));
      }

      console.log("education detils array after dialog closed", this.educationArray.toString())
    })
  }

  openCertificationsAddDialog() {
    const dialogRef = this.matDialog.open(CertificationDialogComponent, {
      width: '800px',
      height: '500px'
    })

    dialogRef.afterClosed().subscribe((form: FormGroup) =>{
      if ( form != undefined) {
        if (form.value.name != undefined) {
          this.certificationArray.push(new Certification(form.value.name, form.value.yearIssued, 
            form.value.yearExpired, form.value.link, form.value.isNeverExpires));
        }
      }
      console.log("certifications array after dialog closed", this.certificationArray.toString())
    })
  }

  openSkillAddDialog() {
    const dialogRef = this.matDialog.open(SkillDialogComponent, {
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

  openAboutEditDialog() {
    const dialogRef = this.matDialog.open(UserAboutEditDialogComponent, {
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

  openContactEditDialog() {
    const dialogRef = this.matDialog.open(UserContactEditDialogComponent, {
      width : '800px',
      height: '600px',
      data : {
        imageLocation: this.imageLocation,
        fullName: this.fullName,
        email: this.email,
        role: this.role,
        address: this.address,
        phone: this.phone
      }

    });
    
    this.sub = dialogRef.afterClosed().subscribe((form: FormGroup) =>{
      console.log("dialog after closed" , form.value.imageLocation);
      if(form != undefined) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageLocation = reader.result as string;
        }
        reader.readAsDataURL(form.value.imageLocation)
        this.fullName = form.value.fullName;
        this.email = form.value.email;
        this.role = form.value.role;
        this.address = form.value.address;
        this.phone = form.value.phone;
      }
    })
  }


}
