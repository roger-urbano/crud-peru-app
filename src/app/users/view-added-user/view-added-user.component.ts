import {Component, Input, OnInit} from '@angular/core';
import {BsDatepickerConfig} from 'ngx-bootstrap';
import {IuserNew} from '../../interfaces/user-new';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../../services/users.service';
import {Iuser} from '../../interfaces/user';
import { Location } from '@angular/common';

@Component({
   selector: 'app-view-added-user',
   templateUrl: './view-added-user.component.html',
   styleUrls: ['./view-added-user.component.scss']
})
export class ViewAddedUserComponent implements OnInit {

   colorTheme = 'theme-orange';
   bsConfig: Partial<BsDatepickerConfig>;
   userNew: Iuser;

   constructor(private usersService: UsersService,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private location: Location) {
      this.bsConfig = Object.assign({}, {containerClass: this.colorTheme});  // Custom Datapicker.
   }

   /* Obtener parametros del parametro de la url. */
   ngOnInit() {
      this.activatedRoute.queryParams.subscribe((params) => {
         console.log(params);
         this.userNew = JSON.parse(params.data);
      });
   }

   backAddUser() {
      this.location.back();
   }


}
