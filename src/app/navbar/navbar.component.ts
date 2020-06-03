import { AuthService } from 'angularx-social-login';
import { AuthLocalService } from '../auth.local.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { MatSidenav } from '@angular/material';

interface ROUTE {
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


@ViewChild('logOutAlert')public logOutAlert: TemplateRef<any>;
private matDialgRef : MatDialogRef<any>;

@ViewChild('sidenav') matSideNav: MatSidenav;

techBlogRoutes : ROUTE[] = [
    {
      route: 'topic',
      title: 'JAVA'
    },
    {
      route: 'topic',
      title: 'SQL'
    }
  ]

  userName: string;

  techTools :string[] = ["SPRING", "HIBERNATE", "JACKSON", "DROPWIZARD", "MYSQL"]  

  constructor(private router: Router, private matDialog: MatDialog, 
    private socialAuthService: AuthService) { }

  topic: string;

  ngOnInit() {
  }

  onLogOut(){
    this.matDialgRef = this.matDialog.open(this.logOutAlert)
    
    // sessionStorage.clear();
    // this.router.navigate(['login']);
  }

  onNavigation(event: any) {
    console.log("clicked value in navigation ", event.target.textContent)
    this.topic = event.target.textContent;
    this.topic = this.topic.trim();
    this.router.navigate(['topic'], {queryParams: {topic: this.topic}})
    this.matSideNav.close();
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
