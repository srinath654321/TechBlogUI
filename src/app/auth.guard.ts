import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){

  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log("entering in to guard")
    const reDirectUrl = route['_routerState']['url'];
    console.log("redirect url in guard", reDirectUrl)

    if(this.authService.isSessionAlive()) {
      return true;
    }

    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['/login'],{
          queryParams:{
            reDirectUrl
          }
        }
      )
    );

    return false;
  }
  
}
