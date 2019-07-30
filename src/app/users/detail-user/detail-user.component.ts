import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Iuser} from '../../interfaces/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

   user: Iuser;
   idUrl;

  constructor(private usersService: UsersService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private location: Location) {
     // @ts-ignore
     this.user = {};
     this.idUrl = this.activatedRoute.snapshot.paramMap.get('id');  // Capturar valor de id de la url
  }

  ngOnInit() {
     this.getDetailUser(this.idUrl);
  }

  getDetailUser(idUser: number) {
     this.usersService.getDetailUser(idUser).subscribe(user => {
        this.user = user;
     });
  }

  goListUser() {
     // this.router.navigate(['usuarios/detalle-usuario/', idUser]);
     this.location.back();

  }

}
