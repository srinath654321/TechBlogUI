import { InterviewQuestion } from './interview-question';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationDetailsService {

  constructor(private httpClient: HttpClient) { }

  univesityUrl = "http://localhost:8123/cb/universityMatcher";
  questionsUrl = "http://localhost:8123/cb/questions";

  getTypeOfDegreeList() : string[]{
    return ["Bacherlor's", "Master's", "Phd", "Bachelor of Arts", "Bachelors of Science",
    "Bacherlor of fine arts", "Bachelor of Applied Science", "Associate of Arts", "Associate of Science", "Associate of Applied Science", 
    "Masters of Arts", "Masters of Science", "Master of Business Administration", "Master of Fine Arts", "Doctoral Philosophy", 
    "Juris Doctor", "Doctoral Medicine", "Doctor of Dental surgery"]
  }

  getMatchedUnivsData(str : string): Observable<string[]> {
    return this.httpClient.get<string[]>(this.univesityUrl, {
      params: {
        matcher: str
      },
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }


  getQuestions() {
    return this.httpClient.get(this.questionsUrl, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      map((data: InterviewQuestion[]) => {
        return data;
      }), catchError( error => {
        return throwError("please see the error ", error);
      })
    )
  }
}
