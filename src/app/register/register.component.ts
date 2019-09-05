import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, TemplateRef, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';

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
      height: '100px'
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
