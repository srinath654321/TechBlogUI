import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthLocalService {

  constructor() { }

  
  userName: string;

  isUserLoggedIn(userName: string, password: string) : boolean {
    if (userName == "srinath.kavuri" && password == "kavuri") {
      this.userName = userName;
      return true;
    } else if (userName == "ram" && password == "nalla") {
      this.userName = userName;
      return true;
    }
    return false;
  }

  isSessionAlive() {
    if (sessionStorage.userLoggedIn) {
      return true;
    } else {
      return false;
    }
  }
}
