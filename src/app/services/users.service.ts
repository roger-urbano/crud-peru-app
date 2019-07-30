import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Iuser} from '../interfaces/user';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

   private BASE_URL: string;

  constructor(private httpClient: HttpClient) {
     this.BASE_URL = 'https://reqres.in/';
  }

  getUsers(): Observable<Iuser[]> {
     // Crear array desde los valores que vienen desde la propiedad "data"
     return this.httpClient.get(`${this.BASE_URL}api/users?page=1`).pipe(
        map((item: any) => item.data)
     );
  }

  getDetailUser(idUser: number): Observable<Iuser> {
     return this.httpClient.get(`${this.BASE_URL}api/users/${idUser}`).pipe(
        map((user: any) => user.data)
     );
  }

  postUser() {

  }
}
