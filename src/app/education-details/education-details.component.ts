import { AlertDialogComponent } from './../alert-dialog/alert-dialog.component';
import { EducationEvent } from './EducationEvent';
import { EducationDialogComponent } from './../education-dialog/education-dialog.component';
import { MatDialog} from '@angular/material/dialog';
import { Education } from './Education';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})
export class EducationDetailsComponent implements OnInit {

  @Input() education: Education;
  @Output() eduEvent = new EventEmitter<EducationEvent>();

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {

  }


  openEducationEditDialog(education: Education) {

    const dialogRef = this.matDialog.open(EducationDialogComponent, {
      width: '800px',
      height: '500px',
      data: {
        schoolName: education.schoolName,
        yearStarted: education.yearStarted,
        yearEnded: education.yearEnded,
        typeOfDegree: education.typeOfDegree,
        courseName: education.courseName,
        gpa: education.gpa,
        stillStudying: education.isStillStudying
      }
    })

    dialogRef.afterClosed().subscribe((form : FormGroup) => {
      if (form != undefined) {
        this.eduEvent.emit(new EducationEvent(new Education(form.value.schoolName, form.value.yearStarted, form.value.yearEnded, form.value.typeOfDegree,
        form.value.courseName, form.value.gpa, form.value.isStillStudying), "EDIT", education));
      }
    })

  }


  removeEducation(education: Education){

    const dialogRef  = this.matDialog.open(AlertDialogComponent, {
      data : {
        deleteLabel : "Education"
      }
    })

    dialogRef.afterClosed().subscribe(result => {

      if ( result == "confirm") {
        console.log("removing the edu detail");
        this.eduEvent.emit(new EducationEvent(education, "DELETE", undefined));
      }

      if(result == "discard") {
        console.log("I am deleting the edu detail !!!!")
      }
    })
  }

}
