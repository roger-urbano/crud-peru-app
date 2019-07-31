import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import {UsersService} from '../../services/users.service';
import {NgForm} from '@angular/forms';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Iuser} from '../../interfaces/user';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

   colorTheme = 'theme-orange';
   bsConfig: Partial<BsDatepickerConfig>;

   formAddUser: FormGroup;
   formAddUserValue: Iuser;
   userAddedTemp: Iuser;

   constructor(private usersService: UsersService,
               private formBuilder: FormBuilder,
               private router: Router,
               private activatedRoute: ActivatedRoute) {

      this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });  // Personalizar dataPicker.

    this.formAddUser = new FormGroup({
         first_name: new FormControl('', [Validators.required]),
         last_name: new FormControl('', [Validators.required]),
         last_nameM: new FormControl('', [Validators.required]),
         email: new FormControl('', [Validators.required]),
         fechaN: new FormControl('', [Validators.required]),
         fechaI: new FormControl('', [Validators.required]),
      });
  }

  ngOnInit() {
  }


  createUser() {
     this.usersService.createUser(this.formAddUserValue).subscribe(user =>
        {
        this.userAddedTemp = user;
        },
        err => { console.log("error");
        },
         () => {
            this.routerNewuser(this.userAddedTemp);
         }
        );
  }

   resetForm() {
      this.formAddUser.reset();
   }


   routerNewuser(userAdded: Iuser) {
      let data = userAdded;
      this.router.navigate(['agregar-usuario/nuevo-usuario'], {
      queryParams: { data: JSON.stringify(data)}
      });
   }


   /* Validar Formulario */
   onSaveForm() {
      if (this.formAddUser.valid) {
         this.formAddUserValue = this.formAddUser.value;
         this.createUser();
         this.resetForm();
      } else {
         console.log('Formulario no es valido');
      }
   }



}
