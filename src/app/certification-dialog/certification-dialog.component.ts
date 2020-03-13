import { AlertDialogComponent } from './../alert-dialog/alert-dialog.component';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-certification-dialog',
  templateUrl: './certification-dialog.component.html',
  styleUrls: ['./certification-dialog.component.css']
})
export class CertificationDialogComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) private data: any, 
  private dialogRef: MatDialogRef<CertificationDialogComponent>, private fb: FormBuilder,
  private matDialog: MatDialog) { }

  certificationsForm : FormGroup;
  yearExpired:any;

  ngOnInit() {

    if( this.data != undefined) {

      if (this.data.yearExpired == undefined) {
        this.yearExpired = undefined;
      }else{
        this.yearExpired = new Date(this.data.yearExpired)
      }

      this.certificationsForm = this.fb.group({
        name: [this.data.name , [Validators.required]],
        yearIssued: [new Date(this.data.yearIssued)],
        yearExpired :[this.yearExpired],
        link: [this.data.link],
        isNeverExpires: [this.data.isNeverExpires]    
      })

    }else {

      this.certificationsForm = this.fb.group({
        name: [ , [Validators.required]],
        yearIssued: [],
        yearExpired :[],
        link: [],
        isNeverExpires: []    
      })

    }

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

  get name(){
    return this.certificationsForm.get('name');
  }

}
