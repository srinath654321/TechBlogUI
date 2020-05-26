import { FormGroup } from '@angular/forms';
import { CertificationDialogComponent } from './../certification-dialog/certification-dialog.component';

import { AlertDialogComponent } from './../alert-dialog/alert-dialog.component';
import { CertificationEvent } from './CertificationEvent';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Certification } from './Certification';

@Component({
  selector: 'certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {

  @Input() certification : Certification;
  @Output() certificationEvent =  new EventEmitter<CertificationEvent>();

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {

  }

  removeCertification(certification : Certification) {

    if(certification != undefined) {
      let dialogRef = this.matDialog.open(AlertDialogComponent, {
        data:{
          deleteLabel: "certification"
        }
      })

      dialogRef.afterClosed().subscribe( result => {
        if (result == 'confirm') {
          console.log("deleting the certification", certification)
          this.certificationEvent.emit(new CertificationEvent(certification, "DELETE", undefined))
        }
        if (result == "discard") {
          console.log("I am not doing deletion !!!!")
        }
      })
    }

  }

  openCertificationEditDialog(certification: Certification) {
    const dialogRef = this.matDialog.open(CertificationDialogComponent, {
      width:'800px',
      height:'550px',
      data: {
        name: certification.name,
        yearIssued: certification.yearIssued,
        yearExpired: certification.yearExpired,
        link: certification.link,
        isNeverExpires: certification.isNeverExpires
      }
    })

    dialogRef.afterClosed().subscribe((form: FormGroup) => {
      if (form != undefined) {
        console.log("edited certificate form", form)
        if (form.value.isNeverExpires == true) {
          form.value.yearExpired == null;
        }
        this.certificationEvent.emit(new CertificationEvent(new Certification(form.value.name,
          form.value.yearIssued, form.value.yearExpired, form.value.link, form.value.isNeverExpires), "EDIT", certification));
      }
    })
  }

}