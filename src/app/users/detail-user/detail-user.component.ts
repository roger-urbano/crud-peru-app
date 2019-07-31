import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Iuser} from '../../interfaces/user';
import {Location} from '@angular/common';
import {BsDatepickerConfig} from 'ngx-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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

   formEditUser: FormGroup;
   formEditUserValue: Iuser;

   constructor(private usersService: UsersService,
               private formBuilder: FormBuilder,
               private router: Router,
               private activatedRoute: ActivatedRoute,
               private location: Location) {
      this.bsConfig = Object.assign({}, {containerClass: this.colorTheme});  // Personalizar dataPicker.

      // @ts-ignore
      this.user = {};
      this.idUrl = this.activatedRoute.snapshot.paramMap.get('id');  // Capturar valor de id de la url

      this.formEditUser = new FormGroup({
         first_name: new FormControl(''),
         last_name: new FormControl(''),
         last_nameM: new FormControl(''),
         email: new FormControl(''),
         fechaN: new FormControl(''),
         fechaI: new FormControl(''),
      });
   }

   ngOnInit() {
      this.getDetailUser(this.idUrl);
   }

   getDetailUser(idUser: number) {
      this.usersService.getDetailUser(idUser).subscribe(user => {
         this.user = user;
      });
   }

   /* Retornar a pantalla anterior*/
   backListUser() {
      this.location.back();
   }

   /* Validar Formulario */
   onSaveForm() {
      if (this.formEditUser.valid) {
         this.formEditUserValue = this.formEditUser.value;
         this.user = this.formEditUser.value;
         this.updateUser(this.formEditUserValue);

      } else {
         console.log('Formulario no es valido');
      }
   }

   /* Actualizar Usuario */
   updateUser(user: Iuser) {
      this.usersService.updateUser(user).subscribe(userUpdate => userUpdate);
   }
}
