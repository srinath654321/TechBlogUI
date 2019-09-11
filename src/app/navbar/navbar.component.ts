import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { MatSidenav } from '@angular/material';

interface ROUTE{
  icon?: string;
  route?: string;
  title?: string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


@ViewChild('logOutAlert' , {static: false} )public logOutAlert: TemplateRef<any>;
private matDialgRef : MatDialogRef<any>;

techBlogRoutes : ROUTE[] = [
    {
      route: 'java',
      title: 'JAVA'
    },
    {
      route: 'sql',
      title: 'SQL'
    }
  ]

 techTools :string[] = ["SPRING", "HIBERNATE", "JACKSON", "DROPWIZARD", "MYSQL", "GUAVA", "GUICE", "GIT", ]  

  constructor(private router: Router, private matDialog: MatDialog) { }

  ngOnInit() {
  }

  onLogOut(){
    this.matDialgRef = this.matDialog.open(this.logOutAlert, {
      width : '450px',
      height: '200px'
    })
    // sessionStorage.clear();
    // this.router.navigate(['login']);
  }

  onLogOutAlertCancel(){
    this.matDialgRef.close();
  }

  onCrossClick(){
    this.matDialgRef.close();
  }

  onLogOutAlretOK(){
    sessionStorage.clear();
    this.matDialgRef.close();
    this.router.navigate(['login']);
  }

  isUserLoggedIn() : boolean {
    return sessionStorage.userLoggedIn;
  }

}
