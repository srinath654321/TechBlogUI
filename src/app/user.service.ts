import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from './user-profile/User';
import { Certification } from './certification/Certification';
import { SkillExp } from './skill/SkillExp';
import { WorkExp } from './work-experience/WorKExp';
import { Injectable } from '@angular/core';
import { Education } from './education-details/Education';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  url = "http://localhost:8123/user";

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getUser(): Observable<User> {
    console.log( "user name from auth servive ", sessionStorage.getItem("userId"));
    console.log ("is user logged in ", sessionStorage.userLoggedIn)
    if (sessionStorage.userLoggedIn) {
      return this.httpClient.get<User>(this.url, {
        params:{id: sessionStorage.getItem("userId")},
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
    }
  }

  saveUser(user: User):Observable<User> {
    console.log("saving user data ", JSON.stringify(user));
    return this.httpClient.post<User>(this.url, user, this.httpOptions);
  }

  saveSummary(user: User) : Observable<User> {
    return this.saveUser(user);
  }

  saveCertificate(user: User):Observable<User> {
    return this.saveUser(user);
  }

  saveSkill(user: User) : Observable<User> {
    return this.saveUser(user);
  }

  saveWorkExp(user: User) : Observable<User> {
    return this.saveUser(user);
  }

  saveAbout(user: User) : Observable<User> {
    return this.saveUser(user);
  }

  saveEducation(user: User) : Observable<User> {
    return this.saveUser(user);
  }
}
