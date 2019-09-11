import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Component, OnInit, TemplateRef, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material';

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          // return if another validator has already found an error on the matchingControl
          return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  fullName: string;
  email: string;
  role: string;
  address: string;
  phone: number;
  password: string;
  confirmPassword: string;

  @ViewChild('registrationResponse', {static: false})registrationResponse: TemplateRef<any>;

  constructor(private fb: FormBuilder, private router: Router, private matDialog: MatDialog) { }

  private matDialogRef: MatDialogRef<any>


  ngOnInit() {

    this.registerForm = this.fb.group({
      fullName: [this.fullName,[
        Validators.required,
      ]],
      email: [this.email ,[
        Validators.required,
        Validators.email
      ]],
      password: [
        this.password, [
          Validators.required,
          Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)
        ]
      ],
      confirmPassword: [this.confirmPassword ],
      role: [this.role,[
        Validators.required
      ]],
      address: [this.address ,[
        Validators.required,
      ]],
      phone: [this.phone, [
        Validators.required,
        Validators.minLength(10)
      ]]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }



  onLogin(){
    this.router.navigate(['login']);
  }

  onRegister(){
    console.log("fullname", this.registerForm.get('fullName').value);
    console.log("address", this.registerForm.get('address').value);
    this.matDialogRef = this.matDialog.open(this.registrationResponse, {
      width: '400px',
      height: '200px'
    });
  }

  onClose(){
    this.router.navigate(['login']);
    this.matDialogRef.close();
  }
  


  
  // get fullName(){
  //   return this.registerForm.get('fullName');
  // }

  // get email(){
  //   return this.registerForm.get('email');
  // }

  // get role(){
  //   return this.registerForm.get('role');
  // }

  // get address(){
  //   return this.registerForm.get('address');
  // }

  // get phone(){
  //   return this.registerForm.get('phone');
  // }
}
