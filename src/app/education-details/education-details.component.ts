import { EducationDialogComponent } from './../education-dialog/education-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Education } from './Education';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css']
})
export class EducationDetailsComponent implements OnInit {

  @Input() educationArray: Array<Education>
  @Output() edu = new EventEmitter<Education>();

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {

  }



  openEducationAddDialog() {

    const dialogRef  = this.matDialog.open(EducationDialogComponent, {
      width: '800px',
      height: '500px'
    })

    dialogRef.afterClosed().subscribe((form : FormGroup) => {

      if ( form != undefined) {

        this.edu.emit(new Education (form.value.schoolName, form.value.yearStarted, form.value.yearEnded, form.value.typeOfDegree,
          form.value.courseName, form.value.gpa));
      }

      console.log("education detils array after dialog closed", this.educationArray.toString())
    })
  }

}
