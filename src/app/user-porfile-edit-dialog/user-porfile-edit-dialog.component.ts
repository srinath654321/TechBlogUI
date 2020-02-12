import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-porfile-edit-dialog',
  templateUrl: './user-porfile-edit-dialog.component.html',
  styleUrls: ['./user-porfile-edit-dialog.component.css']
})
export class UserPorfileEditDialogComponent implements OnInit {

  aboutForm: FormGroup;

  constructor(private dialogRef: MatDialogRef<UserPorfileEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any, private fb: FormBuilder, private router: Router) { }

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
