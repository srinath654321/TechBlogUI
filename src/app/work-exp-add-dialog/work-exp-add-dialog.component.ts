import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-work-exp-add-dialog',
  templateUrl: './work-exp-add-dialog.component.html',
  styleUrls: ['./work-exp-add-dialog.component.css']
})
export class WorkExpAddDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, 
              private dialogRef: MatDialogRef<WorkExpAddDialogComponent>, private fb: FormBuilder) { }

  workExpForm: FormGroup;
     

  ngOnInit() {

    if(this.data == undefined) {

      this.workExpForm = this.fb.group({
        role: [,[Validators.required]],
        companyName: [,[ Validators.required]],
        yearStarted: [],
        yearEnded : [],
        location: [],
        responsibilities : [],
        isCurrent :[]
      })

    }else{

      this.workExpForm = this.fb.group({
        role: [ this.data.role ,[Validators.required]],
        companyName: [this.data.companyName ,[ Validators.required]],
        yearStarted: [this.data.yearStarted],
        yearEnded : [this.data.yearEnded],
        location: [this.data.location],
        responsibilities : [this.data.responsibilities],
        isCurrent :[]
      })

      console.log("respnse in dialog ", this.data.responsibilities)

    }
  }


  get role(){
    return this.workExpForm.get('role');
  }

  get companyName(){
    return this.workExpForm.get('companyName');
  }

  onNoClick(){
    this.dialogRef.close();
  }

  onClose(){
    this.dialogRef.close();
  }


}
