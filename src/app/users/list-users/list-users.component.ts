import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UsersService} from '../../services/users.service';
import {Iuser} from '../../interfaces/user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users: Iuser[];

  constructor(private usersService: UsersService, private router: Router) {
     this.users = [];
  }

  ngOnInit() {
     this.router.navigateByUrl('/usuarios'); // Iniciar en pantalla de usuarios.
     this.getUsers();
  }

   getUsers() {
     this.usersService.getUsers().subscribe(users => {
         this.users = users;
     },(err) => console.log('error al consultar', err));
   }

   goDetailUser(idUser: number) {
      this.router.navigate(['usuarios/detalle-usuario/', idUser]);   // Enviar id por URL.
   }

   deleteUser(idUser) {
     console.log("Eliminar item con id: " + idUser);
     this.usersService.deleteUser(idUser).subscribe(response => response);
   }

}
