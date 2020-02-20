import { FormGroup } from '@angular/forms';
import { AlertDialogComponent } from './../alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SkillExp } from './SkillExp';
import { SkillExpEvent } from './SkillExpEvent';
import { SkillDialogComponent } from '../skill-dialog/skill-dialog.component';

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() skillExp : SkillExp;
  @Output() skillExpEvent = new EventEmitter<SkillExpEvent>();

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
  }

  openSkillEditDialog(skillExp: SkillExp) {

    const dialogRef = this.matDialog.open(SkillDialogComponent, {
      width: '800px',
      height: '400px',
      data:{
        skill: skillExp.skill,
        experience: skillExp.experience
      }
    })

    dialogRef.afterClosed().subscribe((form: FormGroup) => {
      if (form != undefined) {
        this.skillExpEvent.emit(new SkillExpEvent(new SkillExp(form.value.skill, form.value.experience), "EDIT", skillExp));
      }
    }) 
  }


  removeSkill(skillExp: SkillExp) {

    if (skillExp != undefined) {
      const dialogRef = this.matDialog.open(AlertDialogComponent, {
        data: {
          label: "Skill"
        }
      })

      dialogRef.afterClosed().subscribe(result => {
        if(result  == "confirm") {
          console.log("deleting skill");
          this.skillExpEvent.emit(new SkillExpEvent(skillExp, "DELETE", undefined))
        }

        if(result == "discard") {
          console.log("I am not deleting skill  !!!!!")
        }
      })
    }
  }

}
