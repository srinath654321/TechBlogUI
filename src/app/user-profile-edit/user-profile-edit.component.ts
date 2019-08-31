import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.css']
})
export class UserProfileEditComponent implements OnInit {

  profileForm : FormGroup;

  constructor(public dialogRef: MatDialogRef<UserProfileEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) { }

  ngOnInit() {

    console.log('userEditData ', this.data);

    this.profileForm = this.fb.group({
      fullName: [this.data.fullName,[
        Validators.required,
      ]],
      email: [this.data.email ,[
        Validators.required,
        Validators.email
      ]],
      role: [this.data.role,[
        Validators.required
      ]],
      address: [this.data.address ,[
        Validators.required,
      ]],
      phone: [this.data.phone, [
        Validators.required,
        Validators.minLength(10)
      ]]
    });
  }

  onNoClick(){
    this.dialogRef.close();
  }

  get fullName(){
    return this.profileForm.get('fullName');
  }

  get email(){
    return this.profileForm.get('email');
  }

  get role(){
    return this.profileForm.get('role');
  }

  get address(){
    return this.profileForm.get('address');
  }

  get phone(){
    return this.profileForm.get('phone');
  }

}
