import { LoginAlertComponent } from './login-alert/login-alert.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  reDirectUrl: string;

  constructor(private authService: AuthService, private router: Router, private matDialog: MatDialog){

  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log("entering in to guard")
    this.reDirectUrl = route['_routerState']['url'];
    console.log("redirect url in guard", this.reDirectUrl)

    if(this.authService.isSessionAlive()) {
      return true;
    }

    this.matDialog.open(LoginAlertComponent, {
      width : '400px',
      height: '200px',
      data:{
        reDirectUrl: this.reDirectUrl
      }
    })

    // this.router.navigateByUrl(
    //   this.router.createUrlTree(
    //     ['/login'],{
    //       queryParams:{
    //         reDirectUrl
    //       }
    //     }
    //   )
    // );

    return false;
  }
  
}
