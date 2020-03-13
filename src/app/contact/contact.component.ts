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

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
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
    
    this.sub = dialogRef.afterClosed().subscribe((form: FormGroup) =>{
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