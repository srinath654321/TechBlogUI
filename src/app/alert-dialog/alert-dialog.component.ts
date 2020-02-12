import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.css']
})
export class AlertDialogComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<AlertDialogComponent>) { }

  deleteLable : string;

  ngOnInit() {
    this.deleteLable = this.data.label;
  }

  onCrossClick() {
    this.dialogRef.close();
  }

}
