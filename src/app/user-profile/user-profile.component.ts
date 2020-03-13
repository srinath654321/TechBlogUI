import { ContactEditEvent } from './../contact/ContactEditEvent';
import { Contact } from './../contact/Contact';
import { User } from './User';
import { SkillExpEvent } from './../skill/SkillExpEvent';
import { CertificationEvent } from './../certification/CertificationEvent';
import { CertificationDialogComponent } from './../certification-dialog/certification-dialog.component';
import { UserAboutEditDialogComponent } from './../user-about-edit-dialog/user-about-edit-dialog.component';
import { UserService } from './../user.service';
import { EducationDialogComponent } from './../education-dialog/education-dialog.component';
import { WorkExpEvent } from './../work-experience/WorkExpEvent';
import { WorkExp } from './../work-experience/WorKExp';
import { EducationEvent } from './../education-details/EducationEvent';
import { WorkExpAddDialogComponent } from './../work-exp-add-dialog/work-exp-add-dialog.component';
import { MatDialog} from '@angular/material/dialog';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { Education } from '../education-details/Education';
import { Certification } from '../certification/Certification';
import { SkillExp } from '../skill/SkillExp';
import { SkillDialogComponent } from '../skill-dialog/skill-dialog.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Util } from './Util';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private fb: FormBuilder, private matDialog: MatDialog, 
  private router: Router, private userService: UserService, private util: Util) { }

  contact: Contact;
  about: string;
  workExpArray: Array<WorkExp>= [];
  skillExpArray: Array<SkillExp> = [];
  certificationArray : Array<Certification> = [];
  educationArray: Array<Education> = [];
  user: User;
  show: boolean = false;
  imageData: string = "assets/images/SRINATH.jpg";
  contactMode: any;
  skillMode: any;
  certificationMode: any;
  workExpMode: any;
  summaryMode: any;
  educationMode: any;
  userId: string;

  ngOnInit() {
    
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

    this.userService.getUser().subscribe((data : User) => {
      console.log("user data", data)
      this.user = data;
      this.userId = data.userId;
      this.about = data.summary;
      this.contact = data.contact;

      if (data.certificationList == undefined) {
        this.certificationArray = []
      }else {
        this.certificationArray = data.certificationList;
      }

      if (data.workExperienceList == undefined) {
        this.workExpArray =  []
      } else {
        this.workExpArray = data.workExperienceList;
      }

      if (data.skillList == undefined) {
        this.skillExpArray = [];
      } else {
        this.skillExpArray = data.skillList;
      }

      if (data.educationList == undefined) {
        this.educationArray = [];
      } else {
        this.educationArray = data.educationList;
      }
    },

    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("client side error");
      }else {
        console.log("server side error");
      }
    }
    
    
    )
  }

  fireContactEditEvent(contactEditEvent: ContactEditEvent) {
    console.log("contact event started ", contactEditEvent);
    //this.contact = ContactEditEvent;
    this.user.contact = contactEditEvent.newContact;
    this.contact = contactEditEvent.newContact;
    this.contactMode = "query";
    this.userService.saveUser(this.user).subscribe((data: User) => {
      this.contactMode = "determinate";
      this.contact = data.contact;
      console.log("contact information saved", data)
    },
    (err: HttpErrorResponse) => {
      this.contactMode = "indeterminate";
      this.util.openSnackbar("contact information is not saved please retry");
      this.contact = contactEditEvent.oldContact;
      if (err.error instanceof Error) {
        console.log("client side error");
      }else {
        console.log("server side error");
      }
    }

    
    );
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
      let oldSummary = this.about;
      console.log("old summary", oldSummary);
      if (form != undefined) {
        this.about = form.value.about;
        this.user.summary = this.about;
        this.summaryMode = "query";
        this.userService.saveSummary(this.user).subscribe((data: User) => {
          this.summaryMode = "determinate";
          this.about = data.summary;
        },

        (err: HttpErrorResponse) => {
          this.summaryMode = "indeterminate";
          this.util.openSnackbar("summary is not saved please retry");
          this.about = oldSummary;
          if (err.error instanceof Error) {
            console.log("client side error");
          }else {
            console.log("server side error");
          }
        }
        
        )
      }

    })
  }


  fireWorkExpEvent(workExpEvent: WorkExpEvent) {
    console.log("work exp event firing started ",  workExpEvent);
    if (workExpEvent.eventType == "ADD") {
      this.workExpArray.push(workExpEvent.newWorkExp);
    }else if (workExpEvent.eventType == "EDIT") {
      let index = this.workExpArray.indexOf(workExpEvent.oldWorkExp);
      this.workExpArray[index] = workExpEvent.newWorkExp;
      this.saveWorkExp(workExpEvent.oldWorkExp, this.workExpArray);
    }else if (workExpEvent.eventType = "DELETE") {
      this.workExpArray = this.workExpArray.filter(workExp => workExp != workExpEvent.newWorkExp);
      this.saveWorkExp(workExpEvent.oldWorkExp, this.workExpArray);
    }
  }


  fireEducationEvent(eduEvent: EducationEvent) {
    console.log("education event fire started " ,eduEvent);
    if (eduEvent.eventType == "ADD") {
      this.educationArray.push(eduEvent.newEducation);
    }else if(eduEvent.eventType == "DELETE") {
      this.educationArray = this.educationArray.filter(edu => edu != eduEvent.newEducation);
      this.saveEducation(undefined, this.educationArray);
    }else if( eduEvent.eventType = "EDIT") {
      let index = this.educationArray.indexOf(eduEvent.oldEducation);
      this.educationArray[index] = eduEvent.newEducation;
      this.saveEducation(undefined, this.educationArray);
    }
  }

  fireCertificationEvent(certificationEvent: CertificationEvent) {
    console.log("certification event fire started " , certificationEvent);
    if(certificationEvent.eventType == "DELETE") {
      this.certificationArray = this.certificationArray.filter(certi => certi != certificationEvent.newCertification);
      this.saveCertificate(undefined, this.certificationArray);
    }else if( certificationEvent.eventType = "EDIT") {
      let index = this.certificationArray.indexOf(certificationEvent.oldCertification);
      this.certificationArray[index] = certificationEvent.newCertification;
      this.saveCertificate(undefined, this.certificationArray);
    }
  }

  fireSkillExpEvent(skillExpEvent: SkillExpEvent) {
    console.log("certification event fire started " , skillExpEvent);
    if (skillExpEvent.eventType == "ADD") {
      this.skillExpArray.push(skillExpEvent.newSkillExp);
    }else if(skillExpEvent.eventType == "DELETE") {
      this.skillExpArray = this.skillExpArray.filter(skill => skill != skillExpEvent.newSkillExp);
      this.saveSkill(undefined, this.skillExpArray, skillExpEvent, true);
    }else if( skillExpEvent.eventType = "EDIT") {
      let index = this.skillExpArray.indexOf(skillExpEvent.oldSkillExp);
      this.skillExpArray[index] = skillExpEvent.newSkillExp;
      this.saveSkill(undefined, this.skillExpArray, skillExpEvent, true);
    }
  }

  undoSkillExpEvent(skillExpEvent: SkillExpEvent) {

    if (skillExpEvent.eventType == "EDIT") {
      let index = this.skillExpArray.indexOf(skillExpEvent.newSkillExp);
      this.skillExpArray[index] = skillExpEvent.oldSkillExp;
    } else if (skillExpEvent.eventType == "DELETE") {
      this.skillExpArray.push(skillExpEvent.newSkillExp);
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
          let workExp = new WorkExp(form.value.role, form.value.companyName, form.value.location, 
            form.value.yearStarted, form.value.yearEnded, form.value.responsibilities, form.value.stillWorking);
            console.log("workexp object ", workExp)
            this.saveWorkExp(workExp, this.workExpArray);
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
    console.log(this.certificationArray);
    const dialogRef = this.matDialog.open(CertificationDialogComponent, {
      width: '800px',
      height: '500px'
    })

    dialogRef.afterClosed().subscribe((form: FormGroup) =>{
      console.log(this.certificationArray);
      if ( form != undefined) {
        if (form.value.name != undefined) {
            let certificate = new Certification(form.value.name, form.value.yearIssued, 
              form.value.yearExpired, form.value.link, form.value.isNeverExpires);
            this.saveCertificate(certificate, this.certificationArray);     
        }
      }
      console.log("certifications array after dialog closed", this.certificationArray.toString())
    })
  }

  saveCertificate(certificate: Certification, certificationArray : Array<Certification>) {
    if (certificate != undefined) {
      this.certificationArray.push(certificate);
    }
    if (this.user.userId != undefined) {
      this.user.certificationList = this.certificationArray;
    }
    console.log("user objec before calling service", this.user)
    this.certificationMode = "query";
    this.userService.saveCertificate(this.user).subscribe((data: User) => {
      console.log("user saved", data)
      this.certificationMode = "determinate";
      this.certificationArray = data.certificationList;
    },

    (err: HttpErrorResponse) => {
      this.certificationMode = "indeterminate";
      this.certificationArray = this.certificationArray.filter(certi => certi != certificate);
      if (this.user.certificationList != undefined) {
        this.user.certificationList = this.certificationArray;
      }
      console.log("user object after failure", this.user);
      this.util.openSnackbar("certificate data is not saved please retry");
      if (err.error instanceof Error) {
        console.log("client side error");
      }else {
        console.log("server side error");
      }
    }
    
    )
  }

  saveEducation(education: Education, educationArray : Array<Education>) {
    if (education != undefined) {
      this.educationArray.push(education);
    }
    if (this.user.educationList != undefined && this.user.userId != undefined) {
      this.user.educationList = this.educationArray;
    }
    console.log("user objec before calling service", this.user)
    this.educationMode = "query";
    this.userService.saveEducation(this.user).subscribe((data: User) => {
      console.log("user saved", data)
      this.educationMode = "determinate";
      this.educationArray = data.educationList;
    },

    (err: HttpErrorResponse) => {
      this.educationMode = "indeterminate";
      this.educationArray = this.educationArray.filter(edu => edu != education);
      if (this.user.educationList != undefined) {
        this.user.educationList = this.educationArray;
      }
      console.log("user object after failure", this.user);
      this.util.openSnackbar("education data is not saved please retry");
      if (err.error instanceof Error) {
        console.log("client side error");
      }else {
        console.log("server side error");
      }
    }
    
    )
  }


  saveWorkExp(workExp: WorkExp , workExpArray: Array<WorkExp>) {
    if (workExp != undefined) {
      this.workExpArray.push(workExp);
      console.log("pushed to workexp array ", this.workExpArray);
    }

    if (this.user.userId != undefined) {
      this.user.workExperienceList = this.workExpArray;
    }
    console.log("user objec before calling service", this.user)
    this.workExpMode = "query";
    this.userService.saveWorkExp(this.user).subscribe((data: User) => {
      console.log("user saved", data)
      this.workExpMode = "determinate";
      this.workExpArray = data.workExperienceList;
    },

    (err: HttpErrorResponse) => {
      this.workExpMode = "indeterminate";
      this.workExpArray = this.workExpArray.filter(workExp => workExp != workExp);
      if (this.user.workExperienceList != undefined) {
        this.user.workExperienceList = this.workExpArray;
      }
      console.log("user object after failure", this.user);
      this.util.openSnackbar("work experience data is not saved please retry");
      if (err.error instanceof Error) {
        console.log("client side error");
      }else {
        console.log("server side error");
      }
    }
    
    )
  }

  saveSkill(skill: SkillExp , skillExpArray: Array<SkillExp>, skillExpEvent: SkillExpEvent, isEvent: boolean) {
    if (skill != undefined) {
      this.skillExpArray.push(skill);
    }

    console.log("skill exp event ", skillExpEvent)

    if (this.user.skillList != undefined) {
      this.user.skillList = this.skillExpArray;
    }
    console.log("user objec before calling service", this.user)
    this.skillMode = "query";
    this.userService.saveSkill(this.user).subscribe((data: User) => {
      console.log("user saved", data)
      this.skillMode = "determinate";
      this.skillExpArray = data.skillList;
    },

    (err: HttpErrorResponse) => {
      this.skillMode = "indeterminate";
      if (isEvent) {
        this.undoSkillExpEvent(skillExpEvent);
      } else {
        this.skillExpArray = this.skillExpArray.filter(skill => skill != skill);
      }
      if (this.user.skillList != undefined) {
        this.user.skillList = this.skillExpArray;
      }
      console.log("user object after failure", this.user);
      this.util.openSnackbar("skill data is not saved please retry");
      if (err.error instanceof Error) {
        console.log("client side error");
      }else {
        console.log("server side error");
      }
    }
    
    )
  }


  openSkillAddDialog() {
    const dialogRef = this.matDialog.open(SkillDialogComponent, {
      width: '800px',
      height: '400px',
    })

    dialogRef.afterClosed().subscribe((form: FormGroup) => {

      console.log("skills dialog data after closed", form);

      if (form != undefined) {
        if (form.value.name != undefined && form.value.experience != undefined ) {
          let skillExp = new SkillExp(form.value.name, form.value.experience);
          this.saveSkill(skillExp, this.skillExpArray, undefined, false);
        }else if( form.value.name != undefined && form.value.experience == undefined) {
          let skillExp = new SkillExp(form.value.name, 0);
          this.saveSkill(skillExp, this.skillExpArray, undefined, false);
        }
        console.log("skill exp array values ", this.skillExpArray.toString())
      }
    })
  }



}
