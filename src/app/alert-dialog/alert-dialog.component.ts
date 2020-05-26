import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<AlertDialogComponent>) { }

  alertText : string;

  ngOnInit() {
    console.log("alert lable data", this.data)
    if (this.data.deleteLabel != undefined) {
      this.alertText = "Are you sure do you want to delete " + this.data.deleteLabel + " ?";
    } else if (this.data.closeAlert ! = undefined) {
      this.alertText = "Your changes will not be saved Are you sure you want to close ?";
      console.log(this.alertText)
    } else if (this.data.cancelAlert != undefined) {
      this.alertText = "You changes will not be saved Are you sure you want to cancel ?";
    } else {
      this.alertText = "Are you sure you want to exit your changes will not be saved";
    }
  }

  onCrossClick() {
    this.dialogRef.close();
  }

}
