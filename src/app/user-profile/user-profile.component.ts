import { UserProfileEditComponent } from './../user-profile-edit/user-profile-edit.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder, private matDialog: MatDialog) { }

  fullName: string;
  email: string;
  role: string;
  address: string;
  phone: string;
  sub: Subscription;

  ngOnInit() {

    this.fullName = "srinat kavuri";
    this.email = "srinath.kavuri@gmail.com"
    this.role = "Developer";
    this.address = "2000 E Roger Road Apt#I22 87719";
    this.phone = "+1 913 284 4805";

  }

  openProfileEditDialog(){
    const dialogRef = this.matDialog.open(UserProfileEditComponent, {
      width : '800px',
      height: '400px',
      data : {
        fullName: this.fullName,
        email: this.email,
        role: this.role,
        address: this.address,
        phone: this.phone
      }

    });
    
    this.sub = dialogRef.afterClosed().subscribe((form: FormGroup) =>{
      console.log("dialog after closed" , form);
      if(form != undefined) {
        this.fullName = form.value.fullName;
        this.email = form.value.email;
        this.role = form.value.role;
        this.address = form.value.address;
        this.phone = form.value.phone;
      }
    })
  }

  openAboutEditDialog(){
    
  }

  ngOnDestroy(){
    console.log("Destroying subscription");
    this.sub.unsubscribe();
  }

}
