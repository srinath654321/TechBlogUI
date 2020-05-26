import { LoginAlertComponent } from './login-alert/login-alert.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthLocalService } from './auth.local.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthLocalService, private router: Router, private matDialog: MatDialog){

  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if (this.authService.isSessionAlive()) {
      return true;
    }

    this.router.navigate(['login'], {queryParams : {
      returnUrl : state.url
    }})

    // this.matDialog.open(LoginAlertComponent, {
    //   width : '400px',
    //   height: '200px',
    //   data:{
    //     reDirectUrl: state.url
    //   }
    // })

    return false;
  }
  
}
