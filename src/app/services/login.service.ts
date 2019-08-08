import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   private BASE_URL: string;

  constructor(private httpClient: HttpClient) {
      this.BASE_URL = 'https://reqres.in/';
  }

  login(usermail: string, userpassword: string) {
     return this.httpClient.post(`${this.BASE_URL}api/login`, {email: usermail, password: userpassword});
  }
}
