import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  signUp(userDetails: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, userDetails);
  }

  login(userDetails: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, userDetails);
  }
}
