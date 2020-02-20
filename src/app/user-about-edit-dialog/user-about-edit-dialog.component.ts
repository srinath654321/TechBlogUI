import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-user-about-edit-dialog',
  templateUrl: './user-about-edit-dialog.component.html',
  styleUrls: ['./user-about-edit-dialog.component.css']
})
export class UserAboutEditDialogComponent implements OnInit {


  aboutForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<UserAboutEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any, private fb: FormBuilder) { }

  ngOnInit() {
    console.log("dialog data ", this.data.about)
    this.aboutForm = this.fb.group({
      about: [this.data.about, [
        Validators.maxLength(500)
      ]]
    });
  }

  get about(){
    return this.aboutForm.get('about');
  }

  onNoClick(){
    this.dialogRef.close();
  }

  onClose(){
    this.dialogRef.close();
  }

}
