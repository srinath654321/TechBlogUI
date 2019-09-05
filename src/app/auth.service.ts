import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  
  userName: string;

  isUserLoggedIn(userName: string, password: string) : boolean{
    this.userName = userName;
    return true;
  }

  isSessionAlive() {
    if (sessionStorage.userLoggedIn) {
      return true;
    } else {
      return false;
    }
  }
}
