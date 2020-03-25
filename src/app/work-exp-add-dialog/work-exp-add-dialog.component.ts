import { AlertDialogComponent } from './../alert-dialog/alert-dialog.component';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-work-exp-add-dialog',
  templateUrl: './work-exp-add-dialog.component.html',
  styleUrls: ['./work-exp-add-dialog.component.css']
})
export class WorkExpAddDialogComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, 
              private dialogRef: MatDialogRef<WorkExpAddDialogComponent>, private fb: FormBuilder,
              private matDialog: MatDialog) { }

  workExpForm: FormGroup;
     

  ngOnInit() {

    if (this.data == undefined) {

      this.workExpForm = this.fb.group({
        role: [,[Validators.required]],
        companyName: [,[ Validators.required]],
        yearStarted: [],
        yearEnded : [],
        location: [],
        responsibilities : [],
        isStillWorking :[]
      })

    } else {

      
      if (this.data.yearStarted != undefined) {
        this.data.yearStarted = new Date(this.data.yearStarted);
      }

      if (this.data.yearEnded != undefined) {
        this.data.yearEnded = new Date(this.data.yearEnded);
      }

      this.workExpForm = this.fb.group({
        role: [ this.data.role ,[Validators.required]],
        companyName: [this.data.companyName ,[ Validators.required]],
        yearStarted: [this.data.yearStarted],
        yearEnded : [this.data.yearEnded],
        location: [this.data.location],
        responsibilities : [this.data.responsibilities],
        isStillWorking :[this.data.isStillWorking]
      })

      console.log("response in dialog ", this.data.responsibilities)

    }
  }


  get role(){
    return this.workExpForm.get('role');
  }

  get companyName(){
    return this.workExpForm.get('companyName');
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

 


}
