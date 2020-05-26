import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-alert',
  templateUrl: './login-alert.component.html',
  styleUrls: ['./login-alert.component.css']
})
export class LoginAlertComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }

  ngOnInit() {
  }

  onClose(){
    this.dialogRef.close();
  }

  onClickLogin() {
    const reDirectUrl = this.data.reDirectUrl;
    console.log("reDirectUrl in login alert comp" , reDirectUrl)
      this.router.navigateByUrl(
      this.router.createUrlTree(
        ['/login'],{
          queryParams:{
            reDirectUrl
          }
        }
      )
    );
    this.dialogRef.close();
  }
}
