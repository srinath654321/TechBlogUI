import { ContactEditEvent } from './ContactEditEvent';
import { Contact } from './Contact';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserContactEditDialogComponent } from './../user-contact-edit-dialog/user-contact-edit-dialog.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact: Contact;
  @Output() contactEditEvent = new EventEmitter<ContactEditEvent>();
  sub: Subscription;

  imageUrl : string;
  email : string;
  fullName : string;

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {

    this.imageUrl = sessionStorage.getItem("imageUrl");
    this.email = sessionStorage.getItem("email");
    this.fullName = sessionStorage.getItem("fullName");

    if (this.contact.imageData == "") {
      console.log ("image data is empty form server, using google image ", this.imageUrl)
      this.contact.imageData = this.imageUrl;
    }

    if (this.contact.email == "") {
      console.log ("email is empty form server, using google sign in email ", this.email);
      this.contact.email = this.email;
    }

    if (this.contact.fullName == "") {
      this.contact.fullName = this.fullName;
    }
  }

  openContactEditDialog() {
    const dialogRef = this.matDialog.open(UserContactEditDialogComponent, {
      width : '800px',
      height: '600px',
      data : {
        fullName: this.contact.fullName,
        email: this.contact.email,
        role: this.contact.role,
        address: this.contact.address,
        phoneNumber: this.contact.phoneNumber,
        imageData: this.contact.imageData
      }

    });
    
    this.sub = dialogRef.afterClosed().subscribe((form: FormGroup) => {
      console.log("dialog after closed" , form);
      if(form != undefined) {
        console.log("saved form data ", form);
        // const reader = new FileReader();
        // reader.onload = () => {
        //   this.imageData = reader.result as string;
        // }
        // reader.readAsDataURL(form.value.imageLocation)
        this.contactEditEvent.emit(new ContactEditEvent(new Contact(form.value.fullName,
          form.value.email, form.value.role, form.value.address, form.value.phoneNumber,
          form.value.imageData), this.contact));
      }
    })
  }

}