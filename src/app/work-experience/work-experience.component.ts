import { TruncatePipe } from './../truncate.pipe';
import { Subscription } from 'rxjs';
import { WorkExpEvent } from './WorkExpEvent';
import { FormGroup } from '@angular/forms';
import { WorkExpAddDialogComponent } from './../work-exp-add-dialog/work-exp-add-dialog.component';
import { AlertDialogComponent } from './../alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { WorkExp } from './WorKExp';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit, OnDestroy{

  @Input() workExp: WorkExp;
  @Output() workExpEvent = new EventEmitter<WorkExpEvent>();
  workExpSub: Subscription;

  show: boolean = false;

  constructor(private matDialog: MatDialog, private truncate: TruncatePipe) { }

  truncatedRespo : string;
  fullRespo: string;
  showRespo: string;

  ngOnInit() {
    this.fullRespo = this.workExp.responsibilities;
    this.truncatedRespo =  this.truncate.transform(this.fullRespo, ['200']);
    this.showRespo =  this.truncatedRespo;
  }

  readMore() {
    this.showRespo = this.fullRespo;
    this.show = true;
  }

  readLess() {
    this.showRespo =  this.truncatedRespo;
    this.show = false;
  }


  removeWorkExp(workExperience: WorkExp) {

    if(workExperience != undefined) {
      let dialogRef  = this.matDialog.open(AlertDialogComponent, {
        data: {
          deleteLabel : "work experience"
        }
      });

      this.workExpSub = dialogRef.afterClosed().subscribe( result => {
        if (result == 'confirm') {
          console.log("deleting the work exp", workExperience);
          this.workExpEvent.emit(new WorkExpEvent(workExperience, "DE", workExperience));
        }
        if (result == "discard") {
          console.log("I am not doing deletion !!!!")
        }
      })
    }
  }
 

  openWorkExpEditDialog(workExperience: WorkExp) {
    console.log("work exp in edit ", workExperience)
    const dialogRef = this.matDialog.open(WorkExpAddDialogComponent, {
        width: '900px',
        height: '850px',
        data : {
          role: workExperience.role,
          companyName: workExperience.companyName,
          location: workExperience.location,
          yearStarted: workExperience.yearStarted,
          yearEnded: workExperience.yearEnded,
          responsibilities: workExperience.responsibilities,
          isStillWorking: workExperience.isStillWorking
        }
      })
    
    this.workExpSub = dialogRef.afterClosed().subscribe((form: FormGroup) =>{

      if ( form != undefined) {
        console.log("work exp form data ", form)
        if(form.value.companyName != undefined) {
          this.workExpEvent.emit(new WorkExpEvent(new WorkExp(form.value.role, form.value.companyName, form.value.location, 
            form.value.yearStarted, form.value.yearEnded, form.value.responsibilities, form.value.isStillWorking), "EDIT", workExperience));
      }
    }

    //console.log("work exp data after dialog closed ", this.workExpArray.toString() );

    })
  }

  ngOnDestroy(){
    if(this.workExpSub) {
      this.workExpSub.unsubscribe();
    }
  }

}
