import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-user-contact-edit-dialog',
  templateUrl: './user-contact-edit-dialog.component.html',
  styleUrls: ['./user-contact-edit-dialog.component.css']
})
export class UserContactEditDialogComponent implements OnInit {

  profileForm : FormGroup;

  constructor(public dialogRef: MatDialogRef<UserContactEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) { }

  imageLocation : string;

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
      ]], 
      imageLocation: [this.data.imageLocation]
    });

    console.log("profile form ", this.profileForm.get('imageLocation').value)
    this.imageLocation = this.profileForm.get('imageLocation').value;
  }

  onNoClick(){
    this.dialogRef.close();
  }

  selectedFile : File;
  fileName: string = null;

  onFileChoose(event){
    console.log("file event started ",event);
    this.selectedFile = <File>event.target.files[0];
    this.profileForm.patchValue({
      imageLocation : this.selectedFile
    })
    this.profileForm.get('imageLocation').updateValueAndValidity()
    this.fileName = this.selectedFile.name;
    console.log("selected file ",  this.selectedFile);
    const reader = new FileReader();
    reader.onload = () => {
      this.imageLocation = reader.result as string;
    }
    reader.readAsDataURL(this.selectedFile)
    console.log("image location now ", this.imageLocation)
  }

  onClose(){
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
