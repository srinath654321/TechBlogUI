import { AuthService } from 'angularx-social-login';
import { AuthLocalService } from '../auth.local.service';
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

  userName: string;

 techTools :string[] = ["SPRING", "HIBERNATE", "JACKSON", "DROPWIZARD", "MYSQL"]  

  constructor(private router: Router, private matDialog: MatDialog, private socialAuthService: AuthService) { }

  ngOnInit() {
  }

  onLogOut(){
    this.matDialgRef = this.matDialog.open(this.logOutAlert)
    
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

  
  signOut(): void {
    this.socialAuthService.signOut(true);
    sessionStorage.clear();
    this.matDialgRef.close();
    this.router.navigate(['login']);
  }

  isUserLoggedIn() : boolean {
    if (sessionStorage.userLoggedIn) {
      this.userName = sessionStorage.getItem("firstName");
    }
    return sessionStorage.userLoggedIn;
  }

}
