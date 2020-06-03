import { AlertDialogComponent } from './../alert-dialog/alert-dialog.component';
import { EducationDetailsService } from './../education-details.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { Observable} from 'rxjs';
import {map, startWith, debounceTime, tap} from 'rxjs/operators';
import { strict } from 'assert';

@Component({
  selector: 'app-education-dialog',
  templateUrl: './education-dialog.component.html',
  styleUrls: ['./education-dialog.component.css']
})
export class EducationDialogComponent implements OnInit {

  eduForm: FormGroup;
  typeOfDegrees: string[];
  isLoading = false;

  filteredDegreeOptions: Observable<string[]>;

  filteredUnivsOptions: Array<String>;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<EducationDialogComponent>, 
    private eduService: EducationDetailsService, @Inject (MAT_DIALOG_DATA) private data: any, private matDialog: MatDialog) { }

  ngOnInit() {

    if ( this.data == undefined) {
      this.eduForm = this.fb.group({
        schoolName:[, [Validators.required]],
        yearStarted:[],
        yearEnded:[],
        typeOfDegree:[, [Validators.required]],
        courseName:[, [Validators.required]],
        gpa:[],
        isStillStudying:[]
      })
    } else {

      if (this.data.yearStarted != undefined) {
        this.data.yearStarted = new Date(this.data.yearStarted);
      }

      if (this.data.yearEnded != undefined) {
        this.data.yearEnded = new Date(this.data.yearEnded);
      }

      this.eduForm = this.fb.group({
        schoolName : [this.data.schoolName, [Validators.required]],
        yearStarted : [this.data.yearStarted],
        yearEnded : [this.data.yearEnded],
        typeOfDegree : [this.data.typeOfDegree, [Validators.required]],
        courseName : [this.data.courseName, [Validators.required]],
        gpa : [this.data.gpa],
        isStillStudying : [this.data.isStillStudying]
      })
    }
 

  
  this.typeOfDegrees = this.eduService.getTypeOfDegreeList();


  this.filteredDegreeOptions = this.eduForm.get('typeOfDegree').valueChanges
                                              .pipe(
                                                startWith(''),
                                                map(value => this.degree_filter(value))
                                              )

}

schoolNameKeyUp(value: string) {
  this.isLoading = true;
  if (value.length > 4 && value != undefined) {
    console.log("matcher value ", value);
  this.eduService
    .getMatchedUnivsData(value).subscribe((data:String[]) => {
      this.filteredUnivsOptions = data;
      this.isLoading = false;
    }
    )
  } else {
    this.isLoading = false;
  }
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
  
  onNoClick() {
    const dialogRef = this.matDialog.open(AlertDialogComponent, {
      data: {
        cancelAlert: 'cancel'
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result == "confirm") {
        this.dialogRef.close();
      }
    })
  }

  onClose() {
    const dialogRef = this.matDialog.open(AlertDialogComponent, {
      data: {
        closeAlert: 'close'
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result == "confirm") {
        this.dialogRef.close();
      }
    })
  }

  
  private degree_filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.typeOfDegrees.filter(option => option.toLowerCase().includes(filterValue.toLowerCase()));
  }
}
