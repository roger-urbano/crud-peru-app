import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   loginForm: FormGroup;

  constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router) {

     this.loginForm = this.formBuilder.group({
        // 4. Validar campos del formulario.
        mail: ['', Validators.required],
        password: ['', Validators.required]
     });
  }

  ngOnInit() {

  }

  login(usermail: string, userpassword: string) {
     event.preventDefault();
     this.loginService.login('eve.holt@reqres.in', 'cityslicka').subscribe(response => {
        console.log(response);
        },
        error => {
            console.log('Error al logearse');
        },
        () => this.navLoginTrue()
     );
  }

  navLoginTrue() {
     this.router.navigateByUrl('/usuarios');
  }

}
