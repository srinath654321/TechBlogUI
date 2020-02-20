import { AlertDialogComponent } from './../alert-dialog/alert-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-skill-dialog',
  templateUrl: './skill-dialog.component.html',
  styleUrls: ['./skill-dialog.component.css']
})
export class SkillDialogComponent implements OnInit {

 constructor(@Inject (MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<SkillDialogComponent>,
 private fb: FormBuilder, private matDialog: MatDialog) { }

 skillForm: FormGroup;

 
  ngOnInit() {

    if (this.data != undefined) {
      this.skillForm = this.fb.group({
        skill : [this.data.skill],
        experience: [this.data.experience]
      })
    }else {
      this.skillForm = this.fb.group({
        skill : [''],
        experience: ['']
      });
    }
  }

  get skill() {
    return this.skill;
  }

  get experience() {
    return this.experience;
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
