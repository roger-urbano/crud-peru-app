import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import {Iuser} from '../interfaces/user';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class UsersService {


   private BASE_URL: string;
   userNew: Observable<any>;
   public users: any;

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

   createUser(firstname, lastname, lastnameM, mail, fechan, fechai): Observable<any>{

      const params = new HttpParams()
         .set('first_name', firstname)
         .set('last_name', lastname)
         .set('last_nameM', lastnameM)
         .set('email', mail)
         .set('fechaN', fechan)
         .set('fechaI', fechai);

      const headers =  new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this.httpClient.post(`${this.BASE_URL}api/users`, params);
   }


   updateUser(user: Iuser) {
      return this.httpClient.put(`${this.BASE_URL}api/users/${user.id}`, user);
   }

   deleteUser(idUser: Iuser) {
      return this.httpClient.delete(`${this.BASE_URL}api/users/${idUser}`);
   }
}










