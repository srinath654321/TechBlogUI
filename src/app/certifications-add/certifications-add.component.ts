import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-certifications-add',
  templateUrl: './certifications-add.component.html',
  styleUrls: ['./certifications-add.component.css']
})
export class CertificationsAddComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<CertificationsAddComponent>,
  private fb: FormBuilder) { }

  certificationsForm : FormGroup;


  ngOnInit() {
    this.certificationsForm = this.fb.group({
      name: [ , [Validators.required]],
      yearIssued: [],
      yearExpired :[],
      link: [],
      checked: []    
    })
  }

  onNoClick(){
    this.dialogRef.close();
  }

  onClose(){
    this.dialogRef.close();
  }

  get name(){
    return this.certificationsForm.get('name');
  }
}