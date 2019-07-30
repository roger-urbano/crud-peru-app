import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import {UsersService} from '../../services/users.service';
import {NgForm} from '@angular/forms';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {IuserNew} from '../../interfaces/user-new';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

   colorTheme = 'theme-orange';
   bsConfig: Partial<BsDatepickerConfig>;

   formAddUser: FormGroup;
   formAddUserValue: IuserNew;
   newUser: any;

   @Output() enviarNewUser = new EventEmitter<any>();

   constructor(private usersService: UsersService,
               private formBuilder: FormBuilder,
               private router: Router) {

     this.bsConfig = Object.assign({}, { containerClass: this.colorTheme });  // Personalizar dataPicker.
     this.newUser = '';

     this.formAddUser = new FormGroup({
         name: new FormControl('', [Validators.required]),
         aPaterno: new FormControl('', [Validators.required]),
         aMaterno: new FormControl('', [Validators.required]),
         email: new FormControl('', [Validators.required, Validators.email]),
         fechaN: new FormControl('', [Validators.required]),
         fechaI: new FormControl('', [Validators.required]),
      });
  }

  ngOnInit() {
  }

   goNewUser() {
      this.router.navigate(['agregar-usuario/nuevo-usuario']);
   }

  createUser() {
     this.usersService.createUser(this.formAddUserValue).subscribe(newUser => {
        this.newUser = newUser;
        console.log(this.newUser);
     });
  }

   sendNewUser() {
      this.enviarNewUser.emit(this.newUser);
   }


   resetForm() {
      this.formAddUser.reset();
   }

   // Validar Formulario
   onSaveForm() {
      if (this.formAddUser.valid) {
         // console.log(JSON.stringify(this.formAddUser.value));
         this.formAddUserValue = this.formAddUser.value;
         this.createUser();
         this.resetForm();
         // this.goNewUser();
      } else {
         console.log('no es valido');
      }
   }



}
