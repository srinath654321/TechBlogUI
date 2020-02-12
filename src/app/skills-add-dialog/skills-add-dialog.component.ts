import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-skills-add-dialog',
  templateUrl: './skills-add-dialog.component.html',
  styleUrls: ['./skills-add-dialog.component.css']
})
export class SkillsAddDialogComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<SkillsAddDialogComponent>,
   private fb: FormBuilder) { }

  skillForm: FormGroup;

  
  ngOnInit() {
    this.skillForm = this.fb.group({
      skill : [''],
      experience: ['']
    });
  }

  get skill(){
    return this.skill;
  }

  get experience(){
    return this.experience;
  }


  onNoClick(){
    this.dialogRef.close();
  }

  onClose(){
    this.dialogRef.close();
  }

}
