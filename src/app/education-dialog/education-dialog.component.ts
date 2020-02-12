import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-dialog',
  templateUrl: './education-dialog.component.html',
  styleUrls: ['./education-dialog.component.css']
})
export class EducationDialogComponent implements OnInit {

  eduForm: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<EducationDialogComponent>) { }

  ngOnInit() {
    this.eduForm = this.fb.group({
      schoolName:[, [Validators.required]],
      yearStarted:[],
      yearEnded:[],
      typeOfDegree:[, [Validators.required]],
      courseName:[, [Validators.required]],
      gpa:[],
      checked:[]
    })
  }

  get schoolName(){
    return this.eduForm.get('schoolName');
  }
  
  get typeOfDegree(){
    return this.eduForm.get('typeOfDegree');
  }

  get courseName(){
    return this.eduForm.get('courseName');
  }
  
  onNoClick(){
    this.dialogRef.close();
  }

  onClose(){
    this.dialogRef.close();
  }

}
