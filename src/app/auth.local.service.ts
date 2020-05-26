import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthLocalService {

  constructor() { }

  
  userName: string;

  isSessionAlive() {
    if (sessionStorage.userLoggedIn) {
      return true;
    } else {
      return false;
    }
  }
}
