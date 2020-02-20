import { AlertDialogComponent } from './../alert-dialog/alert-dialog.component';
import { EducationDetailsService } from './../education-details.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { Observable} from 'rxjs';
import {map, startWith, debounceTime, tap} from 'rxjs/operators';

@Component({
  selector: 'app-education-dialog',
  templateUrl: './education-dialog.component.html',
  styleUrls: ['./education-dialog.component.css']
})
export class EducationDialogComponent implements OnInit {

  eduForm: FormGroup;
  typeOfDegrees: string[];
  univsList: string[] = [];

  isLoading = false;

  filteredDegreeOptions: Observable<string[]>;

  filteredUnivsOptions: string[];

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
        stillStudying:[]
      })
    } else {
      this.eduForm = this.fb.group({
        schoolName : [this.data.schoolName, [Validators.required]],
        yearStarted : [this.data.yearStarted],
        yearEnded : [this.data.yearEnded],
        typeOfDegree : [this.data.typeOfDegree, [Validators.required]],
        courseName : [this.data.courseName, [Validators.required]],
        gpa : [this.data.gpa],
        stillStudying : [this.data.stillStudying]
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
  if(value.length > 2 && value != undefined) {
    console.log("value from local ",  this.univsList);
    if(this.univsList.length <= 0) {
      console.log("value from memory ", this.univsList);
      this.univsList = this.eduService.getUniversitiesList();
    }
    this.schoolName.valueChanges.pipe(
      tap(()=> this.isLoading = true),
      debounceTime(800),
      map((value) => {
        const val = this.univs_filter(value);
        return val;
      })
    ).subscribe(results => {
      console.log("filetered results", results)
      this.filteredUnivsOptions = results
      this.isLoading = false;
      console.log("loading value", this.isLoading)
    })
  }else {
    this.isLoading = false;
    this.univsList = [];
    this.filteredUnivsOptions = [];
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

  private univs_filter(value: string): string[] {
    if(value != undefined) {
      //console.log("value needs to serach in map ", value[0])
      console.log("univs list ", this.univsList);
  
      return this.univsList.filter(option => option.toLowerCase().includes(value.toLowerCase()));
    }
  }
}
