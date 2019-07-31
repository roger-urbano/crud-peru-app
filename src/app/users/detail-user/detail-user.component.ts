import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Iuser} from '../../interfaces/user';
import { Location } from '@angular/common';
import {BsDatepickerConfig} from 'ngx-bootstrap';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {

   colorTheme = 'theme-orange';
   bsConfig: Partial<BsDatepickerConfig>;

   user: Iuser;
   idUrl;

  constructor(private usersService: UsersService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private location: Location) {
     this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });  // Personalizar dataPicker.

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

  backListUser() {
     this.location.back();
  }

}
